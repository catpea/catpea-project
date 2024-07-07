---
id: poem-1588
guid: 1471b3d8-8d7e-42aa-acfc-65cc4f08c8de
title: What Is It Like Inside A Computer Program?
description: null
tags:
  - furkies-purrkies
date: '2024-07-07T03:48:29.311Z'
lastmod: null
weight: 158800
audio: poem-1588.mp3
image: poem-1588-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 10
---

Not all programs have a hollow inside,
some powerful programs are more like a wall.

You get input, transform it,
and output it, so that another program can receive it as input.

An example of such a program would be a video sharpener,
here the video is broken down to separate image files.

Where each file is a movie frame,
then each image file is processed with a sharpening algorithms.

That removes blur,
and makes edges more pronounced.

And then each of those images is sent as output,
it could be another program.

Or just a file,
where each frame is appended to the previous.

Again,
creating a big video file.

The reason why you convert everything into frames,
is conserving computer memory.

You never load the entire move at the same time,
just as many frames as you have CPU cores.

To perform all the transformations,
as soon as possible.

---

Now, as to more creative programs,
not necessarily more powerful, but more capacious.

You kind of sit down, and decide,
that your program is going to have room.

Though it may look ordinary to other programmers,
your vision will reveal a structure.

---

The reason why you would want rooms,
or hollow space in your application, is compartmentalization.

You want to put all the big things,
that rooms always require in the same place, that they all inherit from.

And unusual things, such as the window title-bar,
atop a desktop window.

So that you will never encounter any code,
outside of the place where it is relevant.

Only windows have window title-bars,
so you only encounter it when you are inside your window code.

This is a big deal, because programs get big,
and all the little sorting that you do along the way, really helps.

---

First, lets talk about room,
what does it mean.

Image an object called Room,
that contains a list called rooms.

And now understand that you can add Room objects,
to the list called rooms, all the way down.

It is a recursive nested data structure,
you can even generalize it into...

A Location object,
that contains a list named locations.

You can create a map of the universe,
a text game, or multi user dungeon here.

Location names universe,
contains locations named Milky Way and Andromeda.

Both contain some inhabited planets,
and a super massive black hole.

---

Finally, a more down to earth example,
I am working on a Pannable and Zommable Desktop that has Windows.

And I naturally think of them as having an inside,
as in inside the desktop you have windows.

And inside the window you have a title bar,
you attach a Selectable feature to the title bar.

And inside the Selectable feature,
you have the following.

On Click, if selected,
deselectAll, so it is a toggle mechanic.

Else, If not selected,
select.

And then there is a second part,
OnClick while Control key is pressed,

If selected, deselectOne,
else if not selected, addOneToExistingSelection()

When you hold Control key
you can select multiple windows.

And if you don't everything gets deselected,
and whatever window you are clicking on has selection toggled.

---

So selectable has an inside,
but it is not as pronounced as Window or Desktop.

And once we start talking about Clicking and Control key,
there is no sense of location, it is more like events and simple logic.

---

But look how beautifully organized the logic is,
it is inside a Selectable feature, or trait.

Which is attached to a title-bar,
which lives inside a window, which it self is inside a desktop.

---

You would be wrong to think,
that your programming language should tell you how to structure your programs.

If your language tells you how to write programs,
find a better language.

It is you, who when facing a feeling of impending complexity,
decides to create a hierarchy of rooms.

Where you can compartmentalize everything,
so that complex ideas from once concepts don't leak out and trespass onto another.

---

So what is inside a computer program,
some kind of a nested, recursive, self similar, minimalist structure.

Capable of compartmentalization,
while providing a clear and uniform road to navigate the complexity of a program.
