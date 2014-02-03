#!/bin/bash
set -e

jekyll build
cd ./source
git add ./ -A
git commit -m '$1'
git push origin master