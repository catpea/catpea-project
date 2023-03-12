---
id: poem-1016
guid: 2756f1a5-18b9-4b4b-a177-2c6c4182658d
title: My Education Is A Spectacular Disaster
description: null
tags:
  - furkies-purrkies
date: '2022-12-11T23:22:12.980Z'
lastmod: null
weight: 101600
audio: poem-1016.mp3
image: poem-1016-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/Wj1D-qiOseE
  - https://unsplash.com/photos/PuxXygVWWkU
resources: null
features:
  video: true
draft: false
raw: true
chapter: 5
---

And this has nothing to do with the fact,
that schools are creepy and fake.

Just as soon as the first bully wanted to push me into a puddle,
circa third grade, I knew schools were a meat processing plant.

Ran by crooks and supported by all the world's crappy parents,
fake schools are a betrayal that the future generation will never forgive us for.

---

My own self education, is a series of spectacular disasters,
that are really difficult to describe.

Though, I will try to show you,
how spectacular of a disaster it is.

There is only one rule in the world of programming,
that must never be broken.

And I haaaave been thinking, and thinking, and thinking about it,
and it is so bad.

The rule is: "NEVER MAKE YOUR OWN DATABASE",
and I totally agree with it - I swear?

---

[My database, that I just published][1],
which is to say, none of the code is anywhere where it should be.

Has been named after what many consider to be a star ship,
still passing though our solar system.

It is the beautiful, tiny kilometer long, asteroid,
named: Oumuamua.

Which in Hawaiian means,
a scout, as in an [extrasolar visitor][0], checking up on us.

If I wasn't from around here,
I would first be checking up on the state of your schools...

And see how you shaped the system,
all the future of your kind.

I would not be stopping by,
though I'd return in less than a thousand years.

---

And you know what,
if I found out fools are making their own databases.

I wouldn't even try to pretend my non‑gravitational acceleration,
is potentially due to outgassing.

I'd slam the pedal to the metal,
and wait an extra century before coming back.

---

You know I didn't really want to admit to it, but I was classified as an alien, once,
though I flew here from the boring parts of Europe where schools are double-crappy.

---

So, Oumuamua is my little study of databases,
the programming patterns underlying CouchDB in particular.

Originally, my interest did not include CouchDB,
I was focused on in-memory databases...

That are basically just programs exposing,
easy to serialize data structures.

Here the information is saved periodically,
so a battery backup is needed in case of a power outage.

A laptop will do,
as it will be the last thing to run out of electricity.

In this original model there was backup,
consisting only of capturing the raw HTTP requests made to the database.

This is EventSourcing, which means I can re-play,
all the HTTP requests, and reconstruct the latest state of the database.

You can of course make snapshots along the way,
this is nothing new, but I really like the simplicity of it.

I dreamed about just exposing JavaScript as a kind of database,
for a long time, I really let it sink in, and internalize.

I think I had the idea before I came across redis,
but redis has done it well.

My idea might have been inspired by memcache,
which I guessed to be a key=value store, no queries, just key ids.

---

These are fantastic ideas, and what a great name memcache is,
I didn't even have to look at the program to know what it does, bravo.

---

While I was still somewhat pondering [RedBeanPHP][2],
a beautiful and brilliant little invention that helps with prototyping.

I came across CouchDB, and became interested,
in a series of brilliant ideas.

Its automatic use of the GUID for documents,
that you don't id yourself was the same idea I had once used in a big program.

So we became were instant friends,
Oumuamua is my second Couch inspired program.

The first one is [und][3], and works with the file-system,
it actually has a spellchecked README, I think.

On the file-system, und allows for saving files,
by multiple CPU cores withut any conflict or need for MUTEXES and such.

Oumuamua is written for the browser,
and does away with emphasis on versioning.

Though, all it is keeping every revision of all documents,
in history.

That is what a real database does,
there is no erasing, no merging.

Every revision is uniquely tagged,
so even if you have two revisions with the same number.

Coming in from all the way across the world,
in the same microsecond, it is not at all a problem.

The revision with the GUID, that ranks higher,
when sorted alphabetically, wins.

It isn't fair,
but it is beautiful, and simple, and absolutely reliable.

So as long as everyone has all the revisions,
a matter of just downloading them.

Then they will resolve to the same version of data,
everywhere...

Because when we are not sure about something,
we simply sort the bunch alphabetically...

And choose the thing on top,
as the winner - boom.

An you can see how frivolous the process is,
[if the document does not have an id I give it a random one for life][4].

---

I haven't really looked at the original source code anywhere,
because everything is divided up into plugins, and sorted for easy collaboration.

So when working with PouchDB, I just asked myself,
what the design views help with.

And in my estimation, they classify database documents,
grouping them into tables.

[So I just guessed, and programmed a table like system][5],
and that wonderfully demonstrates why my education is a spectacular disaster.

Because I will program my best guesses, until I am proven wrong,
though, I don't maintain any big programs.

My style of spectacularly disastrous self education,
has kept me sharp, sharpening my skills, since I was 10.

Even though I like ideas left and right,
I am still programming my own way forward.

And each time I prove myself wrong,
I yank myself, as if by my own solaces, to a higher understanding...

Of the slice of programming world,
that calls to me.

[0]: https://www.youtube.com/results?search_query=oumuamua
[1]: https://www.npmjs.com/package/oumuamua
[2]: https://www.redbeanphp.com/index.php
[3]: https://github.com/fantasyui-com/und
[4]: https://github.com/catpea/oumuamua/commit/103c04d03e9069b27e3f67d837d02f5df5ef0e19#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346R12
[5]: https://github.com/catpea/oumuamua/commit/103c04d03e9069b27e3f67d837d02f5df5ef0e19#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346R47
