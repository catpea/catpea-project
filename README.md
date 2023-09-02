# Cat Pea v4 (monorepo) - Blog Software Research Project
catpea.com

---

This repository replaces furkies-purrkies and westland-warrior,
both will be removed from github.

## Notice

Files in this repository represent the data of a live content management system and are used in the research and development of numerous static site generators.

This repository is large due to accessibility features, where majority of the text is narrated into mp3 files.



## What Is Here

This is the central mono-repository, which also doubles as boilerplate for antwerp configuration.

There are two more packages that are required for operation:

- stellar-fox an http server developed for gandi hosting.
- antwerp static site generator that converts ./database to ./dist/server/www...

### Development

ssh earth 'cat ~/poem.txt'|xclip -selection clipboard; xclip -selection clipboard | head -n 1
antwerp new catpea-github furkies-purrkies --title "Don’t Jump Hoops, Don’t Just Go To College, Don’t Just Work; Integrate" 
pulsar /home/meow/Universe/Development/catpea-project/database/furkies-purrkies/poem-1278
grep b51DMPiThSs database/furkies-purrkies/*/index.md
./bin/build.sh
./bin/publish.sh

### Server

npm run github-server
cd dist/chapters/chapter-07/
http-server .
