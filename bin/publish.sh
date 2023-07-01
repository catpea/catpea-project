#!/bin/bash

echo
echo
echo GITHUB/chapters updating chapter 07, if you are working on chapter 7, update the file.
cd dist/chapters/chapter-07;
git add .;
git commit -m "Chapter content updates.";
git push;
cd -;


echo
echo
echo GITHUB: updating catpea.github.io
cd $(antwerp read catpea-github configuration.dest)
git add .;
git commit -m "Blog updates";
git push;
cd -;

#
# echo
# echo
# echo GANDI/lftp: updating catpea.github.io
# lftp -f $(antwerp read catpea-gandi configuration.home)/gandi-hosting-batchfile.lftp;


echo
echo
echo GITHUB: saving MAIN DATABASE: catpea-project repository
npm run save;


echo
echo
echo reminders:
echo github website location: $(antwerp read catpea-github configuration.dest)
# echo gandi website location: $(antwerp read catpea-gandi configuration.dest)
