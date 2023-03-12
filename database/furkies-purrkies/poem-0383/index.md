---
id: poem-0383
guid: e52882ae-f193-42f7-8ee5-b6a4d8b658d9
title: 'Introduction To Programming: Workstation and Behavior Driven Development'
description: null
tags:
  - furkies-purrkies
date: '2021-03-19T01:06:42.869Z'
lastmod: null
weight: 38300
audio: poetry-0383.mp3
image: poetry-0383-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/pIdteYOzGFY
resources: []
features: {}
draft: false
chapter: 2
---

Programming is simple, friendly, rewarding, fun, and relaxing,

it will set you free from poverty and drive you to make the world a better place.

People who think it is funny to say that,

are that people that brainlessly walked into some high stress meat-grinder and now hate life.

As with everything else, if you are forced to learn programming,

and forced to program under a threat of bankruptcy and poverty it will seem awful.

One of our first responsibilities in life,

is t push toxic people and environments away.

There is nothing negative in the world of programming,

it is an art like everything else.

---

Just like it is not perfect, to sit down to learning how to paint with a cup of tea or coffee as paint,

and paper that is not really all that good for water colors, and a brush that could be better.

---

You have to assemble your programming environment with a kind of love,

and you will need a mascot to keep you company and for [Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging).

It does not need to be a duck,

I have a Fuggler, the Red Suspicions Fox, and I called him Boo Boo, or Boobs for short, after an angry dog I like.

Your computer should be the [8GB Raspberry Pi 4 Model B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/),

