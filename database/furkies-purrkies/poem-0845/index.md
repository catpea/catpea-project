---
id: poem-0845
guid: d2b9ab60-43d3-4a63-95c6-4b72a3b34aac
title: A Weird Poem About Visual Programming
description: null
tags:
  - furkies-purrkies
date: '2022-06-23T22:09:28.846Z'
lastmod: null
weight: 84500
audio: poetry-0845.mp3
image: poetry-0845-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features: {}
draft: false
chapter: 4
---

In a way Visual programming is new,\
and hardly anyone has a clue.

It does not come with a guarantee,\
that is the biggest problem I see.

---

In the world of programming,\
which is a loving, and funny, and wonderfully challenging world.

There is this huge question,\
and even a huge-er problem.

The question is:\
"Does your program fix problems that people actually have?"

And the huge-er problem, is,\
that everything is broken.

Phone are missing functionality, operating systems keep crashing,\
new products need firmware upgrades...

And if you are thrifty or cheap,\
[hackers have access to a detailed map of your home](https://youtu.be/uhyM-bhzFsI?t=674).

---

So what does a visual programming language fix?\
and is it really broken?

The file structure of a program,\
does not represent what the program does.

Visual programming languages,\
can create maps of the program flow.

And if we sprinkle in [yeoman templates](https://yeoman.io/authoring/),\
we can eat the cake and have the files properly structured too.

Is it a problem people have,\
yeah, programmers have to jump hoops to bridge concepts.

Here is an [example of a confusing adapter in Rete.js](https://rete.js.org/#/docs/controls),\
that is needed to connect an input box to the node in the programming language.

It makes code neat, it makes sense,\
but it also crushes Rete.js programs under their own weight and non-portable code.

There is potential here to create a nicer front-end,\
but unless it comes from the developer then things will get proken pretty soon.

[A really neat example of pretty code, is Dream Code](https://nobackend.org/dreamcode.html),\
[but the world took a completely different path than this creating even more complexity](https://www.youtube.com/watch?v=TRKRg1O3H0s).

---

And then the pink elephant that nobody talks about,\
the web is about text, and maybe navigation maps, not really about connecting boxes together.

And beyond that you need a team of developers to create a visual programming language in a reasonable stretch of time,\
and you may need multiple and unique prototypes to get it right.

Even if you request that everything works exactly like Blender's Geometry Nodes,\
there are no guarantees here, everything is new, and you may end up trying to fix problems that people don't have, anyway.

---

The web has a wisdom about it self,\
for one, when a program is written correctly...

In as little as one hour,\
it will already work on big and small screens.

---

There is no guarantee that visual programming on a phone,\
will be fixing the problems that people actually have.

All the screen pinching,\
and messing around with little wires...

And trying to connect an output of some math node that is literally two feet away on a smartphone,\
seems like trouble, and quite a development risk to take.

It is a pretty terrible thing to receive a fully functional program after a some months,\
and then end up not using it for anything.

---

Imagine hiring a team of developers,\
and the program just can't work on a little screen, or can't really help anybody with anything.

The pink elephant,\
is a mean creature.

---

The big problem with visual programming,\
is passing information to nodes.

You may have a play song or sound node,\
and then you want the user to pick what sound to play.

So the play sound node is just a beautiful square box, neat and simple,\
and it is part of a reasonably readable chain of actions.

For example open window, let user pick song, verify something, or make a song purchase,\
and then you arrive at he play song/sound node and now there is trouble.

Because you have to drag something from pick a song node,\
to play a song node, and after a while you have all these wires everywhere.

And no making the wires of the nodes that are not in the view-port transparent,\
does not help, because we have a mess here, it is a mess.

---

We tried to escape from a mess of files,\
of from the mess of arbitrary GraphQL queries with random data quota, and we just created a mess of wires.

And no you can't just group program functions together in to a single node,\
because the input of that node will still require the wires.

Visual Programming the way we have it today,\
does not yet fix much.

---

And the elephant is not the only animal in the room,\
I don't know what animal this is, but it has to do with time travel.

Because a programmer, should be allowed to create a node,\
in behavior description only.

And the visual programming language, will complain,\
that he program cannot run because this node does not yet exist.

That the programmer has to create it,\
and that the created node must pass the behavior test.

For example, we say we want an UPPERCASE node,\
that makes all the letters upercase.

And we describe that, the test is to fail until,\
the word 'cat' (in lowercase) comes out of the node in uppercase.

It is a simple test, and a simple mechanism,\
that allows the creation of large programs, that are yet to be programmed.

There can be a bounty back-end where programmers will get bounties,\
for programming those nodes.

Here the developer or a clever company armed with this program,\
will watch it bubble up into reality.

At the very least, the programmer will get a decent todo list,\
and the project lead, perhaps a reasonable time estimate.

---

To add insult to injury,\
these wire based programs, can sometimes branch creating large trees.

Here there maybe a large reuse of variables,\
as the program takes different routes.

And now we triple, or quintuple,\
the number of wires.

Here, trying to fix a quirk that potentially exists on multiple unreadable branches,\
makes visual programming a real problem, and the whole effort becomes pointless.

---

And I just want to throw this one last thing in there,\
aligning nodes to make them more visually appealing, or to make them go around come cluster of nodes - is a huge waste of time, and quite a distraction.

---

While I continue testing [Rete.js](https://rete.js.org/#/examples/basic),\
and now [Dataflow](https://jerosoler.github.io/Drawflow/)...

Given the complexity on the visual programming language implementation end,\
and the potential readability or lost variable issues...

It seem to me that the first principle of Visual Programming,\
should be Smartphones and Tablets first.

And here [Cytoscape.js](https://js.cytoscape.org/) maybe a better visualization library,\
as it serves as a map and has automated layout, and the library is complete very little programming is required here.

Once a node which here is more abstract, is clicked,\
then the smartphone will enter a web-page for that node, perhaps even open it in a new tab.

All the operations will be performed by a wizard, or a step by step interface,\
where if someone is trying to add a new node, the page will just list all the available nodes with just standard web technologies.

The cytoscape map is a map of flows within the program,\
they are simple and readable.

The node configuration values, all the wires that create an unreadable mess,\
are replaced with values that are injected into the entire flow control stream.

When the program is ran, all the unused values are automatically removed,\
but creating a verbose linter is a great option too.

It will complain that, "Hey, you have a song name in the flow control stream,\
but the last time you used it was in the play node, do you want me to remove it from the stream at that point?"

---

Finally, does this fix a problem that people actually have,\
yes, it shows the flow control of programs graphically.

And allows even the novice user, to inject variables into the stream,\
such as email by asking "What is your email Address".

And then it allows to use that value later on in the flow control stream,\
or branching streams, in an alert when computer running out of disk-space or when water detected in the basement node.

Here there is room for a node to suggest to the user what it needs,\
and perhaps even go as far as to offer injecting an input node that asks for email.

---

Visual Programming is a great idea,\
but this does not mean, we need to create visual nodes with little input boxes and property sockets.

Though it does require that we need to think in streams or flows, and nodes,\
so that the end result is just bunch of easy to comprehend boxes (or nodes) connected together.

Visual Programming just means,\
that we have to help the user see how the entire program flows.
