---
id: poem-0986
guid: c86ae39b-1a3a-42ec-aa8c-ca1a84bf3dab
title: 'Introduction To Programming: Systems Architecture'
description: null
tags:
  - furkies-purrkies
date: '2022-11-12T04:29:07.319Z'
lastmod: null
weight: 98600
audio: poem-0986.mp3
image: poem-0986-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
---

Introduction To Programming: System Architecture

Most tutorials leave out deploying your applications,
so it is difficult to get a big picture.

And giving a solid explanation is difficult,
as it is sure to involve a lot of concepts.

But there is another way,
explaining architecture by subtle analogy to other programs.

---

What I present here is a simple to grasp architecture,
of a self expanding business empire for a busy teenager that has more important things to do.

---

You will need a safe way to handle information from many sources,
use [Couchbase][1].

Or a similar [CouchDB][2] provider,
so that you don’t have to host your own CouchDB.

Know, that every one of your users, upon a sign-up,
gets a tiny database that only they can view.

There are no security issues,
users just own their data.

---

When a user logs in, a web page with with a [PouchDB][3],
will synchronize with their CouchDB.

When they make changes to their data in their browser,
those changes are automatically sent to their little database on Couchbase.

This requires custom programming,
but this is good practice for learning how to hire programmers to code your ideas.

---

Now things are going to get a little bit crazy,
Couch and Pouch have a concept of Design Documents.

These were originally invented to make Apps,
an App would sit on top of a Design Document.

Hire a programmer, and tell them, to create a simple code editor,
that will help you create and edit Design Documents.

Tell them that you want it to look like Windows Explorer,
a File Manager.

Where you can browse properties inside objects,
as if they were files.

Here you just make a view folder in your Design Document,
and create a tiny JavaScript file with just like 3 lines of code.

[It won’t take yo long to figure out how to create Design Document views][4],
there are many examples everywhere.

Now lets get application specific,

Get a programmer to write a program,
that will load posts from your user’s favorite news site…

Into their tiny database,
in your Couchbase.

Have your Design Documents,
filter for collections of news articles.

The way you create multiple collections in PouchDB,
is just by adding a news-source field, and entering twatter or whatever in there.

This creates rows of news articles,
every row is a unique article.

And now every article has fields,
such as source, author, date, title, text.

---

This gets us to the next application layer,
this one is inspired by [FileMaker][5] or Access.

We create a row navigator,
basically just previous, next, and search.

And then below that,
you will need a program that will help your end users…

To drag and drop fields,
to create a User Interface that will display each row.

If you have a field that just has a link to an image,
you will need to connect it to an image UI element…

That will show the image,
rather than the URL.

---

So now you just gave your users the ability to create their own versions,
of their news sites.

I use news articles as an example,
there are many application you can create.

Drag And Drop Layout Editor, Color Theme Designer, Web Services Builder, Noise Machine, Song Beat Counter,
Popular Song Customizer, Bootstrap Shadow Generator, Bootstrap Container Generator, Button Customizer

As a bonus, create an [Automator][6] clone,
on top of the file maker clone.

Here your users will be able to create actions,
such as sending a news article from one site to another.

---

Finally, what you end up with,
is a custom drag and drop application builder.

Users sign up for $4 a month,
they get their own little database.

And access to a forum,
where programmers are willing to code custom components.

The fancy thing here is the components,
once created become available to all.

So that the power of your little empire,
keeps expanding.

[1]: https://www.youtube.com/results?search_query=What+Is+Couchbase
[2]: https://www.youtube.com/results?search_query=What+Is+CouchDB
[3]: https://www.youtube.com/results?search_query=What+Is+PouchDB
[4]: https://www.youtube.com/results?search_query=What+Is+CouchDB+Design+Document
[5]: https://www.youtube.com/results?search_query=What+Is+FileMaker
[6]: https://www.youtube.com/results?search_query=Apple+Automator
