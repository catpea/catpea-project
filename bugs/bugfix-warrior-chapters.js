#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import util from 'util';
import { marked } from 'marked';
import frontMatter from 'front-matter';
import {last, head, get, set, chunk, } from 'lodash-es';
import yaml from 'js-yaml';

export default async function main(){
  const databases = await getDatabases(path.resolve('database'));
  const paths = await getPaths(databases);
  const records = getRecords(paths);

  console.log(`Working with ${records.length} records.`)

  await loadMetadata(records);
  await updateMetadata(records);
}

async function getDatabases(src){
  return getDirectories(src)
}

async function getPaths(databases){
  const records = [];
  for(const database of databases){
    let entries = await getDirectories(database);
    records.push(...entries);
  }
  return records;
}

async function getDirectories(src){
  return (await fs.readdir(path.join(src), { withFileTypes: true }))
  .filter(dirent => dirent.isDirectory())
  .filter(dirent => !dirent.name.startsWith('_')) // not disabled
  .map(({name}) => path.join(src, name))
}

function getRecords(paths){
  const objects = [];
  for(const src of paths){
    const database = path.basename(path.dirname(src))
    const object = {
      src,
      database,

      file:{},
      attr:{features:{}},
      html:"",
      order:{},
      attachments:[],
    }
    objects.push(object);
  }
  return objects;
}

async function loadMetadata(db){
    for (const record of db) {
      const text = await fs.readFile(path.join(record.src, 'index.md') , 'utf8'); // read text
      const {attributes:attr, body:md} = frontMatter(text); // calculate front matter
      Object.assign(record.attr, attr);
      record.md = md;
    }
    db.sort(function(a,b){ return new Date(a.attr.date) - new Date(b.attr.date) });

}


async function updateMetadata(db){

  const chapterSize = 666;
  const furkies = db.filter(o=>o.database==='westland-warrior');
  const chapters = chunk(furkies, chapterSize);

  let chapterNumber = 1;
  for (const chapter of chapters) {
    for (const record of chapter) {
      record.attr.chapter = chapterNumber;
      // console.log(record.attr);


      const frontObject = Object.assign({
        id: null,
        guid: null,
        title: null,
        description: null,
        tags: [],
        date: null,
        lastmod: null,
        weight: null,
        audio: null,
        image: null,
        images: null, // an array of paths to images related to the page; used by internal templates such as _internal/twitter_cards.html.
        artwork: null,
        resources: null,
        features: {},
        draft: false,
      }, record.attr);

      let reconstruction = '---\n';
      reconstruction += yaml.dump(frontObject);
      reconstruction += '---\n';
      reconstruction += '\n';
      reconstruction += record.md;
      // console.log(reconstruction);
      // await fs.writeFile(path.join(record.src, 'index.md'), reconstruction)
      // console.log(record.attr.id, record.attr.chapter);

    }
    chapterNumber++;
  }


}








main()
