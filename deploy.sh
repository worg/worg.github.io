#!/usr/bin/env bash
# Usage ./deploy.sh [tag] [message]
origin=$(git remote get-url origin) # get current repo remote
branch='gh-pages';
defaultTag="build_$(date +'%Y%m%dT%H%M%S')";
tag=${1:-$defaultTag}
outDir='./out'

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
git init;
git checkout -b $branch;
git remote add origin $origin;
git tag -a $tag;
git add -A .;
git commit -m ${2:-$defaultTag};
git push -f;
echo 'done!';
exit 0;