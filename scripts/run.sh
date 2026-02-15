#!/bin/bash

# Simple wrapper to run the scraper manually
cd "$(dirname "$0")/.."
node scripts/scrape-pricing.js
