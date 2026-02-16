#!/usr/bin/env python3
import re

with open('./app/alternatives/[platform]/page.tsx', 'r') as f:
    content = f.read()

# Fix: Remove semicolon after the closing brace of generateMetadata return statement
# Pattern: `    };` followed by `}\n` should be `    }\n}\n`

pattern = r"(      type: 'article',\n\s*\);?\s*\n\s*\}"

replacement = r"\1\n\2\n}"

new_content = re.sub(pattern, replacement, content)

with open('./app/alternatives/[platform]/page.tsx', 'w') as f:
    f.write(new_content)

print('File fixed successfully!')
