#!/bin/bash
set -e
message=$1

jekyll build
cd ./source
git add ./ -A
git commit -m '$message'
git push origin master