---
id: poem-0832
guid: efc088cb-8e98-424f-a7dd-05ceeaa92fd5
title: 'Bling: Thinking In Geometry Nodes'
description: null
tags:
  - furkies-purrkies
date: '2022-06-10T22:38:07.143Z'
lastmod: null
weight: 83200
audio: poetry-0832.mp3
image: poetry-0832-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  portfolioJpg: true
draft: false
chapter: 4
---

Blender is a program for making 3D things,\
3D game characters, and everything else.

The way things are done in the 3D world,\
is that you start with a 3D primitive like a cube or a sphere.

And then you apply modifications,\
for example you can extrude faces of a cube with your mouse.

Or you can apply an automatic modifier,\
such as solidify.

Which for an unknown reason,\
will go inside your cube, and make a little home.

It will give the inside of a cube, walls,\
perhaps it sees the faces of a solid cube as a thing to solidify.

You can mix and match modifiers,\
you can send a solidified cube into some other modifier.

As a side note, nobody yet knows,\
what happens when you solidify a solidified cube - you get a second floor maybe.

There is maybe 50 modifiers that do odd,\
but useful things like that.

And then there is this really crazy one,\
called Geometry Nodes.

When you select your cube,\
and apply a geometry node modifier.

You get to see this beam of geometric information,\
flowing from the input of the modifier to the output.

These beams or node connections, or node trees,\
or geometry node blocks are not a new idea.

It is a drag and drop programming language,\
not quite a proper user interface, and not a boring old programming language.

It is like a subway map,\
you can follow the connections, to get a good picture of where things are happening.

Hollywood uses a similar language for advanced computer based scenes,\
and previously Blender used something similar to color 3D objects.

A language called pure data allows for music creation,\
and a program called node red can help you program web servers.

---

To return to our cube with,\
a geometry nodes modifier.

If you cut the stream of the geometric information,\
inside your Geometry nodes Modifier, the cube simply disappears.

That input no longer reaches the output, the geometric information is cut,\
and it won’t reach your screen.

Here in this visual programming language,\
you can also modify geometry.

But you don’t get something for nothing,\
like with the solidify modifier.

Now you have to really sit down,\
with a pencil, and try to figure things out.

---

This is where this poem,\
becomes a little bit unhinged, so better grab onto something.

This sub modifier world,\
this world of sub primitive things.

Does not aim to speak the human language,\
it won’t try to say solidify.

Where you can sort of kind of hope to try, to imagine,\
that something is about to become solid, somehow.

Here if you want to do something,\
you have to look at other people doing stuff, and remember it.

You may have to read documentation,\
which will for example seem to try to help you.

For one it will break down long pages into section,\
and sure as heck, they will start with a title, that someone careful highlighted, and made bold.

But often just to mock you, to try to break you,\
to try to make the documentation writers look special.

But after a while,\
you will be able to do stuff.

You can make your own solidify thingine, sort of,\
if you take a cube, and and add a delete geometry node, and set it to delete faces.

And then convert the resulting lines into a curve,\
which is more important than a line, and has a whole lot of tools.

Then you will find yourself, with a new starting point,\
and lots of little tools for curve operations.

And here you can dress-up your curve (that was once a cube without faces),\
with another curve, which will gently trace all the lines, and thus solidify your main curve.

And I did just that to create the decoration for a ring,\
except that instead of a cube I used a low resolution sphere.

---

So you see, there is functionality in here,\
but you have to know to delete some geometry.

And you have to remember that curves,\
are treated with extra care and respect, and have lots of little functions.

Such as dressing up one curve with another,\
a process that I have repeated, to create the main body of the ring.

---

Here, the curve that I was using to dress up my ring or curve-circle,\
is something I manually created with my mouse.

I wanted total control over how the ring feels,\
and I actually repeated this step one more time.

So that I could fuse into the main body,\
a much more geometric looking dress-up curve.

This way the inside of the ring will be very smooth,\
while the outside will have an interesting polygonal pattern.

---

And finally I had to pause,\
because when yo dress up a curve, it is a whole operation, all at once.

But to position, the main decoration of the ring,\
I only needed one spot.

I didn’t want to slide around a ring, or dress up anything,\
I just needed the correct coordinate on the top of this ring.

Asking for top was too much,\
I could have done it, but it would have added extra math.

And it is a good idea to keep everything inside Geometry Nodes,\
as simple as possible.

For example, any addition to a ring,\
is just about the size of a borough on a New York subway map.

So by the time you add five non-trivial things,\
your program looks like the NYC Subway Map.

