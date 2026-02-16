const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeKlaviyoPricing() {
  let browser;
  try {
    // Launch headed (no headless) so we can see if we hit the right spot
    // slowMo: 50 slows down actions so we can verify them visually
    browser = await chromium.launch({
      headless: false,
      slowMo: 50
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('Navigating to Klaviyo pricing page...');
    await page.goto('https://www.klaviyo.com/pricing', { waitUntil: 'networkidle', timeout: 60000 });

    console.log('Page loaded.');

    // Helper to wait
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const pricingData = [];

    // --- 1. SCRAPE FREE PLAN ---
    console.log('Scraping Free Plan...');
    // The Free card is usually visible immediately.
    // We use .first() to ensure we get one element if multiple exist (e.g. in footer)
    const freeData = await page.locator('.pricingCalculator-module--freeCard').first().evaluate(el => {
      const title = el.querySelector('h2')?.innerText || "Free Plan";
      const desc = el.querySelector('.pricingCalculator-module--freeCardDescription')?.innerText || "";
      const features = Array.from(el.querySelectorAll('.pricingCalculator-module--freeCardFeatureText')).map(e => e.innerText.trim());
      
      return {
        name: title,
        description: desc,
        price: 0,
        currency: "USD",
        features: features
      };
    });

    if (freeData) {
      console.log('Found Free Plan:', freeData);
      pricingData.push(freeData);
    } else {
      console.log('Free Plan NOT found using selector .pricingCalculator-module--freeCard');
    }

    // --- 2. SCRAPE MARKETING PLAN ---
    console.log('Clicking Marketing tab...');
    const marketingTab = page.locator('button:has-text("Marketing")');
    await marketingTab.click();
    await wait(4000); // Wait for transition and JS to update

    // Wait for the pricing calculator card to update/be visible
    // The card itself usually stays, but the content inside changes.
    // We'll wait for a specific price element or a feature text to know it's ready.
    // But let's just wait for the card class to be attached (it should be, but just in case).
    // Actually, let's wait for the mobile breakdown value to be present (it usually updates).
    try {
      await page.waitForSelector('.mobilePricingBreakdown-module--mobileTotalValue', { state: 'visible', timeout: 10000 });
    } catch (e) {
      console.log('Mobile Total Value selector timed out, proceeding...');
    }
    
    // Now grab the Marketing plan data
    // We grab the first card which likely contains the calculator details
    const marketingData = await page.locator('.pricingCalculator-module--card').first().evaluate(el => {
      let price = null;
      
      // Look for the mobile total breakdown price: .mobilePricingBreakdown-module--mobileTotalValue
      const mobileTotal = el.querySelector('.mobilePricingBreakdown-module--mobileTotalValue');
      if (mobileTotal && mobileTotal.innerText.includes('$')) {
         const match = mobileTotal.innerText.match(/\$\d+(\.\d{2})?/);
         if (match) price = parseFloat(match[1]);
      }

      // Features extraction
      // We grab all feature text items
      const features = Array.from(el.querySelectorAll('.feature-item-module--featureText'))
        .map(e => e.innerText.trim());

      return {
        name: "Email Plan",
        description: "Marketing automation and email",
        price: price,
        currency: "USD",
        features: features
      };
    });

    if (marketingData) {
      console.log('Found Marketing Plan:', marketingData);
      pricingData.push(marketingData);
    }

    // --- 3. DATA + ANALYTICS ---
    console.log('Clicking Data + Analytics tab...');
    const dataTab = page.locator('button:has-text("Data + Analytics")');
    await dataTab.click();
    await wait(4000);

    // Wait for update
    try {
        await page.waitForSelector('.mobilePricingBreakdown-module--mobileTotalValue', { state: 'visible', timeout: 10000 });
    } catch(e) {
        console.log('Timeout waiting for Data + Analytics total, proceeding...');
    }

    const dataPlan = await page.locator('.pricingCalculator-module--card').first().evaluate(el => {
      let price = null;
      const mobileTotal = el.querySelector('.mobilePricingBreakdown-module--mobileTotalValue');
      if (mobileTotal && mobileTotal.innerText.includes('$')) {
         const match = mobileTotal.innerText.match(/\$\d+(\.\d{2})?/);
         if (match) price = parseFloat(match[1]);
      }
      
      const features = Array.from(el.querySelectorAll('.feature-item-module--featureText'))
        .map(e => e.innerText.trim());

      return {
        name: "Data + Analytics",
        description: "Advanced data platform and analytics",
        price: price,
        currency: "USD",
        features: features
      };
    });
    
    if (dataPlan) pricingData.push(dataPlan);
    console.log('Found Data Plan:', dataPlan);

    // --- 4. SERVICE ---
    // Optional: Uncomment if you want to scrape the "Service" plan (often similar price)
    /*
    console.log('Clicking Service tab...');
    const serviceTab = page.locator('button:has-text("Service")');
    await serviceTab.click();
    await wait(4000);
    
    const servicePlan = await page.locator('.pricingCalculator-module--card').first().evaluate(el => {
      // Similar logic
      return { name: "Service", price: null, features: [] };
    });
    if (servicePlan) pricingData.push(servicePlan);
    */

    // Write to file
    const outputPath = path.join(__dirname, '../data/pricing.json');
    const existingData = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, 'utf8')) : { lastUpdated: new Date().toISOString(), platforms: {} };
    
    existingData.platforms.klaviyo = {
      name: 'Klaviyo',
      url: 'https://www.klaviyo.com/pricing',
      plans: pricingData,
      lastScraped: new Date().toISOString()
    };

    fs.writeFileSync(outputPath, JSON.stringify(existingData, null, 2));
    console.log(`Saved to ${outputPath}`);

  } catch (error) {
    console.error('Scraping failed:', error);
    // Exit with error code to make it visible in exec output
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

scrapeKlaviyoPricing();
