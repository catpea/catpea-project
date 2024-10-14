---
id: poem-1687
guid: 89f2ae8b-3931-42c8-8e7e-4046a0bb3375
title: Are Your Programmers Even Programming?
description: null
tags:
  - furkies-purrkies
date: '2024-10-14T03:46:03.470Z'
lastmod: null
weight: 168700
audio: poem-1687.mp3
image: poem-1687-illustration.jpg
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

I grew up in the world of simple programming,
where every line of code is executed one by one.

But,
in the age of internet… eeeeh...

We wouldn't want to wait for an image to finish downloading,
before we could scroll the web page.

Therefore,
multiple flows of a single program were invented.

---

Whenever it makes sense you can begin an operation,
and let code continue executing without waiting for it to finish.

Your program will run, at the same time,
in multiple places, growing like the branches of a tree.

In JavaScript syntactic sugar was introduced with Promises,
you could say promise.all and wait for all asynchronous operations to finish.

And shortly thereafter you could await a promise to complete,
with the await keyword, pretending that you are in a simple world.

Which made code much easier to read,
as now, a simple branching program could be launched on one line…

And right below it, as if it was the next line of code,
sat the callback, no brackets, no indentation, no fluent notation.

You could branch your program,
but it would look like a normal.

---

When you start branching anything,
everything becomes chaos.

Programming already hard,
now with multiple part of the program running whenever, it gets worse.

It beautiful,
but very-very scary.

---

Back in the days known as callback hell,
the pre-promise, pre-async world.

Great Ronin Samurai were experimenting with patterns,
that go around callbacks.

They found something, something so powerful,
that it sits in the browser, hidden, silent – and above all unchanged.

I recognize it as the Actor Model,
it is just data networks, but they were anthropomorphized to help us navigate.

But, even so, the Actor model is sill just streams of data,
in fast, it is common that, you don’t have different types of actors.

Your entire network is just Actors sending data to each other,
to do something with that data, you assign a function to the actor.

You give it a script to read,
the method call is named BECOME.

So if you need an actor in your network,
that saves data to file.

First you map out your network,
maybe give your actors names:

like “Read File From Internet”, “Spellcheck”, “Zip”,
“Save File”.

And then you say, hey Zip,
become this function, and that is when you give it programming.

Up until that point,
the data would just flow through the network unchanged.

---

This is awesome,
but, this is not tough enough.

---

Again, there are so many moving parts to the internet,
that you can't just hope to read a file from the internet.

In fact, you can’t even hope to just initialize your actors,
because those function they become come from the intent or disk.

And that means, there is branching involved,
waiting for a piece of code to finish downloading.

And then waiting for it to initialize,
so you can’t count on your program just starting.

You have to put all your actors on a stage,
and have them all report to the director.

Once they are READY, once they got all their code,
and configuration, and function.

Actors emit a READY event,
when they are done downloading.

Collapsing all their branches,
into a “Yeah, I am good, ready for my line, now..”

---

In a visual programming language,
you can’t just connect two actors with a line.

Because they may not have loaded their user interface yet,
and you would have nothing to connect that line to.

But if you make the line or cable wait,
for a visual component to be READY, you can then be sure the graphics are there.

---

So while, Promises and awaiting things keep the code clean,
you need events like READY in larger programs, or on higher layers than a function.

Actors can map out programs,
before they accept their roles, become function.

And they wisely emit events,
to let each other know then it is safe to keep going forward.

---

But there are two more things,
that really make this even more powerful.

---

And this is where we must abandon the concept of simple actors,
and thin in higher Abstractions: Supervisor and A Worker.

First of all, a supervisor is an actor that receives messages,
but it does not do anything to them, it instead puts them on a queue.

A queue is just an old office inbox,
so it is just like in a crappy job.

A Supervisor will intercept a work order,
and put it in its workers queue or inbox.

Which brings us to the neatest bit,
the supervisor has a worker that is that old actor that becomes a function.

But now we give that worker a proper name,
instead of assigning him a function later.

We now have a “Read File From Internet”,
under the supervision of a powerful job manager.

And we can have as many workers as CPUs or CPU Cores,
so that your computer is fully utilized.

The supervisor does not just put jobs on the queue,
but wisely dispatches workers and monitors their progress.

---

And this is that big tough feature,
if some download fails, or your computer crashes.

The supervisor, will still just resume where things broke,
it will have jobs maked incomplete in its queue.

So, it will send them to its worker for doewnload,
and darn right it willkeep track of time.

It may cancel a stalled download,
and send a worker out to try again.

---

It is strange to see branching programming leading up to actors,
and then supervisors with queues and workers.

But, dang it, when you run such a program,
not only can you visualize it, but the program will heal it self.

The supervisors, will simply but reliably,
recover from hard errors.

---

And I leave the best part for last,
you know that worker the supervisor is dispatching to do some processing.

That can be a interface to a real human being,
the supervisor will now wait for a human to do something.

And when the human takes care of it and relies to the email or web interface,
the supervisor will mark that job in the que as done and send the result along.

To the next supervisor, be it save the data,
or transform it in some other way again.
