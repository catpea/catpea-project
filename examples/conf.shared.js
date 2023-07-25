import fs from 'fs/promises';
import path from 'path';
import network from './network.js';
import alerts from './alerts.js';
import creators from './creators/index.js';

export default async function(){

  const base = '/home/USERNAME/Universe/Development';

  const configuration = {

        home: path.join(base, 'my-project'),
        dest: path.join(base, 'my-project-gandi/dist/unused'),

         src: path.join(base, 'my-project/database'),
       video: path.join(base, 'my-project/dist/video'),
       audio: path.join(base, 'my-project/dist/audio'),

    chapters: path.join(base, 'my-project/dist/chapters'),

     samples: path.join(base, 'my-project/samples'),
       theme: path.join(base, 'my-project/theme'),
       cache: path.join(base, 'my-project/.cache'),
    snippets: path.join(base, 'my-project/snippets.md'),

    pp: (12* 2), // per-page
    noMp3: false, // toggle is audio/mp3 files are saved in ./files folder, you can host them elsewhere when st to true. adjust links in template...
  };

  const publish = {
    profiles: []
  };


  const covers = [
    {
      prefix: 'sm',
      width: 300,
      height: 300,
    },
    {
      prefix: 'md',
      width: 500,
      height: 500,
    },
    {
      prefix: 'lg',
      width: 700,
      height: 700,
    },
  ];

  const website = {
    title:'Cat Pea University',
    version: '5.5',
  };

  const site = {
    website,
    debug: false,
    network: await network(),
    alerts: await alerts(),
  };

  const response = {
    configuration,
    publish,
    covers,
    site,
    creators: await creators(),
  };

  return response;
}
