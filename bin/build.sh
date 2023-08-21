#!/bin/bash

# Build Phase
echo
echo
echo BUILDING: github
antwerp build catpea-github

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
echo "note: do not forget to run: ./bin/publish.sh";
