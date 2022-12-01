---
id: poem-1005
guid: 3c110103-9606-43fe-ba72-75a5045f8a0a
title: Prototyping And Coding Your First Web Operating System and Web Desktop
description: null
tags:
  - furkies-purrkies
date: '2022-12-01T04:06:47.823Z'
lastmod: null
weight: 100500
audio: poem-1005.mp3
image: poem-1005-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/64YrPKiguAE
resources: null
features:
  video: true
raw: true
draft: false
---

Allow me to start by saying,
you need three very small programs.

Drag window, resize window,
and focus window, which brings it to the front.

There is a fourth one,
that I personally recommend.

And that is Desktop panning,
where you can grab the desktop and move all the windows.

As a bonus, a very tiny program I call,
overwatch.

It zooms out of the desktop,
to let you see the applications menu.

---

If you are just starting with programming,
I recommend patience.

And rather than diving
into the world of dragging.

Stick to the basic primitives,
dragging, resizing  and focusing windows is already supported.

You just need to capture the coordinates,
on the mouse up event.

Or set the zIndex,
where it comes to the window focus.

The built in functions won’t look too pretty,
they’ll try to bite you.

But it is good to see,
everything working.

---

I recommend using [svelte][3] for programming,
that makes things really easy.

To style the window,
just use [Bootstrap and Bootstrap Cards][2], don’t forget the shadow.

And if you don’t like the bootstrap theme,
use the open source [bootswatch][0] they have a bunch.

And as to the HTML structure, Put everything inside a __singe__ HTML element with position relative.

And set the windows, the desktop image,
maybe a login box, all to position absolute.

Svelte allows you to use if or for each,
without forcing you to create a new element.

---

I recommend using [PouchDB][1],
under the principle everything is a document.

Everything except the username,
which sits in a session variable lost upon a refresh.

Otherwise PouchDB,
will retain data between page reloads.

---

But as you move on beyond your first version,
try to replace PouchDB with something inspired by it.

This will teach you how to create,
clever databases.

---

Finally, it is very unusual how simple creating a web desktop is,
you can create a very nice UI while studying CSS and HTML.

The primary purpose of a web os,
is to serve as an entry in your design portfolio.

But you can upgrade that,
by introducing an [Automator][5] like builder of window apps.

And by taking it even further, and going your windows ports,
that allow you to connect windows together…

And create a visual programming language,
similar to [Blender’s Geometry Nodes][4].

[0]: https://bootswatch.com/
[1]: https://pouchdb.com/
[2]: https://getbootstrap.com/docs/5.2/components/card/
[3]: https://svelte.dev/
[4]: https://www.youtube.com/watch?v=kMDB7c0ZiKA
[5]: https://www.youtube.com/watch?v=oFvWBFl2wxY
