---
id: poem-1778
guid: 7b9019b0-e660-44e8-9ff2-233d641d6e10
title: Learn JavaScript, And Don’t Use Frameworks
description: null
tags:
  - furkies-purrkies
date: '2025-01-13T04:53:12.092Z'
lastmod: null
weight: 177800
audio: poem-1778.mp3
image: poem-1778-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 12
---

Here is what it sounds like,
when a programmer talks about his little inventions.

I hope this will add to convince you that programming is pretty cool,
and that the long road to the mastery of a language is well worth it.

---

I’ve been trying to optimize,
my programming abilities.

I’ve focused all my efforts on a single,
rather simple project.

A visual programming language,
where you connect boxes with lines.

I wrote my program to learn,
to keep sharp,

And because I wanted a place for my little programs,
I write hundreds of things worth keeping, but there is never a right place to put them.

But above all, I wrote a Visual Programming Language,
to easily understand architecture of the programs I create.

Years pass, and it is sometimes hard to remember brilliant ideas behind programs,
a lightweight visual programming language, shows architecture first.

---

I have made many versions,
slowly working my way up to proper technologies.

Learning like heck along the way,
I don’t use frameworks.

And my coding style, is not that far away from,
Mozilla Developer Network stuff.

I always admired code that isn’t obscured by frameworks,
and I just came close to finishing a new redesign.

Which uses, Web Components, Signals,
and a minimalist way to attach mouse stuff to web components.

---

HTML does not draw lines, it is a nested layout engine,
but it does support SVG which is for vector graphics.

And that is where I draw the connecting lines,
I actually have three SVG’s.

This is so that I can both overlap things with lines,
and tuck them in the background.

---

This is a Zooming User Interface,
hosed, in a standard Bootstrap User Interface that has wise UI components.

But that also means, plain x and y coordinates,
that are delivered by various mouse operations, need zooming user interface transformer.

Today, I finally finished, understanding everything enough,
to create a [singe transform function][1].

That takes x and y, and roughly speaking,
and adds UI position on screen, pan X and Y, and while being mindful of zoom.

It was not easy to get here,
but the code quality and overall architecture is very good.

---

The main data structure is like a sky scraper,
where things on each of the floors can pipe data through others floors.

In short it is pipelines with data transformers,
it is a simple function that takes input and returns modified data as output.

But it is ready for the Actor Model, WebStreams, Signals and Rx,
and even Ramda and others.

Smartly supporting both Functional Programming,
and Functional Reactive Programming.

---

It in an open source project, I have already been rewarded,
by education that would otherwise be hard to come by.

There are no problems with money making,
when you invent something great.

You just keep working on it,
until you discover worthwhile features, that require some investment.

And at that point, you have a business,
where you need sign ups to help you get the servers.

If I had to blindly guess what such a feature might be,
it would be easy to deploy servers, and of course access to premium AI.

In contrast with developing the Open Source core,
that is pretty boring.

---

AI is a good thing, for writing tiny well described functions,
and those are the boxes in my program.

User defines inputs such as URL and Retry,
and I generate a well defined prompt template.

From here the user can request that the AI writes a funcion,
that will crawl the URL downloading all files.

And when that is executed,
the files will stream through the program piple to the next thing.

And again, user may ask AI or use some of the predefined functions,
like filters, transformers, or aggregators that merge the data into one.

---

This is a huge program that requred years of learning and rewrites,
but it is also very minimalist.

In a world where everyone is memorizing keyboard shortcuts,
I want to bring back visual programming and the ability to program with the mouse.

The program runs on the server under node, and in the web browser,
but it is a Desktop Application under electronjs/nwjs where it is most powerful.

---

While I am still a year away from pondering a website,
in great part because I want this program to create it.

You have no excuse, not to learn programming,
and create your own fantastic inventions

Focus your efforts one one simple idea,
and talk to AI about ECMAScript and JavaScript, and Browser/Internet Programing.

When learning JavaScript you get the power of the browser,
and CSS UI frameworks that will take care of all your UI needs.

Choose the language that is the busiest,
that is most flexible and can run on server, desktop, and in web browser.

Don’t rely on frameworks,
write your code the hard way, so that your mind grows to grasp it all.

[1]: https://github.com/catpea/mawp/blob/f85a20b553bebe79d684998954ad33801eaa8075/components/scene/Scene.js#L303
