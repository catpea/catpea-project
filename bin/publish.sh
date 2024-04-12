#!/bin/bash

echo -ne "\n\n\n\n\n\n\n\n\n\n"
echo "1/4 - GITHUB/chapters updating chapter 10 -----------------------------------------------------------------------------------------------------"
cd dist/chapters/chapter-10;
git add .;
git commit -m "Chapter Content Update";
git push;
cd -;

echo -ne "\n\n"
echo "2/4 - GITHUB: updating catpea.github.io -------------------------------------------------------------------------------------------------------"
cd $(antwerp read catpea-github configuration.dest)
git add .;
git commit -m "Blog Update";
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

echo NOTE: If you are working on chapter 11, update PUBLISH.SH file, to publish the new data.
echo you must cd and push 11 now, not 10;
echo -ne "\n\n"

echo WHEN SWITCHING TO A NEW CHPTER REPO: make repo on github clone into dist/chapters/, and update "/creators/furkies-purrkies.js" preset
echo -ne "\n\n"

echo NOTE: antwerp will generate into "dist/chapters/chapter-xx"
echo based on the front-mattter in the poem, AND! based on "/creators/furkies-purrkies.js" preset.
echo but to set up "dist/chapters/chapter-xx" you need to create a github repo first,
echo then clone it, update this file, and then run the build...
echo -ne "\n\n"

echo REMEMBER to setup pages branch "main" folder "/docs" in the new chpter repo.
echo "Deploy from a branch=main, /docs, and look into actions for progress...".
echo -ne "\n\n"

echo REMEMBER to update the server to chapter--XX in package.json
echo -ne "\n\n"

echo github website location: $(antwerp read catpea-github configuration.dest)
# echo gandi website location: $(antwerp read catpea-gandi configuration.dest)
