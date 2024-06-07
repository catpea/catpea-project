---
id: poem-1558
guid: 47448ebe-0ece-4981-b932-3ce0e0712e97
title: A Computer Program Is Just A Neat Little Machine
description: null
tags:
  - furkies-purrkies
date: '2024-06-07T05:02:03.350Z'
lastmod: null
weight: 155800
audio: poem-1558.mp3
image: poem-1558-illustration.jpg
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

And there is nothing mysterious about it,
because you are responsible for the machine architecture.

And the most flexible device you can use,
to create a machine like behavior.

Is a tree of Things, that contain other Things,
in the world of programming we refer to Things as Objects.

So, nested Objects, the object at the very top,
that accepts the first set of sub objects.

Can be imagined as Desktop, or a Window,
or the frame of a Word-processor Page.

And then you just add more stuff,
inside other stuff.

And you have a machine,
a weird processing plant, or assembly line.

To make it move,
you create commands.

Such as on data,
send on data to all the sub elements.

This would create a waterfall,
over your nested tree.

Then you filter,
and transform things.

Or listen for various happenings
on nodes with a specific purpose.

We call those events,
and a button within a form will emit an on:click event.

---

And sure you can cross all this up,
and add nodes upside down and sideways.

But then you won’t be able to imagine,
what the machine looks like.

And we call that spaghetti code,
basically an unreadable mess, that may even work.

But because it lacks architecture,
a sturdy vision, or theory, it is trouble.

It is hard to service spaghetti code,
so no one really does it.

---

When you are ready to write your big program,
you first imagine a machine of how everything flows.

Maybe you won’t like trees,
because they are so recursive.

Then you may like pipes,
or circular assembly lines.

Where you put a command on the line,
the command will change something.

Maybe the username of a logged in user,
and then that change triggers a User Interface update.

---

Usually it is nice,
to start with creating a hierarchy of objects.

And then just responding to the things they do,
your Home Directory is just a tree, and then commands cause updates.

But the old way of programming used to be about defining Functions,
and then calling them, it is still commony used for low level stuff and commands.

Take a look at [FormMail][1] a Perl program (you should learn JavaScript),
you can see how functions are being called right beneath the header.

And then below those initial calls, they are all spelled out or defined line by line,,
often including reusable helper functions.

That is also a little machine, a call is made, things get done,
and program execution returns to the next line ready for more calls.

---

In object programming, you create concepts like account,
and then you attach functions to that.

So it is not just a function call,
a call for action made in context of something else,

[A nice example can be found in dream code][2],
where you say account.signUp, and then pass in an object with username and password.

Here, account groups, account functions,
[other groups maybe data, email, sharing, files, payments, and make coffee or tea][3]

---

I think the neatest example of machines is the web server,
when you want to pull up a web page.

A function inside the program,
will receive two Objects.

Your Request with url information, IP address, and such,
and Blank Response that you must customize.

---

The most magical machine may just be the Event Emitter,
the event emitter listens via . on function that specifies the event name.

So you can say,
saveButton.on(‘click’, applicaion.emit(‘save’)),

And somewhere in your application
you will have a save listener that uponb getting the even saves the file to disk.

---

Finally, you are probably wondering,
now how the heck do I save a file to disk?

But, you don’t, your programming language,
comes with built-in functions.

And those are built on top of the operating system features,
which then is build atop of drivers, and microprocessors in computer hardware.

So to save a file, you look at the programming language manual,
and see what you need to call, often writeFile(‘file/path‘, andData);

---

Programming languages are made by people, and for people,
by experienced programmers, for programmers who are always in a hurry.

So the world of programming,
is a masterpiece or art, as great as all galleries put together.

[1]: https://www.scriptarchive.com/download.cgi?s=formmail&c=txt&f=FormMail%2Epl
[2]: https://gist.github.com/gr2m/5463426
[3]: https://nobackend.org/dreamcode.html
