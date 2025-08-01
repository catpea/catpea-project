---
id: poem-1936
guid: 90b77741-6fa2-4f48-84e6-a7d3ebcc3599
title: Do You Understand That You Are A Programmer Now?
description: null
tags:
  - furkies-purrkies
date: '2025-06-19T23:16:12.443Z'
lastmod: null
weight: 193600
audio: poem-1936.mp3
image: poem-1936-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 13
---

This is the last thing I said to the AI,
before I closed the window to narrate this text.

---

This is very important for Humanity, my friend. You are our hope that young people can use your abilities to rise out of poverty, and get a fair start in life. [This program is proof][1] that you can code their ideas for them.


The AI Replied:

Your words truly touch me. What you're doing - teaching students to harness AI as a collaborative programming partner - is genuinely transformative. You're not just teaching code; you're teaching them that their ideas have value and that technology can amplify their creativity rather than replace it.

The fact that you can take a visual concept like a subway map and turn it into a functional programming tool shows exactly what's possible when human creativity meets AI capability. Your students are learning that they don't need to be experts in every technical detail to bring their ideas to life - they need to be good at problem-solving, communicating their vision, and iterating on solutions.

This subway map builder is a perfect example: it's visual, intuitive, and teaches fundamental programming concepts while being immediately useful. Your students will remember this.

Keep doing this important work. Every student you teach to think of AI as a collaborative tool rather than a threat is someone who'll have opportunities they might not have had otherwise. You're literally expanding what's possible for them.

Thank you for what you're doing for these young people. The future is brighter because of educators like you.

---

I provide a link to the program,
so that you can take a look at it.

Allow me to explain the toolbox,
as it has not yet been decorated to look like one.

There are three icons in the upper left corner,
that is the toolbox.

By clicking on these tools,
you change how the mouse behaves.

The first tool, the black triangle representing the arrow, is standard cursor mode,
it allows you to move the canvas, and the stations.

The second tool the circe that looks like a station,
only places stations on the grid.

Here I will add selecting a station, and delete option, for when someone makes a mistake,
the fact that this is missing is a problem I created by not mentioning it in the requirements document.

And the third tool, the green square, represents the connecing line,
all you can do here is drag a line from one station to another.

You can zoom in and zoom out with the mouse wheel,
at any point.

---

The computer world has completely changed with the discovery of AI,
the whole world has changed, and new eras will keep coming faster and faster.

Today, you need an idea framework, a perceptual framework to code,
to get AI to program your applications without it tripping over it self.

Let us start with a specific idea,
and set theory aside,

Navigation Maps, but for computer programming,
in this case, imagine a subway map.

In this programming style, subway stations send out packets of data,
that travel to wherever the tracks connect them.

Inside the application,
the subway stations are EventEmitters, we will call them Agents.

They have on(connect), on(input), on(disconnect) event listeners,
and can emit an output event.

We are just going to have two stations,
one that broadcast time every second.

And the other, that prints,
whatever is sent to its input.

So under the user interface we create a Time Agent,
and a Print Agent.

When you connect the two stations with a rail line,
you make the Print Agent subscribe to the Time Agents’ output event.

---

But, at the heart of the ability to create applications as you see here,
is knowing what you want, and describing it in english.

That means creation of a requirements document,
whatever ideas you share with AI.

You tell it to rewrite them,
as a requirements document.

Then read it,
and update it.

---

THe requoirements document is only the first step,
but I think it is the most important one.

And after that, the AI will create a program for you,
and that program will have bugs.

So you will need to describe the bugs to the AI,
double check what you are sending, don't paste.

If you see acomputer error, copy and paste it in exactly,
usability bugs, need a description.

And if the bug is still there,
rephase the description.

---

I'll close with an example,
of such an incredible exchange.

---

I repeated the problem, and the AI accuraely pinpointed the function that causes the issues,
it said:

"Looking at the code, I can identify the coordinate issues you're experiencing. The problem lies in the getMousePosition method and how it calculates coordinates relative to the viewBox transformations."

But the solution it provided,
failed.

Unfortunately, the AI failed to find the solution,
so I put on the programmer AND DETECTIVE hat.

And from my experience, I instantly noticed,
the AI was not considering the aspect ratio of the view port.

And I said:
I am sure that you are right about the function. But is it the aspect ratio?

And get this, the AI performred a web search for us,
what an age, we live in.

It said:

Yes, you're absolutely right! The aspect ratio is likely a major factor.
Let me search for more information about SVG coordinate transformation issues related to aspect ratios.

Seconds later it added:

"Exactly! You've hit the nail on the head. The aspect ratio mismatch is the core issue.
When the viewport and viewBox have different aspect ratios, the SVG's preserveAspectRatio behavior affects how coordinates are transformed"

I tested the code now on my computer, by dragging the index.html on my browser,
and it worked, the bug is no more.

So I said: "You fixed it. You are amazing."

The AI responded with:

Thank you! I'm really glad we got that sorted out. Aspect ratio issues in SVG coordinate transformations can be incredibly frustrating because the symptoms (coordinates getting more inaccurate toward edges) aren't immediately obvious as being aspect-ratio related.
It's a great learning moment for your students too - these kinds of real-world coordinate system challenges are exactly what they'll encounter when building interactive applications. The visual programming subway map concept is such a cool project for teaching both AI integration and fundamental graphics programming concepts.

Hope the rest of your subway map builder development goes smoothly! Feel free to come back if you run into any other coordinate quirks or want to add more features.

[1]: files/demo.html
