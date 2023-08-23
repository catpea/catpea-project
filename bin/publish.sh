#!/bin/bash

echo -ne "\n\n\n\n\n\n\n\n\n\n"
echo "1/4 - GITHUB/chapters updating chapter 07 -----------------------------------------------------------------------------------------------------"
cd dist/chapters/chapter-07;
git add .;
git commit -m "Chapter content updates.";
git push;
cd -;

echo -ne "\n\n"
echo "2/4 - GITHUB: updating catpea.github.io -------------------------------------------------------------------------------------------------------"
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

echo -ne "\n\n"
echo "3/4 - GITHUB: saving MAIN DATABASE: catpea-project repository ---------------------------------------------------------------------------------"
npm run save;

echo -ne "\n\n"
echo "4/4 - END: CONTENT PUBLISHED ------------------------------------------------------------------------------------------------------------------"
echo reminders:
echo -ne "\n\n"
echo If you are working on chapter 08, update this build file!
echo you must cd and push 08 now, not 07;
echo NOTE: antwerp will generate into "dist/chapters/chapter-07" but to set it up:
echo       you need to create a github repo first, then clone it and then run build.
echo       REMEMBER to setup pages branch "main" folder "/docs"

echo github website location: $(antwerp read catpea-github configuration.dest)
# echo gandi website location: $(antwerp read catpea-gandi configuration.dest)
