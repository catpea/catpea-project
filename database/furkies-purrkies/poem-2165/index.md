---
id: poem-2165
guid: 974bda32-81c5-4962-814f-e3cdbf861a4f
title: Computer Game
description: null
tags:
  - furkies-purrkies
date: '2026-02-03T02:29:15.059Z'
lastmod: null
weight: 216500
audio: poem-2165.mp3
image: poem-2165-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 15
---

Let us start in the beginning,
two new dat structures were added to JavaScript.

Map and Set, Maps associate names and values,
first name Alice, last name Kingsleigh.

Sets only have values,
1, 2, 3, “A”, “B”, “C”.

I merged the two into a new data structure,
called MapSet.

Here you can say friends contains,
a set with names Alice, Bob, Carol.

I created this,
for a tiny Event Emitter.

So that I can say “mouseclick” event name,
has a set of functions that are called when a click is made.

An event emitter lets you say on click,
execute this function, on click execute that function.

And then off click removes that function,
so that it is no longer executed wen a click is made.

Satisfied, I proceeded to make a Signal,
a Signal is a super primitive emitter.

So weird, it only has subscribe and value you can read,
so a Signal holds a value “Alice Kingsleigh”.

And you can subscribe to it,
when the value changes you will be notified.

---

MapSet keeps the EventEmitter simple,
and Signal is tiny we don’t want to use an EventEmitter for it.

Signals, signal change, Event Emitters,
can emit all kinds of events.

---

Then, I created a Triple Store,
a triple store stores Triples.

Socrates isA Man,
isA; the thing between Socrates and Man, represents a relationship.

The statement as a whole,
represents a fact.

I made my TripleStore query, return Signals,
and asked is Socrates Mortal.

My triple store didn’t have that information,
so the signal didn’t do anything.

---

I need to be able to notify my signal when I add new facts,
to the store.

My signals have to listen to specific events,
to get the right updates.

They are primitive, they just hold a value,
with a TripleStore based on an EventEmitter.

They could listen,
to just the right facts.

---

But Socrates isA Man,
is far from concepts of mortality.

---

So I upgraded my now Reactive TripleStore,
with a Rule Engine.

I then added a transitive rule that states,
when x isA y, y isA z, then x isA z.

And states,
Man isA Mortal.

And my Signal, lurched forward,
announcing that Socrates at least technically was mortal.

So when x isA y, and y isA z, then x isA z, translated to:
when socrates isA Man, and man isA Mortal, then Socates isA mortal.

Tricky, to get used to,
but very clear.

---

This is a difficult territory to navigate,
so I created a range of progressive challenging tests.

I made a signup form,
that checks if user isA member.

I created a little prompt program, like AI today,
but inspired by the old Mozilla Uniquity.

And then, with system showing no errors,
I proceeded to the creation of a text adventure game.

I told AI to make me a node based server.js,
to bypas Browser security so that I could make requests to any remote server.

And I downloaded, source code for Zork,
a classic Text Adventure game.

And I commanded the AI to create a user interface,
similar to our Mozilla Uniqity clone.

And use the Reactive Rule based TripleStore,
to create a Procedurally Generated world insired by Zork.

I made it clear that we are not copying the Grue,
but paying respects to Zork by having one in our system.

It kindly implements direction buttons,
so I didn’t have to type to move around the world.

I was just pressing N,S,W,E buttons on the screen,
no arrow keys here.

---

Once I was sure that the infinitely large game world worked,
I instructed the AI to connect to my image generating Stable Diffusion server.

And each time I enter a room,
to generate an image based on the rooms description in our text adventure.

It was wonderful,
I frequently stirred the Grue.

I found keys,
scattered around the back rooms.

I told AI to create a style command,
that asks Stable Diffusion to create graphics in Painterly, or Modern Style.

I switched to Botero style,
and saw, a fat round little Grue man, creeping up on me.

---

Before I ran our of time this weekend,
I entered virtual reality using the [IWSDK][1].

I enabled all the features in the sample project builder,
and asked AI to let me grab and move anything and eveything.

I created a texture for the skybox,
and upscaled to to 8K.

A small platform to stand on,
I took care of readable text and input forms, gestures.

And I created one flat image,
I could stretch and reposition any which way.

This image,
represented a textured wall, and admired it.

With a sad little noise,
I had to leave VR, to get some sleep.

I spent Monday morning, appreciating,
that the game code was the text of the text adventure.

That what I saw in 2D, was not that difficult to create in 3D,
N,S,W,E, just represents four cardinal directions, four wall images.

Stable Difussion 1.5 can deliver something in 30 seconds,
I can follow up with a more advanced model.

I can can generate unpainted 3D models,
that I can load into VR.

To me, the biggest feature is the styles,
that I can render a Painted World or a Neon World, a Cartoon World.

Sometimes just taking a walk through an infinite portal universe,
emerging around you is even better than a game.

But I admit it,
something has to be done about the Grue.

[1]: https://developers.meta.com/horizon/documentation/web/iwsdk-overview/
