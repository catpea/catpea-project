---
id: poem-0850
guid: d9777465-8218-4df3-b13e-da92c3b0b49b
title: Programming By Describing Actions In Plain Text
description: null
tags:
  - furkies-purrkies
date: '2022-06-29T01:05:07.134Z'
lastmod: null
weight: 85000
audio: poetry-0850.mp3
image: poetry-0850-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/8A6nVEEYulQ
  - https://unsplash.com/photos/O2MdroNurVw
resources: null
features: {}
draft: false
chapter: 4
---

I think all people can write computer programs,\
it is just that programming languages are too simple and raw.

This approach uses Flow Based programming,\
prefixed by an Event Listener.

A really good example of flow based programming and processing is your mouse...\
when you move it across a web page with a Mouse Event Listener.

Here, you are sending a lot of XY coordinates, to the Mouse Move Event Listener,\
you can process them by filtering and transforming the data in the stream.

You could filter out all data, until the mouse is pressed,\
and then let the user draw, by placing a trail of colorful pixels as those X,Y coordinates.

---

Allow me to describe it,\
couple more times.

First you have a program that drops all X,Y coordinate objects,\
unless the mouse also reports being pressed.

And then you have a second program on the stream,\
and it just picks a random color for a pixel.

You don’t have to check if a mouse is pressed,\
because none of the packets when a mouse isn’t pressed reach here.

---

We have two programs sitting on top of this stream,\
a packet dropper or filter, and pixel painter or random color pen.

And the stream it self starts with an Even Listener,\
that gets the X,Y coordinates from the mouse.

---

The big deal about this is that this can be visually represented,\
with a circle for even listener, line for the stream of X,Y coordinates...

And a couple of squares,\
representing the filter and the pen.

More than that, even before the graphical representation,\
this can be easily spelled out in text.

And in fact this program should be first structured,\
in a plain text document.

The document can be fed into Cytoscape.js based,\
visual program representational graph.

The text it self, is just title for name of the program,\
declaration of needed variables such as useRand omColorPen = true...

And paragraphs of text separated by space,\
here if there is a branching statement.

The paragraph may describe to what listener the stream should flow,\
or just specify the name.

---

Finally, it is very important, that free text is used to describe what happens on the line,\
what the filter is doing, or what the pen should do.

Because this allows describing program functionality that does not yet exist,\
exactly like in Behavior Driven development.

In the end each paragraph of text,\
is sent through a code generator.

Where program chunks that already exist,\
the user will connect them to the paragraph.

Where functionality calls for programmers,\
the code generator will generate Unit Tests and post a bounty.

---

The stream based approach as I have described here,\
is not just for efficiency but for readability by examining large visual program maps.

The shocking part, of describing code with paragraphs of text,\
is not about [Literate Programming](https://en.wikipedia.org/wiki/Literate_programming) but rather mobile phones.

This environment allows for serious programming,\
by just typing text into boxes.

Here the developer begins to create a valuable description of a program, already on day one,\
and simple search will list all the existing modules related to the paragraph the developer is describing.

All you need to start writing programs is a slightly enriched text box, and just as soon as you start typing;\
a map of the streams and branches will snap into existence.
