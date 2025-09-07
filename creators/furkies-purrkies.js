import { v4 as uuid } from 'uuid';
import { kebabCase, padStart } from 'lodash-es';
import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs-extra';
import frontMatter from 'front-matter';

export default async function({db, dest, kind, title, samples, debug}){

  const dupeTitle = db.find(o=>o.title===title);
  if(dupeTitle){
    console.log(`Oh noes, ${dupeTitle.id} is already using that title!`);
    process.exit(0);
  }

  const number = db.length +1;


  const id = kebabCase(`poem-${padStart(number,4,'0')}`);
  const guid = uuid();
  const date = (new Date()).toISOString();
  const image = `${id}-illustration.jpg`;
  const weight = db.sort((a,b)=>a.weight>b.weight)[db.length-1].weight + 100;
  const audio = `${id}.mp3`;

  const features = {
    video: true,
  };

  const attributes = {
    id,
    guid,
    title,
    description: null,
    tags: [ kind ],
    date,
    lastmod: null,
    weight,
    audio,
    image,
    images: null,
    artwork: ['https://catpea.com'],
    resources: null,
    features,
    raw: true,
    draft: false,
    chapter: 14,
  }

  if(debug){
    console.log(attributes);
    process.exit(0);
  }

  const content = [
    'Out of the night that covers me,',
    '',
    'Black as the Pit from pole to pole,',
    '',
    'I thank whatever gods may be',
    '',
    'For my unconquerable soul.',
    '',
    '---',
    '',
    'In the fell clutch of circumstance',
    '',
    'I have not winced nor cried aloud.',
    '',
    'Under the bludgeonings of chance',
    '',
    'My head is bloody, but unbowed.',
    '',
    '---',
    '',
    'Beyond this place of wrath and tears',
    '',
    'Looms but the Horror of the shade,',
    '',
    'And yet the menace of the years',
    '',
    'Finds, and shall find, me unafraid.',
    '',
    '---',
    '',
    'It matters not how strait the gate,',
    '',
    'How charged with punishments the scroll.',
    '',
    'I am the master of my fate:',
    '',
    'I am the captain of my soul.',
  ];
  const doc = `---\n${yaml.dump(attributes)}---\n\n${content.join('\n')}`

  const baseDir = path.join(dest, id);
  const indexFile = path.join(baseDir, 'index.md');
  const filesDir = path.join(baseDir, 'files');

  if(await fs.pathExists(baseDir)) throw new Error(`"${attributes.id}" already exists`)

    await fs.ensureDir(baseDir);
    await fs.ensureDir(filesDir);
    await fs.writeFile(indexFile, doc);

    await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, attributes.image));

    // await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, 'sm-'+attributes.image));
    // await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, 'md-'+attributes.image));
    // await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, 'lg-'+attributes.image));
    await fs.copyFile(path.join(samples, 'audio.mp3'), path.join(filesDir, attributes.audio));

    console.log(baseDir);

}

async function readDirectory(...target){
   return (await fs.readdir(path.join(...target), { withFileTypes: true }))
     .filter(dirent => dirent.isDirectory())
     .filter(dirent => !dirent.name.startsWith('_'))
     .map(({name}) => path.join(...target, name))
 }
