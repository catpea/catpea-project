---
id: poem-1172
guid: 634abaca-c591-442d-bd71-52acb9ae8405
title: "The Secret Doodads Of Cyberspace: What The Heck Is A Finite State Machine?"
description: null
tags:
  - furkies-purrkies
date: '2023-05-18T03:07:46.084Z'
lastmod: null
weight: 117200
audio: poem-1172.mp3
image: poem-1172-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: false
raw: true
draft: false
chapter: 6
---

There is normal programming, or casting code spells,
and then there is world building.

We are excellent navigators, this is very likely an evolutionary adaptation,
and it maybe responsible for our amazing intelligence.

The mechanisms used in navigation, might have been copied,
to help us become really great apes.

Memory palaces are an example of how great our minds are at navigating,
and if you close your eyes you can trace all the walls in your house in great detail.

---

Programmers use this to create rich concepts,
ones that you must hold in memory to program.

My favorite example are MUDs.
Or multi users dungeons that can be programmed inside out.

I think they are going to make a come back,
and may even be used to enhance Language Models.

The information super highway, is unfortunately not quite real,
nor are all the car analogies that programmers hate to make.

But, you’ve heard of data streaming, and that too,
is a neat example of imagination backed cyberspace machinery.

Streams don’t just strem binary data, they can stream OOP objects,
and they can be split, transformed or mapped and reduced into interesting things.

---

A State Machine is a device that is less complicated than Multi User Dungeons,
but more creative than just streams.

The reason why you would want to use one,
is to simplify your code.

When you are using a finite state machine,
you just have a finite and well labeled number of states that your program can be in.

Whatever isn’t a state, is an error to be trapped,
or just does not matter, the state is the main thing.

That means, you don’t need if statements to probe what is going on,
or see if something can happen, or is ready.

If something failed to load, or is still loading, or your program is still starting,
you are in the loading state.

You will stay there, until loading or whatever completes and issues a state change,
here you will go to ready state, or error state.

As a result, you don’t need to check if you are ready,
or had an error.

If you are in error state, you simply focus on displaying an error message,
or asking the user to retry.

If you are in the ready state, you don’t need if statements,
to see if all your files have loaded, and check for errors, or if something is missing.

Ready state, means, that you are peachy,
there were no problems, everything has loaded.

You don’t need to use if statements to check anything,
it is all there, the only way that the loading state will transition you to ready state.

Is when everything is OK, when it is all loaded,
when there were no errors.

---

Finite state machines also enforce state transitions as a bonus,
that means, when you are in the loading state…

You can’t possibly transition to play-song (or playing) state, for example,
that transition only makes sense from the ready state.

Because you need to load the song,
before you can play it.

You can catch a bug this way, but, the big benefit,
of guarded state transitions.

Is the map that you are forced to make,
map of all the program states, and what transitions they can make.

Aside from eliminating a ton of if statements and edge cases,
Finite State Machines reveal a compile map of program flows, and where it goes.
