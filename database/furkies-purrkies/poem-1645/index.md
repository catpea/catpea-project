---
id: poem-1645
guid: c6fc42ca-9a33-4dca-9f4f-feff4f4a1340
title: Programmers! Don't Just Use Plain Variables, Oh No!
description: null
tags:
  - furkies-purrkies
date: '2024-09-02T01:24:09.966Z'
lastmod: null
weight: 164500
audio: poem-1645.mp3
image: poem-1645-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 11
---

When calculating the sum of two numbers,
we say x = 1, y = 1, and get 2 by executing x+y.

That is good for crunching numbers,
but in the old school way, where we rerun x+y if either variables change.

In web pages where we deal with information that can come from a database,
a live remote web socket, or user input, we can’t use old school, no, no!

Instead of saying profileName = ‘alice@example.com’,
we must say profileName = new Signal(‘alice@example.com’);

And if we want to update the profileName we talk to the signal,
which has simple .get, .set and .subscribe functions.

And we say  profileName.set(‘bob@example.com’),
because this is not an old school assignment, but interaction with a Signal object.

Now stuff can happen behind the closed curtains,
for one, while we can just get a value once, that is still old school.

Signals allow us to subscribe to variables like profileName,
which you should imagine being displayed atop a web page now.

So we can say,  profileName.subscibe() and put in function that is executed,
each time the profileName is set.

This function could select the label in a profile drop-down,
and update the text to reflect the newly logged in user.

---

This is nice, but one signal is not a big deal,
yet.

---

What we need to do,
to create real applications, is to use a signal tree.

It is just a normal Object, that accepts any proper, and has a children list,
which is an array, that can accept other objects of its own kind.

This can be generalized, where any property can be used to hold objects,
but for simplicity and explanation we just use the children array.

So it is a recursive object tree,
and it does not really require any special notation.

The curly brackets in JavaScript work perfectly fine,
but you do have to transform the nested objects or signalize them.

This converts every property, including children,
into signals, with .set, .get, and .subscribe.

The code is perfectly readable,
the tree does not need to be complex, just whatever works for the app.

And then we use a web component,
which is a way to extend the HTML of a web page.

I made one called loop, that loops over the children property,
and another one called bind, that can connect any property to any bit of HTML.

So we can say bind profileName to .drop-down-button,
the .drop-down-button finds the nearest button tagged with that class name.

And of course, the bind tag does not use the old school get function, oh no,
it uses the .subscribe method, so profileName always automatically updates.

---

In summary, if you are adding numbers,
or must use standard and fast assignments in your program, you are good.

But if you are marking a web page,
you need a Signal Tree.

All information coming from the server, or from whatever the user is up to,
always goes into the tree, that is the single source of truth.

And whenever a value changes in the tree,
all the components, and tags automatically update.

So when you are working on a web page,
you can’t use normal variables.

You need a tree of signals,
where the server can send data into, and the User Interface can auto-magically update from.
