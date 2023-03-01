#!/bin/bash
ffmpeg -f concat -i dist/server/www/catpea-com/audiolist -c copy ~/audiobook.mp3
