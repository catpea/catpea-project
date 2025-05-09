export default async function () {
  const response = [
    {
      type: "info",
      urgent: false,
      text: `Latest Audiobook Release. The mp3 is 227 hours long and 11.5GB in size (Apr 27th 2025)`,
      link: {
        title: `Download or Listen to the mp3 at Archive.org`,
        url: "https://archive.org/details/furkies-purrkies",
      },
    },

    // {
    //    type: 'warning',
    //    urgent: true,
    //    text:`A Marvelous Computer Crash Occured! - Small Delays Possible`,
    //    note:`Lol!, my workstation blinked "Unrecoverable SPI Flash Failure, or CPU Failure" and it is absolutely not fixable. There maybe delays in the publishing of tonight's poem (It's Abe again). Though if you are reading this, then the new (also refurbished, but a bit more snappy) backup workstation is already in place, and things may work out just fine. I am expecting some hiccups, as I had to move everything to a new Linux.`,
    // },

    // {
    //   type: 'warning',
    //   urgent:true,
    //   text:`GitHub problems are preventing audio from uploading.`,
    //   note:`It usually takes a few hours to resolve, until then the audio is availabe on YouTube, sorry.`,
    //   link:{title:`YouTube Backup`, url:'https://www.youtube.com/@catpea'}
    // },

    // {
    //   type: 'warning',
    //   urgent: true,
    //   text: `Possible publishing delays due to thunderstoms.`,
    //   note: `A thunderstorm is forecasted for my area and may cause publishing delays. According to AI the reason for the storm is "because of the butterfly wings in the Amazon that created a ripple effect of energy, which is then channeled through the clouds in the form of a mighty storrm" Storm or no storm, I urge everyone to grab onto theit butts and stay safe anyway. We must all remember that weather, like good poetry, can be damn unpredictable.`
    // },
    //
    //

    //   {
    //     type: 'warning',
    //     urgent: false,
    //     text: `Fixed a lot of links, they got broken because of the switch over.`,
    //     note: `
    //       The new servers just demand that directories are followed by slash for relative paths (images within posts) to properly join and resolve into a valid URL.
    //     `,
    //     // link:{title:`backup just in case: catpea.github.io`, url:'https://catpea.github.io/'}
    // },

    //   {
    //     type: 'success',
    //     urgent: false,
    //     text: `This is the new server (back on vercel) and new domain name registrar (porkbun). Everything should be working now, but since this is a new setup outages are still possible.`,
    //     note: `
    //       New/updated mirrors: catpea.github.io, catpea.pages.dev, catpea.onrender.com, and the old youtube.com/@catpea.
    //     `,
    //     link:{title:`backup just in case: catpea.github.io`, url:'https://catpea.github.io/'}
    // },

    // {type: 'danger', urgent:true,  text:`Heavy rain, loss of electricity and connectivity possible.`},

    // {
    //   type: 'info',
    //   urgent:false,
    //   text:`Website upgrade, possible outages in next couple of weeks.`,
    //   note:`Gandi the domain registrar got bought out and prices are going up. I am transferring the domain names to porkbun.com and trying to divide the text content from audio files to find better hosting companies. But there will be some bugs and outages along the way. You can bookmark the YouTube mirror to serve as backup. It is updated daily.`,
    //   link:{title:`YouTube Backup`, url:'https://www.youtube.com/@catpea'}
    // },
    // {type: 'danger', urgent:true,  text:`Heavy wet snowfall, Is causing such a toll, For it has created a power outage, That might delay poetry's show.`,  note:`Lost power twice, It was not very nice, The transformer started flashing, and ate a poem that was becoming dashing.`},
    // {type: 'info', urgent:false, text:`New Audiobook Release. The mp3 is 116 hours long and 5.2GB in size, beginning with "What Is The Meaning Of Life?" (March 1st 2023)`, link:{title:`Download the mp3 at Archive.org`, url:'https://archive.org/details/116-hours-of-poems'}},
    // {type: 'info', urgent:false,  text:`Fixed summaries on the home page and similar where links did not show up in the litte summary above the LISTEN button`, note:`Lectures have more text in the summary now, it is jibberish but it gives a useful overwiew.`},
    // {type: 'info', urgent:false,  text:`Fixed summaries on the home page and similar where links did not show up in the litte summary above the LISTEN button`, note:`Lectures have more text in the summary now, it is jibberish but it gives a useful overwiew.`},
    // {type: 'info', urgent:false,  text:`Bug, this one was in new video chapter injection function, where I was calculating where to put new posts. I use a concept of weight where light posts are on top and heavy on the bottom, I forgot to sort the posts before calculating order, so 5 of them or so are out of whack now.`, note:`I will have to reorder some posts. They all have permalink addresses now, so urls won't change, only change will be in where the next/previous buttons point to.`},
    // {type: 'info', urgent:false,  text:`Found a bug! I have to write a content integrity checker, some posts show markdown source, becasue it was escaped somewhere along the recent upgrades.`, note:`I will have to write a post-integrity-checker that will carefully test all the posts for a range of problems.`},
    // {type: 'warning', urgent:true,  html:`This is the new website, I am still searching for bugs, but it all seems OK.`},
    // {type: 'success', urgent:false, text:`New Backup Server Launched`, link:{title:`catpea.org`, url:'https://catpea.com'}, note:`The catpea.com server is smol, it can't handle all the mp3 files.`},
  ];
  return response;
}