[maybe get a Raspberry Pi 400 as your secondary](https://www.raspberrypi.org/products/).

You will need a monitor, keyboard, mouse,

and possibly an external drive.

I would recommend that you get a simple monitor,

the raspberry PI supports two 4K monitors but all of that is overpriced.

Consider getting a [mechanical keyboard](https://www.youtube.com/watch?v=s6SY7AQsyI0),

perhaps [AKKO](https://www.amazon.com/s?k=EPOMAKER+AKKO) or [Anne Pro](https://www.amazon.com/s?k=EPOMAKER+Anne+Pro)

Your programming language should be ES2021, or whatever year you are in,

this is the evolving JavaScript language.

I know many programming languages,

but I don't have time to use them all, there is no point in learning a language that you will not use 5 years from now.

You have to learn the language of the web,

it works in the browser, in application frameworks like [Electron](https://www.electronjs.org/) or [p5.js](https://p5js.org/examples/) or [Tone.js](https://tonejs.github.io/), and on the server, and your Raspberry PI.

You will need to install [Node.js](https://nodejs.org/en/),

and search internet videos for [node.js tutorials](https://www.youtube.com/results?search_query=node+js+tutorial).

---

But, above all you need a reason,

something you are or can be passionate about.

And it has to be something that many people can work on at the same time,

so something inspired by WikiWiki the program that inspired MediaWiki behind Wikipedia.

See the point is to allow strangers to come in and contribute to your program,

by just clicking EDIT, without signing up for anything, without giving their email.

I am gratly inspired by the SCP Wiki,

even though it is not a computer program, though it is a kind of a game, or a kind.

Just this morning I was reading about [SCP-087](https://scp-wiki.wikidot.com/scp-087) and I didn't finish, I stopped at Document 087-I,

and the hell with it all, I actually had to turn my lights up.

See multiple people are contributing to a single story, or - an almost a game,

and that is the platform that you must start with.

---

You will have to program your own WikiWiki,

and allow people to enter code into it via [CodeMirror](https://codemirror.net/).

I can't tell you what your project should be about,

but it should contain [your own take on BDD](https://www.youtube.com/watch?v=VS6EEUVZGLE) so that you can focus on sketching and let others code it for you.

---

[Behavior Driven Development](https://www.youtube.com/watch?v=VS6EEUVZGLE) or BDD for short, describes computer programs in plain English,

leaving it to programmers to fill in what is broken.

BDD is very simple,

but I am yet to find a simple explanation.

BDD is about writing stories about your program,

these stories describe what is going on, what is about to happen, and what should be the result.

If what happened does not create the expected result,

then you will know that part of your program is either broken or unfinished.

Let us begin programming a simple game,

where squirrel eat peanuts.

---

First we describe the world,

There is a peanut on the ground, a tree, a squirrel in the tree, and she is really hungry.

In the world of computers you have four [objects](https://www.youtube.com/watch?v=PFmuCDHHpwk) here:

peanut, ground, tree, squirrel.

The squirrel has a property of hungry,

since our story seems to hint on a squirrel that can be a bit hungry, rather than a true or false, lets make the property a percent.

Since we don't want to do any special math,

we will express percent as a fraction between 0 and 1, where zero is not quite hungry but may eat something, and one is really hungry and about to pass out for a little while.

---

Let's tidy up the place a bit, and create a world for our objects,

so now world contains ground, ground contains peanut, and tree, and tree contains squirrel.

In computer world there are primitive variables like number or fraction,

but also complex variables like objects that can contain a primitive like hungry, or list like inventory.

---

Though it is tempting to think of everything as a variable,

don't do that too much.

An object is a perfect and precise thing,

though it can contain a list, don't think of it as a singe unit, where you set it and forget it.

In the world of databases, in order to allow billions of records,

you really want to keep objects and lists separate, and load their data separately and treat each with respect.

The kind of thinking where you say I created a squirrel with a number expressing hunger and an inventory list that may hold a peanut is too simple,

and won't translate well to databases.

Just think of it as an object with properties, that also has a list called inventory,

not object with properties where one of the properties is a list, be respectful of data structures, keep them loosely coupled.

If everything becomes too tightly bound,

you will cut yourself off from easily speaking to simple databases.

---

Now that we have a world,

we know that the squirrel isn't doing anything.

It is just really hungry,

it is like world without anything going on.

So now we have to describe some action,

something that will cause a change.

If we were just writing a normal story in an essay,

we would first describe the world, and then what was going on in that world.

Same thing is happening here, but the two things STORY CONTEXT, and ACTION EVENT, must be kept separate,

and we have to be serious about this, because somewhere down the road we may add a new ACTION EVENT, that reuses the story so that we can test something else.

The STORY CONTEXT will stay the same,

we will only add an ACTION EVENT, or a hundred of them.

If we keep out BDD nice and tidy,

if we are keeping context separate from action, it will all be very easy to understand.

So in this ACTION EVENT,

we'll just make the squirrel simply notice the peanut, jump down from the tree, and put it in her little cheek.

And that is it, but this is a lot,

because now, the tree no longer contains the squirrel, the ground no longer contains the peanut, all kinds of things have changed.

---

So now we add the OUTCOME TEST,

this is what BDD, and all this crazy story writing is about.

We now describe the state of the things in the stuck-a-penut-in-her-cheek world,

and if the program does not behave the same way as the outcome, we know that it is unfinished or broken, and can send a programmer in here.

Our test of outcome must at least describe that the peanut and squirrel have moved,

that the squirrel is on the ground and the peanut, well, is in the squirrel, we don't care if cheeks or in her stomach, we don't care if the peanut is whole, or crunched up.

The little details are unimportant to our game,

nobody cares to test these details, nobody cares to pay programmers to test them.

Think of it as doing scientific research, and trying to figure out what the structure of DNA is,

if you come across another molecule, one that is not the point of your research, you just don't pay attention to it.

---

To give some structure to what is basically text,

BDD developers came up with a language that sort of everyone agrees on using.

Just to be precise of what is what, the story description starts with the word given, the action description starts with the word when, and the outcome description starts with the word then.

So, given, when, then,

given this type of a world, when this thing happens, then this stuff should be true.

When other programmers read your BDD they will be familiar with the Given, When, Then method of story writing,

and will continue playing along so that now you are going to be able to read any new tests they add.

---

Let us describe our squirrel story in BDD syntax now,

Given the world has squirrel in a tree

And the squirrel is really hungry

And there is a peanut on the ground

When the squirrel notices the peanut

Then the squirrel leaves the tree

And gets on the ground

And puts the peanut in her cheek

When the squirrel eats the peanut,

Then the squirrel is no longer really hungry.

Note how I added a second when, where the squirrel actually ate the peanut,

I actually reused the STORY CONTEXT, I just added a new action event.

Also note that I chain things with the word "And" as in:

the squirrel leaves the tree, AND gets on the ground, AND puts the peanut in her cheek.

This syntax exists for the purpose for keeping BDD programs simple,

dealing with English text is a difficult problem, but if we just patiently take that one extra step and use Given, When, Then, and And, it makes a world of difference.

I don't want to tell you this as not to mix anything up,

but personally, I kind of think of this syntax as a subset of English, one that is just used amongs us the programmers.

Yes,

you are a programmer now.

---

And now you may wish to ask,

well how the heck do I run this thing?

Is there a program?

and how will it know about squirrels?

---

You will have to write two programs to run the squirrel world,

first is the game that we are describing.

And the second, is a testing framework

where we will import the game, and pretend we are a player, while running the tests.

---

The types of games that deal with Squirrels, or Virtual Worlds for that matter, are called [MUD](https://www.youtube.com/watch?v=JqC66POqhY4)s,

or Multi User Dungeons, or Multi User Dungeons Object Oriented.

Writing a MUD is a fun way to learn programming,

you can probably do it in 20 lines of code, but you may actually fall in love with programming mini worlds, and grow them to a million lines of code.

If you are not into computer games,

then you should know a mud can be used to generate poetry.

For example imagine, that the world exists in a poet's mind,

and when the game is executed for real, the squirrel will examine its environment, while muttering something about leaves and trees,

and then rhyme something poetic about peanuts, hunger, and how they are crunchy.

Here is one such program called [limerick](https://github.com/fantasyui-com/limerick),

it took no effort to create it, it was just a lot of fun.

---

Once you write a tiny MUD,

then you create a program called test, and import your world as a module.

And begin executing the BDD tests,

you load up the story file we created, and just parse beginning with the first line:

"Given the world has squirrel in a tree."

You instruct your MUD to create a new world,

create a tree object,

create a squirrel object,

and then add the squirrel to tree.

Now you just move onto the second line,

"And the squirrel is really hungry"

so you set the hunger value of the squirrel object to 1,

or maybe energy value of squirrel to 0.01, meaning it is running out of energy and only food can restore it in context of this game.

And continue on,

when you develop your MUD you define plants, trees, animals, so it is really easy to just get them in here and set them up for the purpose of this test.

---

The way you parse a line of text, that you loaded from a file is kind of unusual in BDD systems,

what you want to do is create a tiny program precisely named after the line, so if the line changes the program becomes dissociated, it goes away.

The easiest way to associate a program with "Given the world has squirrel in a tree.",

is just creating a function or a file named after the slugged version of this sentence, to make a slug, is to lowercase everything and replace spaced with hyphens, simplify it.

Another way, is to use [regular expressions](https://www.youtube.com/watch?v=rhzKDrUiJVk), JavaScript has named capture groups now,

so regular expressions are much easier.

Here is an [example of a regular expression in the wild](https://github.com/hubotio/hubot-rules/blob/fba046d31771b1a3b296ac5e653e8c616bc19230/src/rules.js#L26),

parsing the sentence and variations of "What are the three laws?", see line number 26.

As you are learning programming,

do what feels right for you.

Personally, this would be where I'd take a moment to grok regex once and for all,

regular expressions are used on the Unix command line as well, so you'd be learning something that is useful in other places.

There are plenty of [Regular Expression Visualization Tools](https://regexr.com/),

so you can see how the matches are occurring.

If you don't feel right about learning regex,

don't do it, it is an acquired taste.

I think a lot of people just google [regex how do I match email address](https://www.google.com/search?q=regex+how+do+I+match+email+address),

and just go with the results until they start seeing patterns and finally take the plunge.

In terms of how frequently you use that kind of thing in programming,

not often, instead of matching something to recognize it, you really want to specify a type for the thing.

[Take a look at how I create pages of YouTube videos](https://github.com/catpea/warrior/blob/eec3d4779718a01db4c854f7f61bde6479ce0183/db/the-reverse-engineer/index.yaml#L5),

instead of searching for something that looks like a youtube id, which is costly in terms of CPU cycles...

I state "type: youtube",

and there is no question that the id that follows is a video id.

But when you are dealing with something like parsing English in a BDD line of text,

then regular expressions are worth the CPU cycles, and the trouble.

The thing that Regular Expression are used for in BDD statements,

is fishing out variables.

So when we say "And the squirrel is really hungry.",

the word "really" specifies how hungry the squirrel is.

Regular expressions really shine here if we have multiple things to match,

and now that Regular Expressions have named capture groups, you can actually see what a particular pattern is after.

---

Basically, once you take a bunch of JavaScript and node.js tutorials,

you are going to need some interesting ideas.

Writing your own WiliKiki is a great idea,

until you are finished writing.

To make it useful,

or even to make a business inspiration out of it, you have to make it do something useful.

To make it fascinating,

you have to open it to the world so that others can edit your program.

It is up to you to figure out how to bless that alien code,

look at he way software on github grows, when someone writes new code, it is sent to the program's owner as a request to merge code.

This way everything is submitted in small readable chunks,

and gets reviewed without much confusion.

Creating a text game, where thousands of people can edit the story,

and then enter the world and watch others solve the puzzles they created can be a fun little project.

Something more advanced and more business minded,

can be a WikiWiki that uses Tone.js to create a clone of the Leading Digital Workstation.

It is really difficult to write large programs by yourself,

but if you have thousands of contributors, some working for tips, for bounties, or big prizes then a large program can be made pretty quickly.

The issue of managing hundreds of thousands of tasks and thousands developers becomes greatly simplified,

when you use something like BDD, especially BDD that has been finely tuned to your program.

---

Programmers write programs for self education and fun,

but when it comes to large applications, learn from the success of the World Encyclopedia.

It is very difficult to inspire you to a program you may wish to create,

I can't really help you with dreaming it up.

But I can show you how to do it in such a way,

so that other programmers may join you for fun or some meaningful reward.

Whatever it is build it a page at a time,

combine WikiWiki with BDD, maybe MUD, and make the story more important than the code as demonstrated by [Literate programming](https://en.wikipedia.org/wiki/Literate_programming).

Programming is just another form of art,

just learn at the pace that fits you best, and in a sequence that matches what you already know, without anybody timing you or telling you what to learn.
