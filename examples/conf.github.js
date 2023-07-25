import conf from '/home/USERNAME/Universe/Development/my-project/conf.shared.js';
const root = await conf();

export default async function(){

  const configuration = {
    home: '/home/USERNAME/Universe/Development/my-project-github',
    dest: '/home/USERNAME/Universe/Development/my-project-github/dist/catpea.github.io/docs', // must be named after github username
    noMp3: true,
  };

  const website = {
    version: '5.5-gh',
    variant: 'github',
  };

  Object.assign(root.configuration, configuration);
  Object.assign(root.site.website, website);

  return root;
};
