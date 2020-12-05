#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit --allow-empty -m "Trigger rebuild"
git push -f https://github.com/anhhuy1020/vehicles-saver-admin-panel.git master:gh-pages


cd -