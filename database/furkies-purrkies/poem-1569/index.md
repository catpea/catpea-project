---
id: poem-1569
guid: 4357d9ff-9762-4175-806d-2c7454ca611c
title: Helping New Programmers Code Big; Or, The Aim Of Visual Programming
description: null
tags:
  - furkies-purrkies
date: '2024-06-18T04:29:30.750Z'
lastmod: null
weight: 156900
audio: poem-1569.mp3
image: poem-1569-illustration.jpg
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

Let's get to the bottom of Visual Programming,
first.

Visual programming is only problematic in two spots,
using lines and boxes for everything, and choosing the correct output.

A visual programming language,
must support windows that each have a different set of boxes and lines.

With some neat exceptions, the thing that remains the same,
is connecting boxes with lines.

And that is all the user needs,
they don’t need the same boxes everywhere.

The novice programmer will see each window as a mini game,
similar to what they have already learned, but with a different purpose.

Mapping out application architecture,
will require boxes that represent objects, and lines that represent inheritance.

But mapping out table relationships in a database,
will have boxes representing tables, and lines representing connections.

---

A table in a database, is the simplest possible unit of information,
profile table, would usually hold your systemId, username, email, and password.

A table looks exactly like a spreadsheet,
just that the columns are named not numbered.

And then you would have location table,
holding systemId, city, state, country.

And systemId is what is connected with a line,
now if you need location information and already have a systemId.

Then you request it from location table directly,
but if you only have a username, then you join the two tables on systemId.

For the specific username you are interested in,
so you get a tiny table for specific user with their location.

And on top of this, you can just ask for the city,
getting a table with one row, and one column.

---

As to inheritance, in object oriented programming,
inheritance just means that objects can inherit stuff from other objects.

It is a way of arranging code. Window will inherit from Container,
Container will inherit from Component.

These names have specific meaning for a programmer,
a Window, is fancy, dragable, has a caption and a menu.

A container can contain things, so it accepts other stuff,
containers often have a LayoutManager, that positions things for you.

And component, is just a generic base,
it is a word that does not say much about it self, unlike Window, or Container even.

Componet has x and y for positioning stuff,
Container has a way to contain other objects such as addChild.

And window, will now be able to say,
my x and y, is 100 and 100, and addChild(caption, menu, button, and footer)

This also means that a popup, can inherit from Component and Container,
and a desktop icon, can just inherit from component, to have basic x and y.

So it is just a way,
to logically arrange where related things are stored.

---

See, there is nothing difficult here,
especially when presented visually.

To a novice programmer,
this is just... different levels of mini games.

---

There are exceptions, drag and drop user interface building comes to mind,
but they are just as simple as dragging lines to boxes.

They do not make the program harder to use,
just more interesting.

---

And then these different visual abstractions,
connect together, to form a large application.

When the build button is clicked,
the system just generates source code, a ready to deploy application.

It is actually largely,
webs of functions that are stored in a modules or plug-ins directory.

The code generators aim to build,
readable and manually maintainable code.

For those who want to detach from the Visual Programming Language,
and just for ease of debugging and code analysis.

---

Precisely what is generated depends on the generators the user selects,
or in the case of the novice user, the choices or profiles set as default.

And while it is trivial, to create a code monolith,
it is cleaner, though slower, to create a network of HTTP based services.

It would make sense for larger applications,
as HTTP services can be easily distributed on a simple network.

And it is even easier to hand the server management to some company,
as the case it with server-less, where extra servers are launched on demand.

---

Having this choice alone, is precious enough,
to invest a research team into visual programming.

---

So the output from a visual programming language,
is whatever you need it to be.

That is even better,
than hand made applications.

The user interface, so as long as it supports multiple paradigms,
is not a mess at all.

It is a game,
a work of art that captures the essence of what is needed.

There is no boilerplate code,
it is just about the hear of the matter.

---

Finally, the aim, and result,
is young people sitting down to create complex applications.

They can first modify existing projects,
but then start from templates or scratch.

AI can help with some ideas and guidance,
or even custom functions.

And the rest, is patience,
and try, and learn, and try again.

While exposing the novice programmer to concepts and tools,
that would require years to get to any other way.

And shielding them, from common security mistakes,
both by providing good starter projects and having an AI assistant on hand.

---

Visual programming does save time,
it does solve a lot of problems.

Not for the seasoned programmer,
or BOFH who prefers to write his spiteful HTTP services in Bash, and complains about noobs.

But for the new programmer,
who chooses a broader, more interesting and luxurious programming environment.

This is especially important when standardized education teaches gibberish,
because, here a teenager can launch neat side projects long before college and university.

And in some cases,
instead of college and university.

Therefore, the greatest power behind Visual Programming,
is in inviting people new-to-programming to build, launch and learn.
