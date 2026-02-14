#!/bin/bash

# Add metadata to all platform pages

# Platform metadata
declare -A PLATFORMS=(
  ["omnisend"]="Omnisend|E-commerce marketing automation made simple|Small e-commerce stores|4.7"
  ["privy"]="Privy|Marketing for e-commerce growth|Shopify brands|4.6"
  ["mailchimp"]="Mailchimp|All-in-one marketing platform|Small businesses|4.5"
  ["activecampaign"]="ActiveCampaign|Customer experience automation platform|SMBs growing fast|4.7"
  ["hubspot"]="HubSpot Marketing Hub|Inbound marketing, sales, and service software|Scaling teams|4.6"
  ["braze"]="Braze|Customer engagement platform for brands|Enterprise teams|4.8"
  ["customerio"]="Customer.io|Automated messaging that humans love|Product-led growth|4.7"
  ["brevo"]="Brevo (formerly Sendinblue)|Marketing platform for growing businesses|Budget-conscious teams|4.5"
  ["drip"]="Drip|E-commerce CRM for personalized marketing|Online retailers|4.4"
)

cd "$(dirname "$0")/.."

for platform in "${!PLATFORMS[@]}"; do
  IFS='|' read -r name tagline rating <<< "${PLATFORMS[$platform]}"

  page_file="app/platform/${platform}/page.tsx"

  if [ ! -f "$page_file" ]; then
    echo "Skipping $platform - file not found"
    continue
  fi

  # Check if metadata already exists
  if grep -q "export const metadata" "$page_file" 2>/dev/null; then
    echo "Skipping $platform - metadata already exists"
    continue
  fi

  echo "Adding metadata to $platform..."

  # Create metadata block
  cat > /tmp/metadata.txt << 'EOF'
import type { Metadata } from 'next/link'

export const metadata: Metadata = {
  title: '${name} Review | Pricing, Features & Comparison | MarketingCompare',
  description: 'Read our detailed ${name} review. Compare pricing, features, integrations, and alternatives. See why ${name} is great for ${tagline}.',
  openGraph: {
    title: '${name} Review - ${tagline}',
    description: 'Detailed ${name} review with pricing, features, pros, cons, and alternatives. See why ${name} is great for ${tagline}.',
    url: 'https://marketing-compare.vercel.app/platform/${platform}',
  },
}

EOF

  # Insert metadata after imports
  sed -i '' '/^import Link/a\
\
import type { Metadata } from '\''next'\''' "$page_file"

  # Insert metadata block after imports (before export default)
  sed -i '' "/^import Link/i\\
$(cat /tmp/metadata.txt)" "$page_file"

  echo "✓ $platform metadata added"
done

echo ""
echo "All platform pages updated!"
