import fs from 'fs/promises';
import path from 'path';
import network from './network.js';
import alerts from './alerts.js';
import creators from './creators/index.js';

export default async function(){

  const base = '/home/meow/Universe/Development';

  const configuration = {

         src: path.join(base, 'catpea-project/database'),
       video: path.join(base, 'catpea-project/dist/video'),
        dest: path.join(base, 'catpea-project/dist/server/www/catpea-com'),

     samples: path.join(base, 'catpea-project/samples'),
       theme: path.join(base, 'catpea-project/theme'),
       cache: path.join(base, 'catpea-project/.cache'),
    snippets: path.join(base, 'catpea-project/snippets.md'),

    pp: (12* 2), // per-page
  };

  const publish = {
    profiles: [
      {
      {
        name: 'horrendous-hosting',
        kind: 'lftp',
        batchfile: 'batchfile.lftp',
        fingerprint: { mtime: true, size: true, hash: 'sha256' },
        guarantee: ['hash'],
        separator: '/',
        silent: false,

        src: {
          sum: 'checksums.json',
        },

        dest: {
          dir: '/lamp0/catpea-com',
          sum: 'https://example.com/checksums.json',
        },

        header: [
          `open sftp://user:@sftp.example.com:/`,
        ],
        create: {},
        remove: {
          disable: true,
          order: ['tar', 'zip', 'mp3', 'png', 'jpg', 'checksums.json'],
        },
        update: {
          order: ['tar', 'zip', 'mp4', 'mp3', 'png', 'jpg', 'txt', 'html', 'checksums.json'],
        },
      },
    ]
  }


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
    version: '4.0',
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
