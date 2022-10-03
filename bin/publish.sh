#!/bin/bash
antwerp build catpea
cp dist/server/www/catpea-com/SHA256SUM .cache/SHA256SUM-$(date +%Y-%m-%d-%H-%M-%S -r dist/server/www/catpea-com/SHA256SUM)
cd dist/server/www/catpea-com
    find . -type f -exec sha256sum {} \; > SHA256SUM;
cd -
antwerp upload catpea > batchfile
echo lftp -f batchfile