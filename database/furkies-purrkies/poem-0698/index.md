---
id: poem-0698
guid: 487ea9ea-c75b-4771-9a92-3dd425857c88
title: 'Pipe Programming: A Look At Object Passing And Transformation'
description: null
tags:
  - furkies-purrkies
date: '2022-01-28T03:11:49.666Z'
lastmod: null
weight: 69800
audio: poetry-0698.mp3
image: poetry-0698-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features: {}
draft: false
chapter: 4
---

A pipe is a connection between two programs,\
and through that pipe, we send an object that is altered to serve some final purpose.

Imagine you checking email,\
you create a pipe between your computer and the email server.

And then you send a request object,\
with your password and user name.

The email server,\
will respond with an object that contains emails.

So we have programs connected by pipes,\
through which we send objects.

---

When you are writing a program,\
you are creating a pipework that connects programs.

And then when your user uses your program,\
as they interact with buttons, they send objects down the pipes you created.

---

While you can make a beautiful little program,\
that takes good care of user-names and passwords, including their validation.

You don't have to do it,\
there is a crude and perfectly functional way to do it with just the basic operations.

---

When a user clicks login,\
and initializes an object down the login to email pipe.

Rather than doing something special for user name and password,\
simply inject a new property to the object that the user initialized.

The first time you inject user-name,\
second time you inject password.

This is a generic injection program,\
where you specify the name of new properties.

And then you follow up with a pop-up box,\
that knows to ask for all the properties traveling down the pipe.

Nothing here is related to passwords,\
it is just properties and a standard form.

---

When working with pipes in a graphic environment,\
such as Node-RED.

You can group the generic operations together,\
and save them as a program called a sub flow.

The name of this sub-flow would be ask for password,\
It is perfectly reusable.

Any object sent through it,\
will receive an injection of username and password fields, or variables.

And a automated popup,\
will force the user to to fill in those two bits of information.

---

Pipes, Programs, Objects,\
those three crazy simple things is all it takes to make programs.

This simplicity also reinforces,\
efficiency.

---

In more advanced programs like video editors that use pipes,\
Blender is a good example.

Pipes enforce the idea that a video is never sent whole,\
but only one frame at a time.

The video can be 100 terabytes,\
but Blender will only take the memory needed for one frame, not the whole video.

---

This is what the word streaming means,\
you are streaming a frame at a time down a connection pipe.

Rather than the user downloading the whole video,\
this can be for efficiency reasons, or for the fact that the rest of the video does not yet exist.

---

The black window command line that you see hackers use on TV,\
is so powerful because it uses pipes.

It uses the actual pipe character to separate programs,\
and objects tend to be lines in a file.

For example, to guess a weak password,\
a hacker would have a common passwords dictionary file.

And it would be just one password per line,\
they would then pipe the passwords to a login program.

Each line in a file is treated as an object,\
the program reading the file would send objects one at a time to the program logging in.

With a successful login,\
the login program would break the pipe and exit with a happy message.

And none of the other passwords would continue being streamed,\
as the pipe is broken, and everything exits, including the program sending the passwords.

---

There are many ways that the concept of Program, Pipe, and Object are represented,\
there are as many variations of this idea as there are programs that make use of it.

---

Old school programmers, don't like pipes,\
they prefer to load an entire movie into memory, process it and be done with it.

This is not a terrible idea,\
operations on a video file in RAM are much, much faster then sending frames at a time through pipes.

Others hate the idea of just three things,\
Program, Pipe, and Object.

They are used to creating entire Virtual Systems,\
with hundred of objects, including a Password Object, User name Object, a Login Object, that contains both...

And even a remote server object,\
that is a virtual representation of the mail server.

Just having Program, Pipe, and Object,\
is terrifying to them.

Having just three things,\
allows for those standard operations like Inject, or Branch depending on whether the login failed or succeed.

---

ffmpeg uses pipes in the single most terrifying way,\
they construct trees of pipes, or meshes really.

And it is all in a single line of text,\
and ffmpeg allows for multiple video inputs, whhooh!

But once you know that it is just three things,\
you are able to imagine everything in your mind.

ffmpeg makes it so that all inut files are numbered from zero up,\
and it names results of transformations, giving you a named connection point to which you can hook in a pipe to another operation.

So you say ZERO, which means the first file that was mentioned on the command line,\
then black and white, as in transform video to a black and white movie, and then...

And then, you name the output of this transformation,\
BW for example.

Now, you say BW (just like you said zero a moment ago),\
followed by add movie grain, (just like we said black and white), and then another name GBW.

And now you use the GBW output point,\
and connect it so some other transformation.

Here we think in threes,\
INPUT\_NAME, TRANSFORMATION, OUTPUT\_NAME.

We are focusing on connecting transformed data to to other transforming programs,\
our named output is connected to a filer as input.

And sometimes names are optional in sequential operations.\
it makes them easy to read, so that you don't have to keep naming the outputs and referencing them in inputs.

It would be a fun project to create a Node-RED like user interface,\
for ffmpeg, while you have exactly that in Blender, this program would crown ffmpeg with neat graphics.

---

It is possible to reduce the entire Node-RED programs,\
to hard to read command line, it would totally work - that is the power of keeping things simple.

Keeping down to a very primitive but capable system,\
helps prevent leaky abstractions.

I think all abstractions are leaky,\
it is just the nature of abstractions.

---

What you have glanced here today,\
also translates to Phone Apps.

A screenful or a card would represent a program,\
swipes left and right would show you the incoming and outgoing connections.

A pinch out or zoom out would show the entire network of Pipes and Programs,\
and if you create a Hub for Program-Card programmers.

Where people can set bounties on cards they need,\
you have a marketplace.

By having this ability to request custom cards,\
all your users become programmers.

---

Take a look at [Visual Programming Libraries on GitHub](https://github.com/topics/visual-programming?l=javascript)
