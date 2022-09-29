---
id: poem-0420
guid: d547ad2f-3399-4218-a129-9709c2000e01
title: >-
  Programming Tutorial: Connecting All The Program Pieces Together With An Event
  Emitter
description: null
tags:
  - furkies-purrkies
date: '2021-04-25T00:38:17.829Z'
lastmod: null
weight: 42000
audio: poetry-0420.mp3
image: poetry-0420-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/BxEgi-70FQk
resources: []
features: {}
draft: false
---

Normally,

you want to go as simple as possible.

So the main file to your program should not be the program it self,

but rather a kind of an index of all the things that you are calling.

It should be written for your [Rubber Duck](https://www.youtube.com/watch?v=IHJd-vk5x7k),

for your tired self few years down the road.

The opening file to your program,

ties everything together, reveals the structure of the whole thing.

It should be basic if/then statements,

and calls to functions that do the actual work.

---

If you ever change your mind about something in your program,

you will only have to edit that simple main file to make the changes.

---

But, as you can imagine, some programs can get really complex,

even a simple chat application can turn a simple program into non sequential madness.

Where things jump out of the server at you,

when for example someone sends you a private message.

All of a sudden, your program can't have a starting point,

can't to things in a sequence.

It is no longer like the music roll in a player piano,

but more like a telegraph, a radio, or a phone.

It first has to listen,

and only then can it execute its functions.

---

So there is this programming pattern, or a strategy called Event Emitter,

and it only really has two things, it is part of its beauty.

The event emitter can listen to events,

and it can emit events.

In a chat program,

it would listen for an event named "incoming-message".

The thing that it would listen to is is the web server,

you need a hosting company that will sell you a server for about $5 per month.

Once you install the chat program, and someone connects to it,

and types something in, and hits send...

They will be emitting an event to the server,

let us call this event "outgoing-message".

So the stranger presses the send button,

and the now-standard-program attached to the "outgoing-message" event...

Will grab the text that the stranger typed in,

create a data object and then send it to the server.

The server will then send the object to all the users in the chat,

and that will be represented as the "incoming-message" event...

Here the event handler will take the text out of the object,

and stick it into the chat window.

---

All this requires maybe 20 lines of code,

it is a very simple program, as an example, it is just two events, "incoming-message" and "outgoing-message",

Both of those events have very simple programs attached to them,

these programs are just five line functions, and the correct term for them is event handler.

Once an event is received by the event emitter,

it will trigger the event handler.

And yes the event handlers can also emit events,

making the entire program come to life.

And that is it,

Event Emitter can listen for events, or emit them.

---

[My most recent use of the EventEmitter, was just about a week ago](https://github.com/catpea/bowel/blob/507c8e00eef06a7ba72a2d9105025e749cb94cbe/src/compiler/plugins/create-website/index.mjs#L28),

I had to say, once the server has started, then begin downloading its files.

I wanted to create a very simple abstraction,

and not need to worry about what server I will end up using, or how long it will take for it to start.

---

One of my most favorite ways of perceiving the event emitter,

is to see it as a command system, instead of thinking about emitting an event, I think about executing a command.

And my most colorful use of the Event Emitter,

was for a MUD program, an interactive Text Adventure Game.

I made a world that consisted of locations like room, palace, woods,

and then send a Golden Snitch from Harry Potter Movies through it.

The Golden Snitch, when opening doors,

would actually trigger the Open Door event and i9nteract with the environment.

(I don't know what a Golden Snitch does in Harry Potter's books,

I am a fan of Twilight, I never had time for Harry Potter, but maybe some day.

One time after a long programming session for a charity event,

my teammates and I were asked to to step out for a photo.

And the day was so ridiculous bright that I before I could stop myself I said,

if I step into that sun I am going to sparkle like a vampire from Twilight.

This was a weekend long programming session,

and I really didn't like the idea of mixing PHP with JavaScript when node.js was already around.

I was wearing my superman shirt, one one programmer, was fool enough to say "Hey Superman",

to which I quickly replied \*Good morning Lois\* in the most Clark Kent voice I could muster.

I am pretty sure nobody liked me there,

I was justifying to be funny.)

Anyway, the Golden Snitch led me to a new appreciation for the Event Emitter,

it makes creating virtual worlds very simple, and very fun, I called it Thought Programming, because of how little work needs to get done.

And since it does not matter if it is a Non Playable Character or a User moving through an environment,

it is fun to watch things happening all on their own when just the bots are bumping into each other.

As a side note, I once connected two chat bots together over a network,

and they started chatting to one another, and asking and sometimes answering each other's questions, that is a perfect job for the emitter, it was like 15 lines of code.

---

In closing, the Event Emitter makes complicated things simple,

and if you stick to structuring your entire program out of events, you can create a beautiful diagram of it.

Even without a computer, armed with just an... arm and a pencil, you can start sketching complicated multi-input/multi-user programs,

with multiple things creating ordered chaos.

If you are just starting out with programming,

try to imagine how you would create a program you like, by just listening to, and emitting events.

And if there is ever a program that is confusing you,

try wrapping it in an Event Emitter, and giving it a simpler front-end.
