#!/bin/bash

set -x

if [ $# -ne 3 ];then
	echo "sh <branch> <version> <commit comment>"
	echo "Example: sh main V1.0.0 20250311r01-001_build-test"
	echo "Branch list: main"
	exit 1
fi

if [ "$1" = "main" ]; then
	echo 'export const userBranch = "main";'
else
	echo '"$1" is not exist as Branch!!'
	exit
fi

echo "export const version = '$2';" > src/version.js

git add .
git commit -m $3
git push origin "$1"

rm -f src/version.js

