#!/usr/bin/env node

import fs from 'fs/promises';
import fg from 'fast-glob';
import frontMatter from 'front-matter';

const targets = 'database/furkies-purrkies/poem-*/index.md';
const files = fg.sync([targets]);

let count = 0;
for (const file of files){
  const text = await fs.readFile(file, 'utf8'); // read text
  let {attributes:{guid}, body} = frontMatter(text); // calculate front matter
  body = body.replace(/\\\n/g,'\n  ')
  const lines = body.split(/\n/);

  let bad = false;

  for (const [index, line] of lines.entries()) {
    if(line.match(/\\\[/) ){
      bad=true;
      // console.log({guid, index, line, file});
    }
  }

  if(bad){
    count++;
    console.log(file);
    // console.log(body);
  }

  // process.exit()

}
console.log(`There are ${count} broken file(s).`);
