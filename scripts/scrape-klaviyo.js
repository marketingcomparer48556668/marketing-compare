const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeKlaviyoPricing() {
  let browser;
  try {
    browser = await chromium.launch({
      headless: false, // Run WITH UI to avoid potential headless issues
      args: ['--disable-blink-features=blink-settings'] // Slightly faster
    });

    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });
    const page = await context.newPage();

    console.log('Navigating to Klaviyo pricing page...');
    await page.goto('https://www.klaviyo.com/pricing', { waitUntil: 'domcontentloaded', timeout: 60000 });

    console.log('Page loaded. Waiting for pricing calculator...');
    
    // Wait for a common element that should exist regardless of plan
    // Fallback: if calculator fails, try waiting for "Free" button text
    try {
      await page.waitForSelector('.pricingCalculator-module--container', { timeout: 15000 });
    } catch (e) {
      console.log('Calculator selector failed, trying fallback...');
      await page.waitForTimeout(3000); // Just wait 3s extra
    }

    console.log('Extracting pricing data...');

    const pricingData = await page.evaluate(() => {
      const plans = [];

      // Helper to find price text nearby
      const findPrice = (container) => {
        const text = container.textContent;
        const match = text.match(/\$\d+(\.\d{2})?/);
        return match ? parseFloat(match[1]) : 0;
      };

      // 1. Free Plan (Always visible)
      const freeSection = document.querySelector('.pricingCalculator-module--freeCardContent');
      if (freeSection) {
        plans.push({
          name: "Free Plan",
          description: freeSection.querySelector('.pricingCalculator-module--freeCardDescription')?.textContent || "Free tier",
          price: 0,
          currency: "USD",
          features: Array.from(freeSection.querySelectorAll('.pricingCalculator-module--freeCardFeatureText')).map(el => el.textContent.trim())
        });
      }

      // 2. Paid Plans (Need to click tabs)
      const tabsToClick = ['Marketing', 'Data + Analytics', 'Service'];
      
      // Note: Clicking tabs here in evaluate() won't trigger UI updates in time for this extraction
      // We can only extract what's currently visible.
      
      // Let's try to grab the "Build a plan" button which might have a total price
      const totalValue = document.querySelector('.mobilePricingBreakdown-module--mobileTotalValue');
      if (totalValue && totalValue.textContent !== '$0') {
         plans.push({
           name: "Current Selection",
           description: "Based on selection in calculator",
           price: parseFloat(totalValue.textContent.replace(/[^0-9.]/g, '')),
           currency: "USD",
           features: ["Dynamic pricing based on selection"]
         });
      }

      return plans;
    });

    console.log('Extracted Plans:', pricingData);

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
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

scrapeKlaviyoPricing();
