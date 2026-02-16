const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeOmnisendPricing() {
  let browser;
  try {
    browser = await chromium.launch({
      headless: true 
    });

    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });
    const page = await context.newPage();

    console.log('Navigating to Omnisend pricing page...');
    await page.goto('https://www.omnisend.com/pricing', { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Omnisend pricing is complex. The "Standard" and "Pro" plans have calculated prices ($11.20, $41.30)
    // that depend on the volume calculator and billing frequency. We cannot reliably scrape a single "starting price".
    // We will extract the Free plan (which is static) and the plan details for Standard/Pro.
    
    const pricingData = await page.evaluate(() => {
      const plans = [];

      // 1. FREE PLAN (Static)
      const freeCard = document.querySelector('.pricing-hero'); // Container for the first section
      if (freeCard) {
        const title = "Free Plan";
        const description = "Up to 250 contacts. Perfect for starting out.";
        const price = 0;
        const currency = "USD";
        
        // Extract features from the feature list
        // The HTML has <li> elements with <p> and <b> tags.
        const featureLis = Array.from(freeCard.querySelectorAll('.plan-information li'));
        const features = featureLis.map(li => {
            // Get text content, stripping out icons and tooltips
            // We look for text inside <p> or <b> tags, but need to avoid the tooltip text
            const pTag = li.querySelector('p');
            if (pTag) {
                // Remove tooltip text (often inside a div or small tag)
                const tooltip = pTag.querySelector('.ptb-wrapper');
                if (tooltip) tooltip.remove();
                
                let text = pTag.innerText;
                // Clean up text (e.g., remove "Best for growing..." which is title)
                // We keep specific feature bullets like "250 contacts", "500 emails"
                if (text.length > 50) return null; // Filter out descriptions
                return text.replace('Best for growing and medium-sized businesses focused on email marketing', '').trim();
            }
            return null; 
        }).filter(t => t !== null); // Filter out nulls

        plans.push({
          name: title,
          description: description,
          price: price,
          currency: currency,
          period: "month",
          features: features
        });
      }

      // 2. STANDARD PLAN (Dynamic Calculator)
      // We cannot scrape a reliable price. It is calculated via JS based on volume.
      // We extract the features and name.
      const standardBlock = document.querySelector('.pricing-plan.standart-pricing-block');
      if (standardBlock) {
        const name = "Standard Plan";
        const description = "Best for growing businesses. Pricing is calculated based on contact volume (starting at ~$20/mo).";
        const price = null; // Mark as dynamic
        
        // Extract features
        const featureLis = Array.from(standardBlock.querySelectorAll('.plan-information li'));
        const features = featureLis.map(li => {
            const pTag = li.querySelector('p');
            if (pTag) {
                // Remove tooltip
                const tooltip = pTag.querySelector('.ptb-wrapper');
                if (tooltip) tooltip.remove();
                let text = pTag.innerText;
                if (text.length > 60) return null; // Filter descriptions
                // Clean up specific feature text (e.g., "500 contacts")
                return text.replace(/Reach up to \d+ contacts per month\. Based on contact list size provided above\./, '').trim();
            }
            return null;
        }).filter(t => t !== null);

        plans.push({
          name: name,
          description: description,
          price: price, 
          currency: "USD",
          period: "month", // Actually varies, but keeping "month" is consistent with schema
          features: features
        });
      }

      // 3. PRO PLAN (Dynamic Calculator)
      const proBlock = document.querySelector('.pricing-plan.plan-pro');
      if (proBlock) {
        const name = "Pro Plan";
        const description = "Best for high-volume senders. Includes global SMS credits. Pricing is calculated based on volume.";
        const price = null; // Mark as dynamic

        // Extract features
        const featureLis = Array.from(proBlock.querySelectorAll('.plan-information li'));
        const features = featureLis.map(li => {
            const pTag = li.querySelector('p');
            if (pTag) {
                const tooltip = pTag.querySelector('.ptb-wrapper');
                if (tooltip) tooltip.remove();
                let text = pTag.innerText;
                if (text.length > 60) return null;
                return text.replace(/Reach up to \d+ contacts per month\. Based on contact list size provided above\./, '').trim();
            }
            return null;
        }).filter(t => t !== null);

        plans.push({
          name: name,
          description: description,
          price: price,
          currency: "USD",
          period: "month",
          features: features
        });
      }

      // 4. CUSTOM PRICING
      const customBlock = document.querySelector('.pricing-plan.first');
      if (customBlock) {
        const name = "Custom Pricing";
        const description = "Best for businesses with >150,000 contacts or specific needs. Contact sales for a tailored plan.";
        const price = "Contact Sales"; // No numeric price
        
        const featureLis = Array.from(customBlock.querySelectorAll('.plan-information li'));
        const features = featureLis.map(li => {
             const pTag = li.querySelector('p');
             if (pTag) {
                 const tooltip = pTag.querySelector('.ptb-wrapper');
                 if (tooltip) tooltip.remove();
                 let text = pTag.innerText;
                 if (text.length > 60) return null;
                 return text.replace(/Agree on a custom number of contacts for your account\./, '').trim();
             }
             return null;
        }).filter(t => t !== null);

        plans.push({
          name: name,
          description: description,
          price: price,
          currency: "USD",
          period: "custom",
          features: features
        });
      }

      return plans;
    });

    console.log('Extracted Plans:', pricingData);

    // Save to file
    const outputPath = path.join(__dirname, '../data/pricing.json');
    const existingData = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, 'utf8')) : { lastUpdated: new Date().toISOString(), platforms: {} };
    
    existingData.platforms.omnisend = {
      name: 'Omnisend',
      url: 'https://www.omnisend.com/pricing',
      plans: pricingData,
      lastScraped: new Date().toISOString()
    };

    fs.writeFileSync(outputPath, JSON.stringify(existingData, null, 2));
    console.log(`Saved to ${outputPath}`);

  } catch (error) {
    console.error('Scraping failed:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

scrapeOmnisendPricing();