---

And it turned out that I wouldn't get a coordinate for my ring decoration,\
that is way too much to ask.

You have to gently build up information as you work with your curves,\
and by the way curves are so special because they are simple.

A mesh such as that of a small smooth torus,\
can have hundreds of thousands of vectors of geometric information.

Where if you start with a curve circle,\
you will have 10 units of information.

In computer world everything starts at zero,\
including bugs, called [Fence Post Problems](http://www.catb.org/jargon/html/F/fencepost-error.html).

Because, when you start at zero,\
your number of cats is two, but you actually have a third cat...

Or possibly you only have one cat,\
or four.... maybe.

Anywho... zero is a really special number, because it is weird,\
and in the beginning.

So it is a really good spot,\
to weld the decoration of a ring to.

And in geometry nodes you would say,\
convert a copy of my curve to points.

Another useful tool, a point, is a reference point,\
it has XYZ, but also a radius, and you can attach custom calculations to it as of the recent Blender 3.2

So here, to place that decoration at spot zero,\
wherever it may be.

We say, distribute decorations to point,\
and this will immediate do what we are trying to avoid.

It will create as many copies of our decoration,\
as there are points.

Blender, and operations in-general are at their simplest when they are complete,\
because you never have to wonder what you got, you got all of it.

So now that the decoration has been distributed to all the points,\
and we have the most uncomfortable ring int he world.

We say, “Hey, distribute on point node”,\
“I am going to select point zero”.

Whenever something is doing all it can,\
there is usually a section option.

Which is a way of saying,\
select only those part of a thing.

So we select the part numbered zero by connecting boolean math node,\
in the A filed we attach we attach INDEX, which holds index numbers of points.

And then in the B field,\
we enter our magical number zero.

And now the decorations are no longer distributed around the ring,\
they are just at the point with index zero.

---

But now it gets worse,\
because you want to have smaller supporting decorations on each side.

And you want them to grow smaller and smaller as they move away,\
from the main decoration.

There is no easy solution for this,\
there is no trick you can pull of here.

---

Right after we converted our curve to reference points,\
we have to start doing math, with the cheerful little chipper math geometry nodes.

Which are the ultimate proof,\
that math is fun and easy, when it is done right.

Let us say we have ten reference points that we converted out cure into,\
and no we will not call it N points, none of that nonsense.

We need to take this ten,\
and make the center special.

Because that is where the smaller decorations,\
will pop up and start getting even smaller.

So to crack number 10 in half,\
we have to position it over zero.

And then just throw it down,\
as if the zero was the top of a pyramid.

So to pull it back on a number scale,\
so that the middle of the ten numbers is over zero, or becomes zero.

We need to know the half of ten,\
and then subtract it from ten.

So we are pulling the ten,\
back into the minus world.

Now our numbers go from -5 to +5.\
and here things get really easy.

Because we can just map -5 to +5,\
with a map numbers node.

This node will ask us, what is the minimum from,\
what is the maximum from, and we enter -5 and 5.

And then it asks what is the minimum to,\
and maximum to, and here we say -1 to 1.

This will create a series of 10 floating point numbers, doubles,\
that are now squished between -1 and 1.

And since we want things to be uniform on both sides of the ring,\
we want to run the numbers through an absolute function - to get rid of that minus.

There is an inversion that you have to perform here,\
so that zeros become ones and ones become zeros.

Because we didn’t start at zero, we started at one, what was once minus one,\
and then went over to one.

That means the zero that was the top of the pyramid,\
is where index five is, not where index zero is, we want to keep the zeros together.

Which in the world of rings means, at the beginning and at the end,\
at index 0 and also at index 9.

And here finally we assign this number to the radius,\
of our 3D reference point for safe keeping.

And now as we instantiate decorations on the surface of our ring,\
we have all the information we need to have a center decoration.

And side decorations,\
that gently get smaller, and smaller, and smaller.

---

What can I say,\
if something is uniform like rings.

Then it is almost certainly,\
programmable.

And with a little bit of patience,\
a bunch of naps, and sunny days.

You can create a generator of rings,\
generator of all kinds of blings.

The details on such a ring,\
are almost too much for today’s technology.

---

We may not have rocket packs,\
but, lets face it, flying with a rocket on your back, is silly and weird.

But what we have, is visual programming languages,\
that are just enough to open a whole new world of creativity and invention, and bling.

Procedural Modeling,\
is here to stay...

From procedural jewelry to furniture, shoes and maybe haircuts,\
and hats that perfectly match your haircuts so that everything has purrfect geometry.
