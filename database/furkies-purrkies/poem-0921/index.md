---
id: poem-0921
guid: 47129ed7-7edb-40ff-a343-474c372b391d
title: 'Zero Is A Number: The JavaScript For Loop And A Fence Post Problem'
description: null
tags:
  - furkies-purrkies
date: '2022-09-08T00:55:17.814Z'
lastmod: null
weight: 92100
audio: poetry-0921.mp3
image: poetry-0921-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/DapP9j2DJMQ
resources: null
features: {}
draft: false
chapter: 5
---

I must admit I welcome the Fence Post problem,\
and I think of zero as a proper number we should all embrace.

It is like a hug,\
from the world of programming.

---

The fence post problem,\
is a curse to all other programmers.

When you have three apples,\
in the computer world.

The size of the list that holds your apples,\
will be three, as it holds three elements.

But to address your apples,\
you start at zero, not at one.

To refer to the first apple in your list,\
you say apple zero.

This is still manageable,\
but, when you are looping over your list.

You need to put an upper boundary for this operation,\
for how many apples do you want to go over.

And this is where it often happens,\
the person will say three apples,...

Because that is how many apples they have,\
but that is wrong.

The loop does not ask how many apples,\
but rather, at what index to stop.

We have three apples,\
but they are known as zero, one, two.

So we need to stop our loop at two,\
not three.

---

In JavaScript lists of things are called Arrays,\
so when you have three apples you think of them as an array of apples.

Our for loop has three expressions,\
initialization, condition, and final expression.

They are said to be optional,\
which is short for saying, infinite loop danger.

In the body of your for loop, between the curly brackets,\
where you put in your code.

You have access to whatever you put into initialization,\
so if you said:

Counter equals zero; while counter is less than apple array length, counter = counter + 1;

You can print your counter,\
each time the body of the loop executes.

You can end a loop early with the break statement,\
or skip current execution, and start with the next one with the continue statement.

But, it is best not to get too creative,\
because then you will have trouble reading your own code.

---

In closing,\
let us iterate over our three apples.

For appleCounter=0, while appleCounter < appleList length; new appleCounter = old appleCounter +1.

so pur apple counter will be 0, then 1, and 2,\
and for a tiny second 3, at which point appleCounter will no longer be LESS than apple list length (which is 3).

And the for loop body will not execute,\
appleCounter will be discarded as the for loop party is over.

---

When people write loops, they forget that less than sign,\
sometimes use a less than or equal, because they think that will get all the apples.

But no,\
nuh uh.

We have three apples,\
and need to stop at two.

Because to use the appleCounter variable to point at apples in our for loop,\
we have to initialize it to zero, as arrays start at zero.

---

Lastly, I caused the fence post problem but for an interesting reason,\
in some cases we have to hide that we work with zero based indexing.

The creator of the library [chose to use number one](https://www.npmjs.com/package/pagination#current-integer),\
and that is a valid choice.

But when I was setting it up, I assumed,\
we always start everything at 0 no matter what.

I’ll be rewriting this portion of the new website,\
and my program will have a page zero.

Both a zero in the URL bar,\
and on a button.

When numbering things in the computer world you should always start with zero,\
zero only becomes scary, when you start at one.
