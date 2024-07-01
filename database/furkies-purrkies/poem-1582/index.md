---
id: poem-1582
guid: d20469b1-fbbc-4346-aae6-a29c29545a7c
title: A Day Of Debugging
description: null
tags:
  - furkies-purrkies
date: '2024-07-01T05:10:04.743Z'
lastmod: null
weight: 158200
audio: poem-1582.mp3
image: poem-1582-illustration.jpg
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

Once your computer program has something that closes and opens,
it makes sense to use Object Oriented Programming and give it a life cycle.

Command line programs usually don’t have a need for it,
they are too simple, they don’t have anything inside that persists.

User interface programs, can have the notion of a draggable widget,
where it makes sense to have an initialize, open, close, destroy cycle.

---

It is a massive shift away from following procedures,
or merely transforming data.

---

Everything in your GUI application will demand starting and stopping,
a simple button even.

In order to cleanly respond to button clicks,
you attach a mouse click listener, that listens for clicks.

But guess what you need to do when you close something in your program,
you have to stop listening for clicks.

If you reopen that something 50 times, you will have 50 click listeners,
they will clog up your memory, and may even slow your program.

So you have to stop listening to the button clicks,
an you add that to your widget.

So now when your user closes it,
it automatically cleans up after it self.

---

In such applications, you have to be loud and use clear roads,
loud pipes save lives, or days of debugging in this case.

A life cycle is a little state machine similar to traffic lights,
and a listener belongs to an event emitter that works like a radio.

All those mighty developers, are just making clear little machines,
knowing that things get complicated sometimes.

And it is better,
when you program a large assembly of clear to understand machinery.

---

It is not just about bugs, or clarity of code,
but refactoring also.

Every once in a while,
you come up with an idea that can improve one of your machines.

And if you keep everything nice and bold,
and without any twists and turns, you can make your program more fun.

---

Today, I came up with an idea to give myself object properties,
such as ZOOM, SCROLL, or STOP and START even…

Where it is not possible to make a typo,
I used a proxy that throws errors if the target object is missing a property.

And having noticed that I repeat somethings a lot more than others,
I added new life-cycle functions with really long names.

I am finishing up this part of the program,
and I want to remember it better.

Keeping things consistent,
allowed me to make my code more redable.

---

And I did end up with a bug, it is likely somewhere within the life-cycle,
it is hard sometimes to initialize things as they may use the UI.

And the UI is not yet available during that initialization phase,
it is hard to say what it is, exactly, but moving some initialization up to start.

Will likely reveal what is causing the issue, and it is not that,
then it is my OOP, as I created my own flavor – which is a bin no-no.

But sometimes necessary, my language is a tiny bit behind,
on efficient reactive programming, they have the bottom right.

But they may not want to touch Object Oriented Programming,
because it is about objects, not reactivity, and keeping things simple is good.

Cats like me, who build up large trees of nested components,
need their own take on OOP to keep the machines simple looking.

---

But I got to witness a window closing,
and cleaning up after it self.

Though my windows can connect with wires, and the pads the wires connect to,
have a bug where they don’t yet get automatically cleaned up.

That is where the bug is at,
it is very loud and clear territory where I can map out what is going on.

---

The only time you ever get stuck when programming,
is when you have a dead line - It is a terrible idea.

Good programming demands time, relaxation and imagination,
setting a stressful deadline that prevents imagination, is silly.

---

More than that, programmers aren’t just machine makers,
in fact, they are tool makers first.

On one end they create libraries that hasten development,
and on the other tools for analyzing or debugging their programs.

So the machinery of the program is padded by various pillows,
and surrounded by scopes, and microscopes and all kinds of tests gadgets.

---

If the world only knew what incredible fun awaits them,
after they learn how to program.
