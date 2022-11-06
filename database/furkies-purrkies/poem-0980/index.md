---
id: poem-0980
guid: c93d5572-b614-48db-9c80-46a94870398c
title: 'Introduction To Programming: The Heck Is A State Machine?'
description: null
tags:
  - furkies-purrkies
date: '2022-11-06T02:53:08.113Z'
lastmod: null
weight: 98000
audio: poem-0980.mp3
image: poem-0980-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/_uS8dKPwGrM
resources: null
features:
  video: true
raw: true
draft: false
---

It is a simple programming pattern,
that forces your application to have states.

This thing is so powerful,
that you really just want to use it for complex user interface purposes.

The following text emphasizes that a state must be described by a verb,
so that you never confuse it with an action that moves your application into that state.

---

But let us take a step back, a machine is something physical,
it is tough, limited, inflexible.

A nuclear power plant is a good example of a machine,
it has turbines that must be spun by steam to generate electricity via magnets.

But it requires radioactive materials to heat the water,
turbines no matter how advanced, can’t work without heat.

Nuclear power plants are rigid, limited,
they are not even nuclear, they are steam powered.

A machine,
is hard.

---

A state, it is what you think it is,
but we have to use a verb, an activity for its name.

If you are feeling philosophical,
then a good state name is thinking.

You always want to choose simple words,
you don’t want a philosophical state…

Then your command to enter that state,
becomes philosophize – you want to kep it simple.

---

Now onto the [state machine][1],
and the problem that messes everyone up.

The most fantastic state machine,
especially if you are reviewing your programming knowledge.

Is the traffic light,
something to ponder while you have a moment.

---

Let me just underl  ine the light cycle here,
Green, yellow, red, and back to green.

Green does not turn to red,
it turns to yellow, to warn drivers that the light is about to change.

But the red light, does not warn the stopped drivers,
that it is about to become green.

Because are stopped,
there is no need to warn anybody.

---

All too often,
inexperienced writers, teachers and professors.

Create a state named red,
with a green action, which is how the light works, but the naming here is wrong.

This is a huge disaster,
because it says nothing about the machine.

It is confusing,
and often pushes people away people from using state machines.

---

Let us start with a green light,
and call this state, driving.

Not the best name,
but it works great.

In the driving state,
we have a warn action, that is it, we don not have a stop action here.

Under driving state we can issue, warn,
to enter the warning state.

And only in the warning state,
we get the stop action.

Issuing the stop action,
puts us in a stopped state.

And here we get a drive action,
and when issued we enter the driving state again.

---

Think of an action, as a shout,
it is short, a snap.

And a state, is something that takes a while,
it is an activity performed over a stretch of time.

You must never have a sleep state,
that is a command name, the state is sleep-ing, drive-ing, warn-ing, and stopped.

---

Finally, a state machine,
can go through a complex cycle, without causing trouble.

Because it won’t let you go from driving, to stopped,
during the driving state, you can only issue warn.

And then when you transition to a warning state,
you can issue a stop.

In complex user interface programming,
a state machine can protect the integrity of your user interface.

You will never be surprised by users not being able to click save,
because with a state machine…

You have that licked, on the back of an envelope,
even before you sit down to programming your user interface component.

[1]: https://www.youtube.com/watch?v=3_D-3HPUdEI
