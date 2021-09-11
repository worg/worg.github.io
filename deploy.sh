#!/usr/bin/env bash
# Usage ./deploy.sh [tag] [message]
export NODE_ENV='production'
origin=$(git remote get-url origin) # get current repo remote
branch='master';
defaultTag="build_$(date +'%Y%m%dT%H%M%S')";
tag=${1:-$defaultTag}
outDir='./dist'
echo "Creating Tag: $tag"

# Generate static files
rm -fr "$outDir"
yarn export;
cd "$outDir" || exit 1; 
# Push to specified branch
cp ../CNAME .
touch .nojekyll # Avoid skipping _next on GH pages 
cp 404/index.html 404.html # Custom 404 everywhere
git init;
git checkout -b "$branch";
git remote add origin "$origin";
git add -A .;
git commit -m "${2:-$defaultTag};"
git tag -a "$tag" -m "${2:-$defaultTag};"
git push --tags -f -u origin "$branch";
echo 'done!';
exit 0;
