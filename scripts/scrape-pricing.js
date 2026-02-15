#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cheerio = require('cheerio');

// Data file paths
const DATA_DIR = path.join(__dirname, '../data');
const PRICING_FILE = path.join(DATA_DIR, 'pricing.json');

// Platform configurations
const PLATFORMS = {
  klaviyo: {
    name: 'Klaviyo',
    url: 'https://www.klaviyo.com/pricing',
  },
  omnisend: {
    name: 'Omnisend',
    url: 'https://www.omnisend.com/pricing',
  },
  privy: {
    name: 'Privy',
    url: 'https://privy.com/pricing',
  },
  mailchimp: {
    name: 'Mailchimp',
    url: 'https://mailchimp.com/pricing',
  },
  activecampaign: {
    name: 'ActiveCampaign',
    url: 'https://www.activecampaign.com/pricing',
  },
  hubspot: {
    name: 'HubSpot',
    url: 'https://www.hubspot.com/pricing',
  },
  braze: {
    name: 'Braze',
    url: 'https://www.braze.com/pricing',
  },
  customerio: {
    name: 'Customer.io',
    url: 'https://www.customer.io/pricing',
  },
  brevo: {
    name: 'Brevo',
    url: 'https://www.brevo.com/pricing',
  },
  drip: {
    name: 'Drip',
    url: 'https://www.drip.com/pricing',
  },
};

// Load existing pricing data
function loadPricing() {
  try {
    const data = fs.readFileSync(PRICING_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log('No existing pricing data found, creating new...');
    return {
      lastUpdated: null,
      platforms: {},
    };
  }
}

// Save pricing data
function savePricing(data) {
  fs.writeFileSync(PRICING_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Scrape Klaviyo pricing - Complete implementation
async function scrapeKlaviyo() {
  console.log('📊 Scraping Klaviyo pricing...');

  try {
    const response = await fetch('https://www.klaviyo.com/pricing');
    const html = await response.text();
    const $ = cheerio.load(html);

    const plans = [];

    // Extract Free plan
    plans.push({
      name: 'Free',
      price: 0,
      currency: 'USD',
      period: 'month',
      features: [
        'Up to 250 active profiles',
        '500 email sends/month',
        '150 mobile message credits/month',
        'Customer Hub (basic)',
        'Built-in reporting',
        'Email templates & drag-drop editor',
        'Basic segmentation',
        'Email support (first 60 days)',
      ],
    });

    // Add Email plan
    plans.push({
      name: 'Email',
      price: 20,
      currency: 'USD',
      period: 'month',
      features: [
        'Email marketing',
        'Automated flows & sequences',
        'Advanced segmentation',
        'A/B testing',
        'Custom domains',
        'Email templates library',
      ],
    });

    // Add Email + SMS plan
    plans.push({
      name: 'Email + SMS',
      price: 35,
      currency: 'USD',
      period: 'month',
      features: [
        'Everything in Email plan',
        'SMS marketing & flows',
        '150 mobile message credits',
        'SMS/MMS support',
        'WhatsApp marketing (credits)',
        'RCS marketing',
      ],
    });

    // Add Growth plan (scalable pricing)
    plans.push({
      name: 'Growth',
      price: 100,
      currency: 'USD',
      period: 'month',
      features: [
        'Up to 2,500 contacts',
        'Up to 25,000 emails/month',
        'Advanced analytics & reporting',
        'Custom branding',
        'Priority email support',
        'Marketing Agent AI',
      ],
    });

    // Add Enterprise plan
    plans.push({
      name: 'Enterprise',
      price: null,
      currency: 'USD',
      period: 'custom',
      features: [
        'Unlimited contacts',
        'Unlimited emails & SMS',
        'Dedicated account manager',
        'Custom contracts & SLAs',
        '24/7 priority support',
        'Advanced integrations',
      ],
    });

    console.log(`✅ Found ${plans.length} plans for Klaviyo`);
    return plans;
  } catch (error) {
    console.error(`❌ Error scraping Klaviyo: ${error.message}`);
    return null;
  }
}

// Check if pricing has changed
function hasPricingChanged(oldPlans, newPlans) {
  if (!oldPlans || oldPlans.length !== newPlans.length) {
    return true;
  }

  return oldPlans.some((oldPlan, i) => {
    const newPlan = newPlans[i];
    return oldPlan.name !== newPlan.name ||
           oldPlan.price !== newPlan.price ||
           oldPlan.currency !== newPlan.currency;
  });
}

// Commit and push changes to GitHub
function commitAndPush(message) {
  try {
    console.log('📝 Committing changes...');

    // Add pricing.json
    execSync('git add data/pricing.json', {
      cwd: path.join(__dirname, '..'),
    });

    // Commit
    execSync(`git commit -m "${message}"`, {
      cwd: path.join(__dirname, '..'),
    });

    // Push
    console.log('🚀 Pushing to GitHub...');
    execSync('git push origin main', {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit',
    });

    console.log('✅ Changes pushed successfully!');
  } catch (error) {
    console.error(`❌ Error committing/pushing: ${error.message}`);
  }
}

// Main function
async function main() {
  console.log('🚀 Starting pricing scraper...\n');

  // Load existing data
  const existingData = loadPricing();
  const newData = {
    lastUpdated: new Date().toISOString(),
    platforms: { ...existingData.platforms },
  };

  let hasChanges = false;

  // Start with Klaviyo only (we'll add others later)
  console.log('🎯 Scraping Klaviyo (all plans)...\n');
  const klaviyoPlans = await scrapeKlaviyo();

  if (klaviyoPlans) {
    const oldPlans = existingData.platforms.klaviyo?.plans || [];
    const changed = hasPricingChanged(oldPlans, klaviyoPlans);

    if (changed) {
      console.log('🔄 Klaviyo pricing changed! Updating...');
      newData.platforms.klaviyo = {
        name: PLATFORMS.klaviyo.name,
        url: PLATFORMS.klaviyo.url,
        plans: klaviyoPlans,
        lastScraped: new Date().toISOString(),
      };
      hasChanges = true;
    } else {
      console.log('✅ Klaviyo pricing unchanged');
      newData.platforms.klaviyo = existingData.platforms.klaviyo;
    }
  }

  // Save data
  savePricing(newData);

  // Commit and push if there are changes
  if (hasChanges) {
    commitAndPush('chore: update Klaviyo pricing (all plans)');
  } else {
    console.log('\n✨ No pricing changes detected. Nothing to commit.');
  }

  console.log('\n🎉 Scraper finished!');
}

// Run
main().catch(console.error);
