export default async function(){

  const response = [
    // {
    //   title: 'Home',
    //   url: '/',
    //   navigation: true,
    // },
    {
      title: 'Home',
      iconClasses: ['bi', 'bi-house-heart'],
      url: '/',
      navigation: true,
    },
    {
      title: 'Lectures',
      iconClasses: ['bi', 'bi-camera-reels'],
      url: '/lectures.html',
      navigation: true,

    },
    {
      title: 'List',
      iconClasses: ['bi', 'bi-list-columns'],
      url: '/toc.html',
      navigation: true,
    },
    {
      title: 'Links',
      iconClasses: ['bi', 'bi-journal-bookmark'],
      url: '/links.html',
      navigation: true,
    },
    {
      title: 'Tiles',
      iconClasses: ['bi', 'bi-grid-3x3-gap'],
      url: '/tiles.html',
      navigation: true,
    },

    {
      title: 'Art',
      iconClasses: ['bi', 'bi-palette'],
      url: '/portfolio.jpg',
      navigation: true,
    },
    {
      title: 'Code',
      iconClasses: ['bi', 'bi-code-slash'],
      url: '/snippets.html',
      navigation: true,
    },
    {
      title: 'Audiobook',
      iconClasses: ['bi', 'bi-book'],
      url: 'https://archive.org/details/audiobook_202211',
      navigation: true,
      external: true,
    },

    {
      title: 'Alerts',
      iconClasses: ['bi', 'bi-chat-dots',],
      url: '/alerts.html',
      navigation: true,
    },

    {
      title: 'Backup Server at catpea.org',
      url: 'https://catpea.org',
      superImportant: true,
      mirror: true,
    },
    {
      title: 'Cat Pea Audio Book (4GB/92hrs)',
      url: 'https://archive.org/details/912-poems',
      veryImportant: true,
      mirror: true,
    },
    {
      title: "Vercel Mirror",
      url: "https://catpea.vercel.app/",
      mirror: true,
    },
    {
      title: "Render Archive Mirror",
      url: "https://catpea.onrender.com/",
      mirror: true,
    },
    {
      title: "Cloudflare Archive Mirror",
      url: "https://catpea.pages.dev/",
      mirror: true,
    },
    {
      title: "Poetry At YouTube",
      url: "https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW",
      mirror: true,
    },
    {
      title: "Bitbucket Mirror",
      url: "https://catpea.bitbucket.io/",
      mirror: true,
    },
    {
      title: "Github Source Code",
      url: "https://github.com/catpea/furkies-purrkies",
      mirror: true,
    },
    {
      title: "Furkies Purkies Bugs",
      url: "https://github.com/catpea/furkies-purrkies/issues",
      mirror: true,
    },

    {
      title: "Westland Warrior Source Code",
      url: "https://github.com/catpea/westland-warrior",
    },
    {
      title: "Westland Warrior Snapshot",
      url: "https://westland-valhalla.github.io/warrior/",
      mirror: true,
    },
    {
      title: "Westland Warrior Bugs",
      url: "https://github.com/catpea/westland-warrior/issues",
    },



    {
      title: 'Hacker News',
      url: 'https://news.ycombinator.com/user?id=catpea',
      social: true,
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/channel/UC6Og8hy_iEgZutvp0SQmNzQ',
      social: true,
    },
    {
      title: 'Cat Pea Reddit',
      url: 'https://www.reddit.com/user/catpea-com/',
      social: true,
    },
    {
      title: 'Internet Archive',
      url: 'https://archive.org/details/@catpea-com',
      social: true,
    },
    {
      title: 'Wayback Machine',
      url: 'https://web.archive.org/web/*/catpea.com',
      social: true,
    },
    {
      title: 'Dribbble',
      url: 'https://dribbble.com/catpea',
      social: true,
    },
    {
      title: 'GitLab',
      url: 'https://gitlab.com/catpea',
      social: true,
    },
    {
      title: 'NPM',
      url: 'https://www.npmjs.com/~catpea',
      social: true,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/catpea',
      social: true,
    },]

  return response;
}
