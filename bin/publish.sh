#!/bin/bash

echo updating chapter 06, if you are working on chapter 7, update the regenerate.sh file.
cd dist/chapters/chapter-06;
git add .;
git commit -m "Chapter content updates.";
git push;
cd -;

lftp -f /home/meow/Universe/Development/catpea-project/gandi-hosting-batchfile.lftp;
npm run save;
