---
id: poem-0947
guid: 8f866b39-99b2-4f35-9648-7c929b70bf94
title: Cleaning Up The Cat Pea
description: null
tags:
  - furkies-purrkies
date: '2022-10-04T00:12:35.689Z'
lastmod: null
weight: 94700
audio: poem-0947.mp3
image: poem-0947-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
---

I had to write three programs,
to get the new website operational.

I named the programs,
[antwerp], [stellar-fox], and [rsend].

I upgraded rsend,
I use it for the raspberry pi.

---

Antwerp is a code generator,
or more commonly known as...

A static site generator,
it takes a directory of text files.

And processes them,
into HTML code.

HTML is a way, of describing text documents.
It is exactly, like the languages; that word processors abstract away from you.

When you click make text bold,
that information is store in something very similar to HTML.

---

There are many static code generators,
but none of them ever fit my needs.

For example, I would like to have thumbnails of videos I mentioned,
made into a perfect square, that I can use as cover.

Nothing seems to do that for me,
so I have to write the program my self.

---

Stellar Fox named after a building in a Funky Koval comic book,
that I read many times, and still am yet to understand it.

Is an unusual piece of software,
that that up as a surprise.

Because when I signed up to host the website,
I discovered that I had to write the HTTP server.

This is not normal, at all,
under no circumstance should a person looking to host a website...

Be asked to write the HTTP server,
but I loved every second of it.

Just to let you know,
there are thee main concerns.

First the errors, if a file is missing,
send a 404 error, as soon as you can.

Unless the website is live,
where errors scare people.

Then redirect them to the homepage,
all the errors on a live site become redirects.

---

THen handle normal redirects,
one such case is when a person requests a directory....
 
But does not put a slash in the address bar
the server will know it is a folder and can send HTML.

But the browser will think that it is still in the parent directory,
and all the links will be broken.

So when a slash is forgotten,
you send a redirect, and put that slash in there.

This is very clunky,
and kind of silly.

---

And then the third concern,
after errors and redirects.

Is the actually opening and streaming of files,
streaming means you don't read the whole file from disk to memory.

But rather, read a chunk of the file,
and send it to the browser, and keep sending new chunks...

Without ever storing anything big in memory,
this wya you can serve a lot of visitors at the same time.

---

rsend, is short for remote destination data sending,
and this is a huge problem.

My tiny website with some 1,000 posts,
already takes up 5GB of data.

And I am not able to quickly send all of that data,
each time I make a change.

I need a program to calculate what has changed,
while timestamps work sometimes.x 

In a general purpose program like rsend,
some of the new files can be extracted from a backup and be backdated.

So timestamps can't be trusted,
I have to basically add all the letters in a file, and create a fingerprint.

The smaller and faster the fingerprint,
the higher the chance of not picking up some changes.

So this becomes a CPU intensive process,
and it takes a while.

---

In the case of this website, I kind of can use timestamps,
so I have to give rsend for multiple fingerprinting methods.

A proper cryptographic one,
and home baked hokey one that will work on a raspberry pi.

---

There was a lot of tiny little bugs,
in the user interface of the website.

But I fixed most of it today,
maybe all of it.

I just squished another one,
as I was writing this line.

---

I highly recommend programming,
but I think the word learning is wrong choice here.

To cover a broad range of things,
across multiple decades.

I think it is best to think of this talent,
as Living With Programming.

You have to dance around the complexity,
and soak it all up just as a function of dance.











[antwerp]: https://www.npmjs.com/package/antwerp
[stellar-fox]: https://www.npmjs.com/package/stellar-fox
[rsend]: https://www.npmjs.com/package/rsend