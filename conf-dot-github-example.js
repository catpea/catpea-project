import conf from '/home/USER/XXXXX/catpea-project/conf.shared.js';
const root = await conf();

export default async function(){

  const configuration = {
    home: '/home/USER/XXXXX/catpea-project',
    dest: '/home/USER/XXXXX/catpea-project/dist/catpea.github.io/docs', // must be named after github username
    noMp3: true,
  };

  const website = {
    version: '12',
    variant: 'github',
  };

  Object.assign(root.configuration, configuration);
  Object.assign(root.site.website, website);

  return root;
};
