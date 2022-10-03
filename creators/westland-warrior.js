import { v4 as uuid } from 'uuid';
import { kebabCase } from 'lodash-es';
import yaml from 'js-yaml';
import path from 'path';
import chalk from 'chalk';
import fs from 'fs-extra';
import frontMatter from 'front-matter';

function byWeight(a, b){
  const nameA = a.weight;
  const nameB = b.weight;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}

export default async function({db, dest, kind, title, after, samples, debug}){

  const number = db.length +1;

  const id = kebabCase(title);
  const guid = uuid();
  const date = (new Date()).toISOString();
  const image = `${id}-cover.jpg`;

  let weight = db[db.length-1].weight + 100;

  if(after){
    const target = db.filter(o=>o.title==after).pop();
    if(!target){
    console.log(`Title named "${chalk.bgRed.white(after)}" was not found. Check spelling and try again.`)
    process.exit()
    }

    const targetLocation = db.indexOf(target);
    const last = (targetLocation+1 == db.length);
    if(last){
      weight = target.weight + 100;
    }else{
      let next = db[targetLocation+1];
      let diff = next.weight - target.weight;
      weight = target.weight + parseInt(diff*.1);
    }

    if(debug) console.log(`The weight of ${after} is ${target.weight}, it ${last?chalk.bgRed.white('is'):chalk.green('is not')} the last record, therefore new-record weight is set to ${weight}`);
  }



  const features = {
    ytcover: true,
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
    audio: null,
    image,
    images: null,
    artwork: ['https://catpea.com'],
    resources: null,
    features,
    raw: true,
    draft: false,
  }

  if(debug){
    console.log(attributes);
    process.exit(0);
  }

  const content = [
    '[Making a house with a 3D pen](https://www.youtube.com/watch?v=IxM2zHzxd14)',
    '[3D pen, Theo Jansen mechanism](https://www.youtube.com/watch?v=ObXeT37b1Gk)',
  ];
  const doc = `---\n${yaml.dump(attributes)}---\n\n${content.join('\n\n')}`

  const baseDir = path.join(dest, id);
  const indexFile = path.join(baseDir, 'index.md');
  const filesDir = path.join(baseDir, 'files');

  if(await fs.pathExists(baseDir)) throw new Error(`"${title}" already exists`)
  // console.log(`Creating "${title}" in "${dest}"`);
  await fs.ensureDir(baseDir);
  await fs.ensureDir(filesDir);
  await fs.writeFile(indexFile, doc);

  await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, attributes.image));
  await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, 'sm-'+attributes.image));
  await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, 'md-'+attributes.image));
  await fs.copyFile(path.join(samples, 'image.jpg'), path.join(filesDir, 'xl-'+attributes.image));

  console.log(baseDir);

}
