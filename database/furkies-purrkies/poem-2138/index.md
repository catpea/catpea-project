---
id: poem-2138
guid: 13497e39-b8a8-459b-befe-559f39bbd190
title: There Is No Program
description: null
tags:
  - furkies-purrkies
date: '2026-01-07T02:17:23.110Z'
lastmod: null
weight: 213800
audio: poem-2138.mp3
image: poem-2138-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 14
---

Conspire to hide your program, in commands represented by words,
that could accept arguments, but have the defaults you need.

---

Programs are a solved problem,
the command line is the only way.

It does not require loops, a dirty filthy thing at this level,
and it does not execute code.

The command line, is not meant to run programs,
but to create a flow of data, a|b|c to which data is then injected.

And thus is transformed through a,
and a’s output is then transformed through b, and b’s through c.

If you can get away with it, do not fork or fan a command’s output,
into more than one command, but it is ok if you absolutley must.

Then we go from a|b|c, to a|(b1|c1, b2|c2) which is a tree,
your program now has two ends, two outputs, you can join them on a property.

Or one writes to a log file,
another sends commands to remote server.

You are just creating a data flow,
a tree if you can’t help it.

And you send objects through it,
and transform them in useful ways.

Visual Programming Languages,
like Node-RED, visualize this perfectly.

But, the user interface they ship with,
is not needed, and is far too complex.

Words that you type on your keyboard,
is all you need.

Those words represent commands,
that will have a lot of custom code in them.

We will now close with an example,
this thing will be brutally brief.

The purpose of the example,
is to show you how a real program looks like.

Remember, we are not running commands,
that's for chumps.

We are building a graph,
that processes packets.

Packet in,
result out.

To make a blog,
you need to structure your posts in folders.

For example: catpea/philosophy/chapter-01/post-001
This means, my blog project is called catpea.

I treat it as a book library,
it supports multiple books, in this example a book on philosophy.

Books have chapters,
and each chapter has about a gigabyte's worth of posts.

I support 99 chapters per book,
and posts are numbered, book wide, not per chapter.

Philosophy conceptually supports,
supports 999 posts.

This is a contract,
convention over configuration.

Insinde a post, I have well named things,
image.png, text.md, post.json, audio.mp3.

And a files folder,
for when I feel like making things over-complicated.

Well named things means, or convention,
means there is no configuration.

You always know what the post image is,
by extremely obvious convention.

Now, we can't use the Linux command line,
that was never finished and then patched to do things.

So we need to parse our own text file,
in the age of AI that is done for you.

---

A blog has only two real concerns,
permalinks, underwhich posts are stored.

And pagerizer, where we create index.html,
and index-001.html, index-002.html.

Permalinks and pagerizer, must act as ports,
things that we can send data into.

Permalinks receives,
catpea/philosophy/chapter-01/post-001, catpea/philosophy/chapter-01/post-002, etc.

Pagerizer, receives, a list of all permalinks,
in order, so that it can create index files.

You also have themes, logo, maybe about page,
those are webassets, but they stylize.

We should also worry about posting to multiple places,
you don't want other people uploading your junk to the webarchive.

Those are targets, or destination profiles,
assets should be minimal, and the good stuff, the theme, done somewhere else.

destination profiles, do not belong in blog generation,
that is part of the upload process.

And that program should support multiple destination profiles,
and compress your image files and audio as needed.

The heart of your blog, is then,
minimal assets, permalinks, and pagerizer.

That is three lines of code,
that create ports to which you can send data to, to trigger processing.

```sh eesh

webassets # is the simplest command program maybe a 10 lines of code
permalink # is most complicated, and it supports sub commands
  cover # converts png to avif format
  audio # requires you to narrate your posts and compresses the mp3
  post # fuses text.md and post.json into an index.html under the permalinks url
  # note: the permalink id is stored in post.json, I use a uuid number
pagerizer # which chunks your posts to how many posts show on your home page PP and creates other now numbered index pages.

```
webassets, permalink, cover, audio, post, pagerizer,
are runnable un*x commands, and usable as ES modules.

Bu tthey are ran based on a litte text file,
you choose the formatting that fits your app.

In a hundred fifty years after your third rejuvenation treatment,
you will come to your blog, open main.commands and love your younger self.

Admire your brilliance and foresight,
make your post, and have a nice day.

If you need to add a new feature,
you just add a new command, a word.

---

To actually run this program, you need a shell,
that opens up webassets, permalinks, and pagerizer ports.

I will use a tiny 30 line HTTP server,
but later switch to unix sockets.

And all I will be sending is words,
protocol commands if you wish.

Webassets supports just one protocol command,
sync, it checks for updated files in assets directory and copies them.

Permalinks only supports,
catpea/philosophy/chapter-01/post-00-something

It accepts a path, and transforms a raw post,
to a web page.

Pagerizer, should probably just support a sync command,
but maybe all paths as well.

In a unx socket scenario you send the protocol command,
with echo or cat, the simplest commnds.

In a tiny HTTP server setting,
you post to a specific port using curl.

---

Not at first, but as you learn programming,
permalinks will be job-queue based.

And you will have worker threads,
asking the job-queue for a task.

Thus utilizing, all of your CPU cores,
this is why we want our own script format.

SO that we can interpret things for our use case,
if we used the un*x command like, it would all look ugly.

---

Other architectures exist,
and you will probably use them, until you learn better.

When you don’t do thing this exact way,
your older self will not care to use those programs.

Your older self will not want to waste time,
so they will have AI convert your opinion, into what I described.
