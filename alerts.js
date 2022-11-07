export default async function(){

  const response = [
    {type: 'warning', urgent:true, text:`100 Hour All-In-One Audiobook Uploaded To The Internet Archive. All poems joined together in a latest-first sequence, as a single 4.3GB mp3 file.`, link:{title:`Download the 4.3GB mp3 at Archive.org`, url:'https://archive.org/details/audiobook_202211'}, note:'Every once in a while I smush all the files and upload them to the Internet Archive as a kind of an Audio Book.'},
    {type: 'info', urgent:false,  text:`I added "Lectures" to the website menu, it contains the Westalnd Warrior video lectures. You can sort it by latest (default) or by the intended order.`, link:{ title: `Lectures`, url:'/lectures.html'}, note:``},
    {type: 'info', urgent:false,  text:`Found a bug! I have to write a content integrity checker, some posts show markdown source, becasue it was escaped somewhere along the recent upgrades.`, note:`I will have to write a post-integrity-checker that will carefully test all the posts for a range of problems.`},
    // {type: 'warning', urgent:true,  html:`This is the new website, I am still searching for bugs, but it all seems OK.`},
    // {type: 'success', urgent:false, text:`New Backup Server Launched`, link:{title:`catpea.org`, url:'https://catpea.com'}, note:`The catpea.com server is smol, it can't handle all the mp3 files.`},
  ];

  return response;
}
