# Usage

execute ```antwerp``` to get a list of commands after you ```register``` a project.

## Configure Antwerp

antwerp register my-project /path/to/data

points my-project to /path/to/data configuration directory

# Add A New Entry

antwerp new catpea furkies-purrkies --title "The New Furkies Purrkies Title" --after "The Hacker" 

builds a new record in /home/meow/Universe/Development/catpea-project/database/furkies-purrkies

antwerp new catpea westland-warrior --title "The New Westland Warrior Title" --after "The Maveric" 

builds a new record in /home/meow/Universe/Development/catpea-project/database/westland-warrior

antwerp build catpea

builds website in /home/meow/Universe/Development/catpea-project/dist/server/www/catpea-com

antwerp read catpea configuration.snippets 

prints /home/meow/Universe/Development/catpea-project/snippets.md


To build the website based on data:

```antwerp build catpea```

To upload the website, use sftp.
