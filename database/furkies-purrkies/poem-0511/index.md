---
id: poem-0511
guid: aff797ea-13e2-43e4-b67f-9105754f4f4e
title: Why And How Do Hackers Use Those Black Screens?
description: null
tags:
  - furkies-purrkies
date: '2021-07-24T17:54:53.655Z'
lastmod: null
weight: 51100
audio: poetry-0511.mp3
image: poetry-0511-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/9i5zipnKJ14
resources: null
features: {}
draft: false
---

The shortest possible answer is,\
<https://linuxcommandlibrary.com/basic/oneliners> to get a good overview of what they are typing.

It is a different kind of a user interface,\
and the applications within that world can be connected together to make new applications.

This used to be the original computer interface,\
before graphic applications and the mouse were invented.

Today it is used because it is faster than the GUI,\
it is less distracting, and it is easier to make those programs.

---

Think about playing music, how many icons you have to click to get there,\
on the command line you just type in `cvlc ~/Music/*` and keep doing what you were doing.

The reason why graphic user interfaces are popular,\
is because they have an easy on ramp, they give you breadcrumbs.

The command line requires that you remember where your files are,\
and remember some of the command names, such as cvlc to play music, or wget to download a file.

---

You don't have to memorize those commands,\
[you can just download a little cheat-sheet](https://www.google.com/search?q=Linux+Cheat+Sheet).

After a while you will stop forgetting their names,\
it is really not that big of a deal.

And if you need to browse some photos,\
then you just use a normal GUI program that can display them.

Though, instead of clicking on an icon somewhere,\
you'll launch it from the command line by entering its name.

It is just another command to add to your cheat sheet,\
and just like there is a limited number of things that you do on your phone.

You'll also limit yourself to just knowing 5 to 20 things,\
that you normally do on the command line.

---

Just like your phone apps or desktop applications,\
programs on the command line can do multiple things.

every command has a help feature,\
where you type in the command name followed by `-h` and that will list all the different things that a command can do.

