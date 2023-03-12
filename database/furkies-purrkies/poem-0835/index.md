---
id: poem-0835
guid: b01188e2-6381-4a6e-9d85-80008c77d63a
title: Oh Noes Unit Circle; Or,  How I Got Attacked By The Fence Post Problem
description: null
tags:
  - furkies-purrkies
date: '2022-06-14T00:13:45.746Z'
lastmod: null
weight: 83500
audio: poetry-0835.mp3
image: poetry-0835-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  portfolioJpg: true
draft: false
chapter: 4
---

Oh, boy, I don’t feel less of a programmer,\
I was just exploring the Unit Circle.

I never had the opportunity to write screensavers,\
I always write mighty code, and mighty code generators, Rawr!

But, I woke up early morning,\
as I have been trying to switch to enjoy Summer some more.

My days seem extremely long now,\
and I enjoy that, quite a bit.

---

And the first thing that jumped on me as soon as opened my eyes,\
was the ring with my Ancient Peru Froggies.

I have distributed the scaled down froggies,\
evenly around a circle.

But that made it so that there was almost no space between the big ones,\
And a lot of space between the little ones,

---

I’ve made some errors in my audio recordings recently,\
I said radius rather than diameter, I thought rigs were measured by their radius.

But it makes sense that a 17mm radius ring,\
would be something a lady would wear on an oddly large toe.

And then I said Boolean Math Node, instead of Compare Node,\
and I made another error at 2:50 but I forget which video.

And on top of that, ffmpeg my audio to video converter,\
stated working too slow, after I upgraded to Fedora 36.

And I had to switch to a different audio visualization algorithms,\
it looks nice though, at least until I get ffmpeg going again.

And even worse, noveau started crashing Krita when I was using my Tablet,\
and Blender wouldn't dare to apply a texture to any of my objects, everything crashed.

I had to switch from noveau to real NVIDIA drivers,\
closed source yuck, but I will be leaving Ferdora for Debian now.

And not atom, my code editor started crashing,\
because of the little blank pane it opens, I should probably update it.

---

All my writing is in the first draft phase,\
as I am still learning and exploring.

I must pay better attention to potential mistakes,\
but I am becoming a much better writer already.

Long road from squirty squirrels that ate my trailmix,\
though I am certain I will never beat by [Midnight Owl](https://www.youtube.com/watch?v=oetrmS0oeso) poem.

But to be fair, I wanted to give extra thought,\
to the froggies, because it is an important ring.

I will be working on a series of enchanted rings,\
and the froggies are probably the first creation.

---

So I though to my self unit circle,\
and in my style of teaching and discovery.

I begun explaining the problem,\
as if taking to a [rubber duuuuck](https://en.wikipedia.org/wiki/Rubber_duck_debugging).

Above all, a circle is not a perfect thing to be decorating rings with,\
because you really don’t want anything on the bottom.

So, when applying decorations to rings,\
the arc, is the magical thing.

But to keep things easy, I set my arc to be half a circle, 180 degrees,\
I really feel strongly about this, the arc is very useful.

And rather than doing all the math by myself,\
I used the new nodes, especially the Accumulate Node.

It accumulates numbers that are sent through a geometry stream,\
so if you send a box that is 1 pixels wide, followed by a box that is two pixels wide.

The accumulate node will first say, hey you got a one in there,\
followed by oh, no you got three in there.

In standard programming this is called a reducer,\
spreadsheet programs are a good example, as they reduce lists of things to a singe value.

I continued setting things up in round numbers,\
I had 10 points on my 180 degree arc, with 10 millimeters radius.

---

It took a couple of hours to get to the meat of the matter,\
and here I had to come up with what I called a custom coordinate system.

As all I cared about for moving the parts,\
was radians, that I then shifted with simple multiplication.

Remembering that tau is the circumference of a circle,\
no this is not a mistake this time, I highly recommend clebrating [Tau Day](https://tauday.com/)

I cut it in half, to get just PI,\
and then FREAKING divided it, by the number of parts of the arc.

Gosh diddly darn it, it is because I recently made fun of fence post problems\
in my [Bling: Thinking In Geometry Nodes](https://www.youtube.com/watch?v=FHHuzxiQYm8\&t=583s) poem, serves me right.

I had a lot to test, because forst I needed to reset positions of all my objects,\
already distributed on the arc curve.

And then I had to yank them back,\
repositioning them based on their size.

---

I saw that my math worked, except not with the necessary precision,\
everything was off by 10%, and when I enraged things, everything went crazy.

My math worked, it was the floating point operations that were wrong,\
so I assumed Geometry Nodes being under development...

Somewhere doubles are getting damaged,\
and I double checked that I am not casing doubles to integers.

I walked away from the computer,\
my algorithm worked, but the floating point precision was not there.

---

I made dinner by wrapping some flavored fish in a bit of pita bread,\
and started writing a poem about magical rings.

I was half way through, when it finally hit me,\
the adjustment I was making was 10 percent, or .1 milimeter, and I had 10 things.

When you have 10 things, and you are off by almost precisely 10%,\
you done goofed :)

You just got nailed with a fence post problem,\
I didn’t have to look at the code.

I just dropped a math node on the custom coordinate system,\
set it to subtract ONE :) and everything, went swhoosh and became perfect.

---

It turned out,\
I was the precision problem.
