#!/bin/bash
set -e
MESSAGE=$1

jekyll build
cd ./source
git add ./ -A
git commit -m $MESSAGE
git push origin master