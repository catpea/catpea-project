export default async function(){

  const response = [
    {type: 'warning', urgent:true,  html:`This is the new website, I am still searching for bugs, but it all seems OK.`},
    {type: 'success', urgent:false, text:`New Backup Server Launched`, link:{title:`catpea.org`, url:'https://catpea.com'}, note:`The catpea.com server is smol, it can't handle all the mp3 files.`},
    {type: 'success', urgent:false, text:`92 Hour (4GB mp3) Version Uploaded To The Internet Archive`, link:{title:`Download the 4GB mp3 at Archive.org`, url:'https://archive.org/details/912-poems'}, note:'Every once in a while I smush all the files and upload them to the Internet Archive as a kind of an Audio Book'},
  ];

  return response;
}
