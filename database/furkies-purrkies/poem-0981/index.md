---
id: poem-0981
guid: ab3365b3-b15a-45d8-b312-e56248cdaa17
title: Potatoes; Or, The Biggest Problem In Application Programming
description: null
tags:
  - furkies-purrkies
date: '2022-11-06T23:19:53.340Z'
lastmod: null
weight: 98100
audio: poem-0981.mp3
image: poem-0981-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/Kl4NIz8FeVc
resources: null
features:
  video: true
draft: false
raw: true
chapter: 5
---

The biggest problem is synchronizing information on your computer network,
with the information displayed on your customers screens.

By synchronizing, I mean constant updates,
if you as administrator change something, it needs to change on all the affected application screens.

Nerds may argue with me that the biggest problem in General Purpose Strong AI,
but we are talking about real problems that business owners fighting poverty face every day.

Other may check me here, and mention security, but security problems exist out of greed,
if you let your user to own their own database, there will be nothing to hack on the application level.

The changes, to the network data, come from an application, that can uniformly access all the databases,
the application lives on the network end and cannot be run from the web.

Enough of that, let me tell you how to get things going,
we need to introduce some somewhat new concepts.

Instead of coming up with fancy names,
let us come up with cute ones.

The unit of information on out network will be a potato, our potatoes are inspired by the CouchDB Document,
the Java programming language has a similar concept, but they call them Beans, as in Java Beans.

We just have plain potatoes, because we want to keep things simple,
and underline the fact that we don't program computers, but rather take what we can get.

---

In programming language, we have numbers and strings of letters, strings for short,
we can group numbers and strings into objects, and we can put objects inside objects.

But our potato is special, because we treat potatoes as high level objects,
there is nothing above them, and potatoes cannot hold other potatoes.

---

A potato is a highest level object,
it can only have generic objects nested inside it.

That means, when you create a use on your system, you make a potato,
and give it a username property.

When you create a new post, for a user blog,
it is a potato, with user and text properties.

---

A potato has a universally unique ID,
and a revision number, exactly like the CouchDB documents.

The ID never changes, nothing is ever deleted,
the revision number, also has a unique ID.

And that is the filename that is used on the hard drive,
the document ID is used for the directory that contains revisions.

If you have one million users saving all at the same time,
to revision 15, you will just end up with one million files inside the directory marked by the document ID.

No data is lost, all conflicting revisions get saved,
and a program will let you know about conflict resolution strategies.

---

There is one important point that yo have to remember,
when picking the winning revision, you sort the random filenames, and pick the one that comes first.

It is a stupid way of picking the winner,
but no matter how many conflicting revisions you have, and how many of those are still being uploaded to your server.

You will always have a winner, and eventually,
as all files make it to your network, you will pick the same winner.

Nerds call it,
eventual consistency.

I want to repeat that the Potato is inspired by CouchDB,
and you should use PouchDB and CouchDB at first...

But as your software becomes more advanced,
you go potato.

---

Eventual consistency be it on your network,
or inside an array in the users browser...

Means that users have their account data,
synchronized with their browsers - it just works.

---

But it also means that the network will continue bubbling up,
new revisions of all kinds of potatoes or CouchDB Documents.

Your user interface components, must be notified of new potato revisions,
or more precisely revision winners winners - the ones that come up on top in sort.

Here you have to keep things simple,
use svelte, and svelte stores, create a readable array and call it a collection of Potatoes.

Sometimes, you might just want to have a collection,
that is always just one potato, for example user profile.

If at some point in the future,
you start offering complex services, you can throw another potato in that collection.

Perhaps one for custom domain name, one for web hosting,
you are going to have three potatoes, a little menu on the side.

And whichever one the user click on,
you render it, with user interface components, I recommend using The Bootstrap CSS framework for now.

---

You have to consider unusual use cases,
If your user is browsing a list of products.

They are on page, ten, of ten pages,
and you decide to remove most products to sell something more integrated.

There will no longer be a page ten,
you may only have three pages now.

So you have to pull them back and say,
by saying current page equals the new last page.

Keeping things consistent in lists,
even if you just have one thing will pay off.

---

Because potatoes have an ID that is independent of whatever you are storing in them,
to save something, you just send it to the sever.

And the server will send it everywhere else,
including back to you, as a new change during live synchronization.

---

There is nothing to hack here, the most confusing thing is the list of potatoes,
the collection that you application use to create the UI...

But you know that the potatoes are there,
you are always comparing ids and whenever a new potato is found you send the latest revisions out to everything.

And it all sorts it self out,
a new ID means new potato, a new revision you have to re-select a winner.

Svelte will automatically update the user interface,
and all your buttons worry about is sending documents into your network.

---

PouchDB, or CouchDB also reveals a good pattern for fast searches,
roughly each time a new document or change is announced...

Little programs called views, check, if the new changes,
match the information they are filtering for.

This is how your potato collection is assembled,
you remember the potato id that matches, and forget the one that does not.

---

It is possible to eliminate svelte, and just use a DOM reconciler,
that will merge your document object nodes.

And while I recommend using Pouch, Couch, and compatible services,
eventually it is just easier to write a custom potato storage system.

Document IDs and random revision filenames,
allow for multi-core/CPU data storage, nothing is ever overwritten with universally unique identifiers.

Not on networked computer,
not in simultaneous processing.
