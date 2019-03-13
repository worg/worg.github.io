#!/usr/bin/env bash
# Usage ./deploy.sh [tag] [message]
export NODE_ENV='production'
email='hi+gh@worg.xyz'
origin=$(git remote get-url origin) # get current repo remote
branch='master';
defaultTag="build_$(date +'%Y%m%dT%H%M%S')";
tag=${1:-$defaultTag}
outDir='./dist'
echo "Creating Tag: $tag"

# Generate static files
yarn export;
# Push to specified branch
if [ !-d $outDir ]; then 
  echo "${outDir} not found";
  exit 1;
fi
cp ./CNAME $outDir
cd $outDir;
touch .nojekyll # Avoid skippink _next on GH pages 
cp 404/index.html 404.html # Custom 404 everywhere
git init;
git config user.email $email
git checkout -b $branch;
git remote add origin $origin;
git add -A .;
git commit -m "${2:-$defaultTag};"
git tag -a $tag -m "${2:-$defaultTag};"
git push -f -u origin $branch;
echo 'done!';
exit 0;