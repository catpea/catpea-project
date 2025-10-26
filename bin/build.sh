#!/bin/bash

# Build Phase
echo
echo
echo BUILDING: github
antwerp build catpea-github


echo create-slideshow "/home/meow/Universe/Development/catpea-project/database/furkies-purrkies/poem-1520/files/poem-1520.mp3" "/home/meow/Universe/Development/catpea-project/dist/slides/poem-1520" "/home/meow/Universe/Development/catpea-project/dist/video/poem-1520.mp4"


# echo
# echo
# echo backing-up checksims.json (gandi use)
# BACKUP_DIR=".cache/checksums"
# BACKUP_FILE="${BACKUP_DIR}/checksums-$(date +%Y-%m-%d-%H-%M-%S -r $(antwerp read catpea-gandi configuration.dest)/checksums.json).json"
# # Initialization Phase
# mkdir -p $BACKUP_DIR;
# # Backup
# if [ ! -f "$BACKUP_FILE" ]; then cp "$(antwerp read catpea-gandi configuration.dest)/checksums.json" $BACKUP_FILE; fi;

# echo
# echo
# echo BUILDING: gandi
# antwerp build catpea-gandi
# # Publish Phase
# FILES=$(antwerp changes catpea-gandi);
# for FILE in $FILES; do
#   LINES=$(cat "$FILE" | wc -l);
#   echo "WARN: $FILE has $LINES lines.";
#   echo lftp -f "$FILE";
# done;
echo
echo "BUILD COMPLETE!";
echo "note: mp3 files are published to ./dist/chapters/chapter-0X where X is specified in the poem it self";
echo "note: do not forget to run: ./bin/publish.sh";

echo "SLEEPING 90 BEFORE AUTOPUBLISH!!!! !!! 1!!!"
sleep 90;
./bin/publish.sh;
