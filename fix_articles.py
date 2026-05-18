import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix syntax error caused by double quotes
content = content.replace('"",\n        "tags":', '",\n        "tags":')

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("articles.ts fixed")