For example [wget has a --mirror option](https://www.guyrutenberg.com/2014/05/02/make-offline-mirror-of-a-site-using-wget/),\
here you don't just download a file, but mirror the entire website.

So just imagine wget being an app on your phone, called Web Get,\
and it would have two buttons, "Download A File", and "Download Website".

---

Now let me give you a more involved example,\
I would like to show you how to download internet stories.

Every website offers some way of getting some of their data,\
Hacker News (a website for programmers) has a nice description of their raw data: <https://github.com/HackerNews/API>

We learn that their website data structure is all about numbers,\
and to get at those number we have to download their [topstories.json](https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty)

JSON is a file format, it is not really purrfect for the command line,\
so we will thin it, reduce it simplify with a program called [jq](https://stedolan.github.io/jq/),

jq reaches into the JSON file format and grabs plain text for us,\
without the extra curly bracets, quotes, or in this case, commas that delimit the entries and square brackets that represent lists of data.

We will use [curl](https://www.youtube.com/watch?v=I6id1Y0YuNk), it is very similar to wget,\
but it doesn't have that fancy extra stuff for mirroring websites.

And we need a [jq tutorial](https://stedolan.github.io/jq/manual/#Basicfilters) to give us some hints on how to use it, [sometimes watching a video tutorial is useful too](https://www.youtube.com/watch?v=FSn_38gDvzM),\
I found the stuff under "Array/Object Value Iterator: .\[]".

Programmers speak like this when they assume only other programmers will read their stuff,\
little do they know, we don't really read their funk, we just look at the code.

---

That is an important lesson, never read the freaking manual,\
what takes you 20 minutes instead of 1 minute, teaches you 20 times more.

There is a lot of people out there that say [RTFM](http://www.catb.org/~esr/jargon/html/R/RTFM.html),\
but that is only because they don't know the answer, because they spent their career brainlessly looking everything up - just ignore them.

---

So to get at the numbers we have to say\
curl <https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty> | jq '.\[]'.

Those single quotes tell your command line that your code in there belong to jq,\
the command line is a programming language it self, to keep command related stuff isolated we use single brackets.

---

The way you get a feel for this is by looking at [command line cheat sheets](https://www.google.com/search?q=command+line+cheat+sheets),\
and [video tutorials](https://www.youtube.com/results?search_query=Linux+command+line+tutorial), and if you are going somewhere without computers, [grab some pocket reference titles](https://www.google.com/search?q=linux+pocket+reference).

The smaller the source of information,\
the more valuable the information within.

If you buy a Linux Bible,\
you won't be able to tell what is important and what isn't.

And it is really cool to just have a long little row,\
of pocket reference books, it shows that you don't mess around.

---

At this point we have a lit of numbers that represent stories on hacker news,\
to grab a story we have to curl item / story number followed by .json [27941616.json](https://hacker-news.firebaseio.com/v0/item/27941616.json?print=pretty)

There is a bit of a problem here, because piping the output of the list of numbers to,\
wc command with the -l switch, which stands for word count, count number of lines for me.

Reveals that hacker news API returns 500 story numbers,\
and it is bad etiquette to issue 500 requests to hacker news servers.

Moreover, each hacker news story has, a list of numbers that represent the comments,\
presumably the top comments in the thread.

Even though they say there is no rate limit,\
we would probably trigger their security system and get temporary banned.

---

I recently got banned by npm becasue i was looking for package names I could use to publish a program,\
I knew I wanted something similar to rsync, which is the name of a command responsible for remote synchronization.

But somebody else took rsync ages ago, so I started changing the url in the address bar to\
ssync tsync usync vsync wsync xsync ysync,

And all of a sudden the website said, you are doing too much of that,\
you are temporary banned - fair enough, I guess.

I ended up publishing [rsend](https://github.com/catpea/rsend), because it occurred to me,\
that I am not really syncing arbitrary locations, but sending from local to remote.

I use it, to upload my music to my workout audio player,\
but the program is very ugly because, I only expect GNU utilities on the target system.

While I can program all kinds of things on the local system,\
the remote system will not have my code, so checking file uploads has to be done via Linux commands.

---

One way to throttle our requests, is to use the sleep command, between downloading each of the stories,\
we could sleep for 1 second for the first 10 stories, and then, two seconds, three seconds, and finally five seconds between each request, and nobody would get mad a that.

Another way to do it, is to pre-fetch three or five stories,\
ahead of where you are at right now, so you wouldn't have any wait times, if you just read the stories live.

If all you want to see for the day is 10 stories,\
then you will only download 15, AND NOT 500!

Beyond that, you could do a little bit of maneuvering,\
and begin gathering top stories every hour throughout the day at a comfy 10 second interval.

---

There is something you should know,\
you know how that wc command that we just rand had a -l to make it couldn't lines.

When you are inside a full screen program,\
interacting with things kind of should be maybe about letters as well.

If we made an interactive terminal program,\
that just browsers a screenful at a time.

To go to the next page,\
you would have to pres the "n" key.

This is yet another Black Screen shortcut,\
that goes straight into a cheeatsheet.

We also need to consider other news sources,\
whatever your favorite hangout spots are.

And, not everyone is going to be as nice as Hacker News and present an API,\
there may not be a public API.

In that case we will need to write a screen scraper,\
that is one of the worst kinds of programs.

As it doesn't use the data beneath the screen,\
it just sort of does this ugly scrape of whatever is on the screen.

This entails controlling a full Web Browser,\
and sort of making it look like there is a human browsing the page, where it is actually a freaking robot.

And it gets worse,\
lyke super bad.

There was a world wide DNS problem couple of days ago,\
and Amazon keeps forcing me to solve their CAPTCHA when I use Firefox, Chromium works fine for me.

There maybe websites out there that can stop you from scraping them,\
by presenting a CAPTCHA, and the only way to fix that, is to solve it.

The glitched Amazon that I am still experiencing,\
would only ask me to solve the CAPTCHA once per opening a browser, and that was already pretty annoying.

CAPTCHA is unlikely to feature on News Websites though,\
but if you scrape too quickly, of they detect your browser signature you may bet one.

Now that all websites use JavaScript, you can't just mirror them with wget,\
they need an automated browser that will run the JavaScript to make the pages come to life.

---

When we are inventing on the command line,\
we have to jump ahead of ourselves and see what our program will need when it is finished.

And the first thing that comes to mind,\
is multiple news sources.

If we are to create a system to extract interesting stories from multiple places on the internet,\
then it is definable something that should consist of multiple programs, that run hourly or so.

So we would have one program for extracting data from hacker news,\
another for extracting data from eBay about some obscure phone that is cool but never available.

And another program to get emails from different service providers,\
news from, say, the Raspberry PI blog.

And information from Raspberry Pi, like temperature or pressure changes,\
maybe a new hires photos from the nearby Squirrel cam.

---

We could make this work via a command line RSS reader (with the option of using a proper desktop one),\
by setting up a local RSS server that keeps track of data from all these places.

And I think the data would have to sit in an SQL database,\
this way all those different data sources would have a universal format that can be easily processed.

Once they are put into the database,\
creating custom RSS feeds is easy, they are actually just plain XML files, same idea as JSON.

---

While SQL and the feed server can be easily can be easily controlled from the command line,\
the scraping of the various unfriendly websites, will require a custom program.

Personally I would base it on [Browserless.js](https://browserless.js.org/),\
as it has built-in "evasions technniques (sic)" to prevent being blocked.

I just noticed that they misspelled evasion techniques,\
forked their project, and fixed a couple more mistakes I could find.

[I created a PR, short for pull request, which means that I am requesting that they pull the fixes that I have created](https://github.com/microlinkhq/browserless/pull/295),\
so because Browserless.js is an Open Source Code Project, anybody can make valuable little contributions.

But even with the mighty Browserless.js project,\
websites we would be scraping will sometimes update their code, and our scraper brains would need to be updated.

---

Overall, our best option here, is to cut 10 entries from top of the Hacker News,\
and see if we can get away with making 10 quick requests for their top stories, and call our initial version done.

Personally I would begin testing [Newsbeuter](https://ostechnix.com/newsbeuter-command-line-rssatom-feed-reader-unix-like-systems/) [Snownews](https://github.com/msharov/snownews) [Newsroom](https://www.tecmint.com/newsroom-commandline-linux-news-reader/) and [newsboat](https://www.tecmint.com/newsboat-rss-atom-feed-reader-for-linux-terminals/) to get the feel for command line news,\
and consider moving to desktop RSS clients so as long as they support ad blockers.

And then quietly, I would begin working on my scrapers,\
being mindful that they must output RSS feeds, which then I would add to my RSS readers.

---

To be honest, there is not much time that I have for reading internet news,\
and the more I think about it, the more fetching that little 10 news items program seems, and the more clunky RSS starts to look.

Let us chop off the top then entries from Hacker News,\
and see if we can quickly get an overview of what is going on in the world.

The command for getting the top of data is head, and to specify how many lines we want we use -n,\
so our command now looks like this: curl <https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty> | jq '.\[]' | head -n 10;

Armed with 10 numbers that represent top stories,\
we now have to take the second step, and use each of those numbers to download the titles from Hacker News.

And here we reuse curl, but the url that we give to curl needs to have that number inserted in there,\
there are two ways to do this, one is xargs, and the other a while loop.

The while loop is better, it is more readable, it is faster, but I don't like it because it wraps things,\
my xargs approach, creates a single straight command line.

Unfortunately my line ends up having a command that uses quotes, inside quotes,\
so there is quote escaping, by means of backslash, and that is something I don't like.

But I must say the proper way to do this, is a single pipe,\
get the top story numbers, map the numbers to data, and map the data to text so that it looks nice on the black screen.

Three simple steps,\
get numbers, convert them to stories, print them to screen.

In closing, I will read to you the code of each of the three approaches, in the way that I think about it,\
I wont read quote, backslash, n, backslash n, but give you a somewhat poetic reading.

---

First is my xargs approach, a single pipe;

curl -s `https://hacker-news.firebaseio.com/v0/topstories.json` | jq '.\[]' | head -n 10 | xargs -I % sh -c "curl -s `https://hacker-news.firebaseio.com/v0/item/%.json` | jq -r '. | \[.title,.url, null] | join("\n")'"

Now, describe the first loop approach, which is actually a little bit backwards.

while read -r ID; do curl -s `https://hacker-news.firebaseio.com/v0/item/$ID.json` | jq -r '. | \[.title, "\n", .url, "\n"] | add'; done < <(curl -s `https://hacker-news.firebaseio.com/v0/topstories.json` | jq '.\[]' | head -n 10 )

And here is the way that people probably prefer, but I am unhappy about, because there shoudn't be a loop here.

curl -s `https://hacker-news.firebaseio.com/v0/topstories.json` | jq '.\[]' | head -n 10 | while read -r ID ; do curl -s `https://hacker-news.firebaseio.com/v0/item/$ID.json` | jq -r '. | \[.title, "\n", .url, "\n"] | add'; done;

And that is what the black screens are all about,\
I hope I inspired you to look a little bit more into those black screens.
