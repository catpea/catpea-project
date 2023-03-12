---
id: poem-1105
guid: d34aabf3-042f-4bcf-bd29-bd09195bf148
title: A Game Of Chess With Infinite Complexity; Or, Return To Antwerp
description: null
tags:
  - furkies-purrkies
date: '2023-03-12T04:17:52.195Z'
lastmod: null
weight: 110500
audio: poem-1105.mp3
image: poem-1105-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 6
---

Antwerp is the name of my website generator,
it examines files carefully arranged in directories and generates an 18,000 file website.

These types of programs are called static website generators,
and static websites are websites that don’t execute any code just serve files.

I chose the static website model, because it is un-hackable,
there cannot be any bugs to exploit when all the website files are static.

It is also easier to find a cheap static website host,
and deployment, is just a matter of copying files without any special concerns.

---

The code editor I have been using called Atom,
has been extinguished, so I switched to a fork called [Pulsar][1]

And the first thing I did in Antwerp,
is take out this magnificent optimization, in a module I called whooptiedoo.

That allowed me to run website building tasks in a series - or one by one,
and in parallel where each of my CPU cores would be crunching something different.

Examples of tasks that need to run in series, are those that depend on each other,
so getting a lost of all the directories, and then loading up the poems within.

Is a good example of, needing to run something in a series,
because I can’t load up the poems if I don’t have a list of directories with them.

And tasks that run in parallel, are those that are independent of each other,
generating my art portfolio and my code snippets…

Can totally happen at the same time,
because they don’t depend on each other.

---

But there is something even more important than efficient code,
and that is code readability.

Without whooptiedoo optimizations,
the entirety of antwerp consists of a single 20+ item list of actions.

When the actions are ran,
the website is ready to upload.

There is an old saying that I always laughed at,
“Premature optimization is the root of all evil”.

It is so correct, because rather than structuring my list of tasks,
I should have just marked, which can run in parallel.

And then leave it up to a program,
to create a dependency tree, and have a go at it.

---

Finally, there are many static site generator, Jekyll is the classic,
and Hugo, is what Jekyll people tend to switch to, when needing something faster.

But I only ever felt half-bad for not using per-written software,
because you can’t customize it at the core.

As it is most often surrounded, by a plugin or extension ecosystem,
that demands a specific mode of operation…

Often exposing hooks at key points in a program,
you can’t upgrade those programs, to do smarter things.

I was able to upgrade Antwerp in a single afternoon,
to make uploading more efficient, and fragment the audio-book into chapters.

A chapter is about 220 poems, which is about a gigabyte of uncompressed of mp3 files,
this will greatly speed up uploading uploading the audiobook of one.

As I can divide it up into 6 files at about gigabyte in size,
and instead of rebuilding the hole thing, just keep adding new chapters, every 200 poems.

The biggest benefit, of writing custom software,
is the needed maintenance to adapt to new technologies or constraints…

Which keeps you programming, keeps you sharp,
keeps yo well equipped for a career.

And above all keeps you entertained,
as you return to your favorite bits of code throughout your ages.

[1]: https://pulsar-edit.dev/
