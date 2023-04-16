---
id: poem-1139
guid: 56f2813f-6c07-4281-a572-a37d8e773113
title: Learning Programming By Writing Cute Little Programs
description: null
tags:
  - furkies-purrkies
date: '2023-04-15T03:10:38.649Z'
lastmod: null
weight: 113900
audio: poem-1139.mp3
image: poem-1139-illustration.jpg
images: null
artwork:
  - https://www.pexels.com/photo/black-and-silver-laptop-computer-on-round-brown-wooden-table-1181243/
resources: null
features:
  video: true
raw: true
draft: false
chapter: 6
---

Programming is an adventure, very often you make your way downwards,
as it to search for a starting point to your invention.

And once you have nowhere to go,
you begin building your way up.

This is adventurer stuff,
or at the very least a great text adventure game.

---

There are very few things that one needs to know,
programming is all about functions calling functions.

If you have a list, you loop over it,
when you have questions you use if/else statements.

Programming is so easy,
that the languages are not the problem.

It is knowing where to go next,
what the limits are, where the good decisions are.

---

But guess what, all the good places in your adventures,
have cities built around them.

Or application ecosystems,
the long term popular things are good pointers of where to go.

Relational databases, which is just grids of data, like spreadsheets,
but the spreadsheets share fields like user id from users table…

Will pop up in the songs table,
where you can relate users to their songs.

Start all of your inventions,
by making tables of your data, and figure out how to relate them.

On top of that, goes authentication, cookies are neat,
very classy, but JSON web tokens are neat too.

These things sit in the users browser,
reminding your HTTP server, who the user is.

Your HTTP server, pulls data from your relational tables,
so it needs to know the user ID.

HTTP servers are super simple,
so simple that it is easier to make a custom one.

Piece it together out of community provided plugins,
I use koa, but that is just because I am waiting on the new version of express.

When a browser connects to your server, it sends a request,
and that will come up as the arguments to your HTTP server functions.

That is how your signUp, or signIn function,
will receive the user and password arguments.

The browser sends a request to your HTTP server,
and you make a response, send a cookie, or your JSON token.

---

API is an unfinished application,
it is a list of functions your HTTP server can execute.

The first functions you need to write is, signUp(),
and then signIn() which if user name and password is correct, gives your browser a cookie, or a token to hang on to.

Then you create API functions that require a valid user,
updateProfile(), makePlaylist(), addSong(), addSongToPlaylist().

All of these need to know who the user is,
so that these functions execute under the correct account.

A lot of people use cUrl here, it is a command line utility,
usually ran on the black terminal screen they show in Hacker movies.

cUrl makes requests to HTTP servers,
and prints out their replies.

So you can test everything out,
ling before you have a user interface.

A lot of people will laugh at using cUrl,
and whip out some massive over-engineered mistake as proof.

But the cUrl way, cannot be beat,
because it is the simplest possible way to communicate with an HTTP server.

---

The UI technologies are still evolving,
Bootstrap the CSS Framework, and Svelte the Programming System are on top right now.

There are other technologies that seem more popular,
but that is because programmers got stuck with them, and keep using them.

User Interface is not a solved problem, and sticking to older frameworks,
only makes it worse.

---

You will find great comfort in WebSockets, the npm ws library,
could not be simpler, and you only install it on the server.

Your browser is ready to communicate with it,
WebSockets make a persistent connection…

And can keep pumping updates from your database to the UI,
the server will send stuff into your browser without asking.

HTTP is more efficent, but WebSockets,
make application programming easier because it will send in data as it changes.

---

The way to get a hang of all this,
is to write hundreds of cute little programs that explore whatever calls to you.

This is a big deal,
this is about creating tools that help your understanding.

Being confused about Relational Databases, for example,
means that you have to write a little program that helps you visualize them.

Maybe more than one, and same goes for HTTP servers,
just make an HTTP server in nodejs’s koa…

And make a page that lists everything, shows your routes,
shows the request and response HTTP headers.

The same thing applies to UI, if you don’t know where to start learning svelte,
just make a login page, that will help you study Web Tokens or Cookies.

It would be the most beautiful login pop-up,
that opens to a blank page that you can program later.

---

That is one thing that is strange about computers,
they want to help you learn to program them.
