---
id: poem-1387
guid: 306ec423-054b-43b0-8f9b-668a49c176c0
title: A Tiny Look At The Wild Wild West Of Visual Programming
description: null
tags:
  - furkies-purrkies
date: '2023-12-19T04:56:20.064Z'
lastmod: null
weight: 138700
audio: poem-1387.mp3
image: poem-1387-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 8
---

In the world of visual programming,
we have control panels with sockets.

And we can connect those sockets,
with cables, which is unusually powerful.

There is always a high level control panel
for what you are working on.

That speaks with specific concepts,
related to what you are trying to do.

But the stuff that you plug into the sockets,
is ever more generic and thus more reusable.

So if your high level panel is a song,
then the panel with have a song title socket.

This is all high level,
and very specific.

But to specify a title,
you drop in a generic text panel.

And cable that, or plug it,
into the song title socket.

The farther you move away from the main goal,
the more you are programming with reusable components.

In case of a book that you want AI to generate,
You may have a book high level component.

And also a chapter high level components,
they plug in together…

And both accept a bunch of text panels,
for chapter titles, and AI prompts.

Text panels also accept text function,
like join array of text, of use text template on named values.

---

And before you ask,
you make the high level panels.

Though there is what can be called,
a standard library, of primitives.

For text processing,
the language the program is written in will provide a lot.

But to be nice, an additional library can be used,
in JavaScript world, for example, that would be [lodash][1].

So a hundred useful little plugable panels,
AI can help with text and descriptions.

For image and video processing,
[ImageMagic][2] and [ffmpeg][3] would be used.

It would be a standard library,
that generates shell scripts that the operating system runs.

And for audio, just to give a third example,
[Tone.js][4] and Web Audio would work just fine.

---

These are all very complicated programs,
but under a visual programming model.

Everything becomes standardized,
into a nice little control panel with sockets.

The act of connecting a socket,
is under the control of the programming language.

It will only allow connecting what works,
what makes sense.

---

So here armed with such a standard library,
you can create your high level panels.

That then become available in the toolbox,
as components that you can use in your programs.

Or from another perspective,
you can double click a high level panel, to see what makes it tick.

---

But there is no standard way of doing anything,
every visual programming language is different.

Even the way these programs are executed is unique,
some programs need a start button…

Others execute automatically,
each time something changes, or a new connection is made.

To visualize how these programs create stuff,
just imagine the contents of the book we had the AI make…

Getting printed below the visual programming interface,
it is just formatted text.

To work with videos and images,
something quite similar occurs.

The visual programming language creates a shell script,
perhaps even with a nice installer.

That is then setup and made available as a command,
that can be rerun.

These two,
are examples of text and code generation.

In case of tone JS, that can run in the browser,
you can imagine a play button appearing.

Code or at-least data file based component connecting instructions,
are still generated, but now you click play.

With the aid of simple reactive programming it is possible,
to adjust values live, while the song is being played.

---

Today programmers still use directory trees,
and clunky 3rd party diagrams to map out their applications.

But now, I think that will change,
as visual programming can be made lot more readable.

It is after all documentation and diagram first,
programming.

Visual programs,
are self documenting.


[1]: https://en.wikipedia.org/wiki/Lodash
[2]: https://en.wikipedia.org/wiki/ImageMagick
[3]: https://en.wikipedia.org/wiki/Ffmpeg
[4]: https://tonejs.github.io/
