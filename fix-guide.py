#!/usr/bin/env python3

import re

with open('./app/guides/[slug]/page.tsx', 'r') as f:
    content = f.read()

# Find the problematic section - we need to fix where the comma was added after openGraph
# The issue is that my script added: `},\n   'email-subject-line-best-practices': {` after the openGraph closing

# Find the position after the openGraph closing brace and comma
# Pattern to find: openGraph closing with an extra comma
pattern = r"(      type: 'article',\n    \},)\n,\s*'email-subject-line-best-practices': \{"

replacement = r"\1\n  'email-subject-line-best-practices': {"

new_content = re.sub(pattern, replacement, content)

with open('./app/guides/[slug]/page.tsx', 'w') as f:
    f.write(new_content)

print('File fixed successfully!')
