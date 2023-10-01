#!/bin/bash
rm ./audiobook.mp3
ffmpeg -f concat -i ./database/audiolist -c copy ./audiobook.mp3

echo audiobook,poems,inspirational,captivating,soulful,humorous,observations,relaxation,laughter,reflection,furkies
echo 1296 Interesting Poems, 116 Hours Of Inspirational and Captivating Poetry. Good for the soul, good for th heart, Furkies Purkies is a collection of short poems and stories that will captivate and inspire.
echo Furkies Purkies has something for everyone, from the romantic to the humorous, from the silly to the spiritual, this perfect combination of words, emotions and stories will keep you entertained for a hundred hours. It features a variety of topics, ranging from philosophy and observations of the world we live in to funny poems that will make you laugh.
echo Whether you’re looking for a few days of relaxation, a bit of laughter, or a little bit of soulful reflection, Furkies Purkies has it all. Click play and let the furkies carry you away!
