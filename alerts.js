export default async function(){
  const response = [
    // {type: 'danger', urgent:true,  text:`Heavy wet snowfall, Is causing such a toll, For it has created a power outage, That might delay poetry's show.`,  note:`Lost power twice, It was not very nice, The transformer started flashing, and ate a poem that was becoming dashing.`},
    {type: 'info', urgent:true, text:`New Audiobook Release. The mp3 is 116 hours long and 5.2GB in size, beginning with "What Is The Meaning Of Life?" (March 1st 2023)`, link:{title:`Download the mp3 at Archive.org`, url:'https://archive.org/details/116-hours-of-poems'}},
    // {type: 'info', urgent:false,  text:`Fixed summaries on the home page and similar where links did not show up in the litte summary above the LISTEN button`, note:`Lectures have more text in the summary now, it is jibberish but it gives a useful overwiew.`},
    // {type: 'info', urgent:false,  text:`Fixed summaries on the home page and similar where links did not show up in the litte summary above the LISTEN button`, note:`Lectures have more text in the summary now, it is jibberish but it gives a useful overwiew.`},
    // {type: 'info', urgent:false,  text:`Bug, this one was in new video chapter injection function, where I was calculating where to put new posts. I use a concept of weight where light posts are on top and heavy on the bottom, I forgot to sort the posts before calculating order, so 5 of them or so are out of whack now.`, note:`I will have to reorder some posts. They all have permalink addresses now, so urls won't change, only change will be in where the next/previous buttons point to.`},
    // {type: 'info', urgent:false,  text:`Found a bug! I have to write a content integrity checker, some posts show markdown source, becasue it was escaped somewhere along the recent upgrades.`, note:`I will have to write a post-integrity-checker that will carefully test all the posts for a range of problems.`},
    // {type: 'warning', urgent:true,  html:`This is the new website, I am still searching for bugs, but it all seems OK.`},
    // {type: 'success', urgent:false, text:`New Backup Server Launched`, link:{title:`catpea.org`, url:'https://catpea.com'}, note:`The catpea.com server is smol, it can't handle all the mp3 files.`},
  ];
  return response;
}
