#!/usr/bin/env python3

import re

with open('./app/alternatives/[platform]/page.tsx', 'r') as f:
    content = f.read()

# Fix the backtick issue - convert smart quotes to regular backticks in the description line
# Line pattern: description: `Looking for ${platform.name} alternatives...
content = re.sub(
    r"description: `Looking for \$\{platform\.name\} alternatives\? Compare to top email marketing platforms\. Find better pricing, features, and value for your business\.`,",
    r"description: `Looking for \${platform.name} alternatives? Compare to top email marketing platforms. Find better pricing, features, and value for your business.`,",
    content
)

with open('./app/alternatives/[platform]/page.tsx', 'w') as f:
    f.write(content)

print('File fixed successfully!')
