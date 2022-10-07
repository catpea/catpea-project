#!/bin/bash

BACKUP_DIR=".cache/checksums"
BACKUP_FILE="${BACKUP_DIR}/checksums-$(date +%Y-%m-%d-%H-%M-%S -r dist/server/www/catpea-com/checksums.json).json"

# Initialization Phase
mkdir -p $BACKUP_DIR;

# Backup
if [ ! -f "$BACKUP_FILE" ]; then cp "dist/server/www/catpea-com/checksums.json" $BACKUP_FILE; fi;

# Build Phase
antwerp build catpea

# Publish Phase
FILES=$(antwerp changes catpea);
for FILE in $FILES; do
  echo lftp -f $FILE;
done;

echo "Do not forget to save the files run: npm run save"