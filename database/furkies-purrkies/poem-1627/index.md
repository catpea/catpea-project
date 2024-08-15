---
id: poem-1627
guid: 4b1b5ca3-e87d-4b1f-9e39-4e5525de2ed2
title: Why Is Learning Programming So Unfriendly?
description: null
tags:
  - furkies-purrkies
date: '2024-08-15T03:52:48.190Z'
lastmod: null
weight: 162700
audio: poem-1627.mp3
image: poem-1627-illustration.jpg
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

Because you are not yet angry enough,
to write the software everybody needs.

---

There are online code bins like codepen and jsbin,
and [p5.js editor which comes with great tutorial series][1].

And they are good for learning,
and back of the envelope experiments.

But they are their own world,
they don’t help you towards building and selling applications.

[Electron Fiddle is a desktop app, that is interesting][2],
but again it is raw code that you have to enter.

---

[There is a program called Alice][3], for learning non-web programming,
a language called Java, and Java is not JavaScript.

And it is a good example of a program that is more than code,
now this is for kids, but the screenshot demonstrates...

What more than code means,
it means a tree, and actions, events, a preview, and a non-code editor pane.

Again the program is for kids,
but a good starting point for thinking about an adult version.

Alice is a visual programming language which generates Java,
you need to build a visual programming language for JavaScript.

It is the language behind every web page,
and web apps.

---

Codepen and JSBin, should serve as a foundation,
where you can build a program like Alice.

A much more compact challenge would be an Apple Automataor clone,
there programmers can program the actions that automator uses.

That is a nice start, very much resembling the editor pane of Alice,
but you are still going to need something like a tree to lay-out applications.

---

There are basically three things,
you want to focus on.

One, Building User Interface based applications,
which is a tree of nested UI components.

Buttons here would basically trigger Automator like actions,
that operate on a data tree, that the UI gets its information from.

The data tree I self, would be connected to a standard SQL database,
but via an object relational mapper.

Meaning, you just say, Accounts object hasMany User,
Accounts has an id field, and User has name, password, email, etc…

You can also use FileMaker/MSAccess trick, where you let your users,
move a cursor across records such as Bookmarks, or Songs, or Blog Posts.

The cursor idea, selects the record to display on screen,
and you can jump records with a search for record feature.

Which is basically, find booksmark, find blogpost conting Alice,
and then once your user click on a match, that is where the curson jumps.

And now,
that is the record that gets displayed on the screen.

---

You see what I mean about you getting really angry,
these are just simple machines.

It is stupid, that they don’t exist,
it would be so easy and fun to make apps.

---


Two, Building state machines, where the tree represents program states,
initializing, running, stopping.

These states have an on changed state thing,
where you can attach actions.

So as your program moves through different states,
it takes care of its own business.

And again it waits for input now without a UI,
so is this state machine was a web server.

It would wait for a user requesting a file,
or a webpage, like homepage or contact form, or contact form submission data.

And again trigger a list of actions,
though it can’t call actions from other states.

The state machine,
also protects you from calling functions not available in the current state.

Three, Extract and Transform data, via Streams,
not always to clean something up, but sometimes to show charts on a dashboard.

A very goods example of a stream is a video,
in context of a video we are receiving a stream of frames.

This way you don’t have to get a full video before watching,
it is streamed frame by frame.

In fact a quick way to sharpen a three second video on your hard disk,
is to convert it into sequentially named images, apply sharpen to all the images.

And then convert all the images,
back to a video file.

To be more efficient, you’d extract one frame, sharpen it,
and append it to a new video file.

---

These three are very flexible, they are not standard,
and you’d program them, in your own way.

---

What makes these three special,
is that they accept a user interface really well.

Managing trees is no different from managing folders on your drive,
except here you have more things.

Buttons for some form,
and event emitters that make data signals.

Data signals are variables that announce when they have changed,
this can easily, automatically update the UI.

---

To extract and transform data you can use the box and cable user interface,
where you have a box that represents a video.

Connected by a line, or cable, to a box, that sharpens images,
and that is connected, to a box, that adds frames to a video file.

---

Designing such application and program tools,
especially as a person who is new to programming.

Is nothing short of amazing,
you share your early vision of programming with countless people.

And every one of them, has the same problem,
where do I start, where do I put the code in.

How do I publish to a web server,
how di I build a desktop application.

Solve this problem,
and people will sign up with you.

One thousand five dollar per month customers,
which you should view as advertising well ten times.

Will give you 5,000 a month,
and because your tools are useful.

Your thousand customers,
will say great things about your product.

“Hey look at the app I made!”,
“...It only took two days.”

---

Learning programming, or learning functional knowledge for real,
will absolutely ruin your GPA in High Scool.

Because you are not going to have time to memorize noisy,
disconnected facts, that your teacher hopes to pass for real education.

So that they can get paid,
never mind, that you are not getting a real educaion.

They got to put food on their table,
and follow rules, [whether or not you are getting an education][5].

And it does not matter,
[if it kills your creativity][6].

[When I noticed I was getting bad grades no matter what I did][7],
my teacher told me to get used to in, because life is not fail.

---

No matter where you stand, or where you are going in life,
you should not let anyone graduate you from High School.

Until, you know how to program computers,
programming is the very least a High School should teach.

You should be working on Visual Programming,
and a great little startup that fixes problems that people have in your teens.

Please stop cramming and memorizing, and pretending to understand,
and [find a voice within you, to demand a real and effective education][8].

Don’t be scared that they will ruin your GPA and your life,
cramming for a good GPA means that it is already fake.

They are already ruing your life,
by coercing or forcing you to pretend to learn.

[1]: https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
[2]: https://www.youtube.com/results?search_query=electron+fiddle
[3]: https://en.wikipedia.org/wiki/Alice_(software)
[4]: https://www.youtube.com/results?search_query=Apple+Automator+Tutorial
[5]: https://www.youtube.com/watch?v=fmoor8DwqW4
[6]: https://www.youtube.com/results?search_query=ken+robinson+creativity
[7]: https://www.youtube.com/watch?v=DzSnvxejenY
[8]: https://www.youtube.com/watch?v=9M4tdMsg3ts
