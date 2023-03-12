---
id: poem-0418
guid: a0fdfc78-1227-45d9-93a9-64569de80cd3
title: Learning To Learn
description: null
tags:
  - furkies-purrkies
date: '2021-04-23T01:44:09.117Z'
lastmod: null
weight: 41800
audio: poetry-0418.mp3
image: poetry-0418-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/I-SoYkFjVI0
resources: []
features: {}
draft: false
chapter: 2
---

Learning is like climbing a mountain,

there are no shortcuts, and you have to go step by step.

And it is also like putting a computer together,

or wiring a home entertainment center, you can't leave something out.

It is also like learning just a little bit about ice skating,

you really need to carefully step on that ice and see what it feels like.

Learning for real, is the same as having fun,

being fascinated about what you are doing, enjoying it.

Finally, learning for real is also about long term achievement,

like section hiking the Appalachian Trail over many decades...

...and then arriving at Mount Katahdin, come your golden age;

it is about making a difference, and becoming better for it, adding to greater whole.

---

When we go to school, and we end up thinking,

if I jump through these hoops I will graduate and then I'll figure the next step.

The strong sequence, the integrated whole, becomes a wet rag,

the aim becomes a carrot on a stick, things become unclear, but we keep going.

It is OK to make this mistake,

so as long as we learn from it.

So as long as we learn,

and prevent others from being taken advantage of the same way.

Begin asking questions about education,

don't just sit there memorizing disconnected facts, demand a real education.

---

We all have computers now,

we should all learn about programming.

We need to know that a [function](https://www.youtube.com/watch?v=N8ap4k_1QEQ) takes an input,

transforms it, often by calling other functions, and return an output, output = function(input);

We need to know what a [loop](https://www.youtube.com/watch?v=s9wW2PpJsmQ) is,

that it often processes a list of items, one at a time, calling functions with the item as input.

For example, for every user in a list,

if membership expires soon on this user, then send warning message for this user.

Programming, is so simple,

that it only takes a few days to learn.

You have to do it right,

that is what schools were meant to help us with.

---

For example, YOU NEVER, EVER, EVER, EVER, start by just creating a file,

and then configuring things, NO, you start with a [boilerplate](https://github.com/electron/electron-quick-start).

Only later, when you have time to waste,

you go and read the darn [manual or guide](https://www.electronjs.org/docs/tutorial/quick-start).

I am actually serious about this,

the manual will never tell you what the most important parts are relative to your use case.

If you just need a window with a blank canvas,

for a little 50 line wiki that helps you study, you don't need to worry about drop downs, or icon sizes.

You will return many times to the things that are useful,

and with each use case, you will learn a new way of using the program, that is far more than any documentation can explain.

---

Another huge deal, is the language you start with,

I know many programming languages but I don't use them, some are too old, but in most cases they just do things badly and are too small.

The language you choose must be the one getting the most stress, attention, and hate,

because to hate a language is to admit to have learned the wrong one.

Today that language is [ES2021](https://www.youtube.com/watch?v=6VYpMxA4Q1k),

it is the evolution of [JavaScript](https://www.youtube.com/watch?v=afSbBjAaqeM), the language behind all the web applications, that also runs on the server via [node.js](https://www.youtube.com/watch?v=uVwtVBpw7RQ).

There are some strong side languages that are worth considering venturing into,

but just bookmark them and forget it.

You need to learn language that will help you create cute little command line programs, mighty web apps,

quick and dirty web servers that never complain under real stress, and desktop applications, including powerful code editors.

Above all, it all needs to be cross platform,

so that you never have to worry about rewriting your program for a different operating system.

---

To learn something, we need really competent teachers,

who learned what they know not from textbooks, but from experience.

If it is not possible to have good teachers,

then it is more important to lean on your own first, and then go to school to get the diploma.

If the school isn't teaching then you are not going to learn anything,

you are only going to learn something that isn't even all that useful.

---

In closing, I would like to share with you, the most ridiculous and tiny little programming thing I have ever learned,

this is from a manual of a program unlikely to be taught in any school, the program is called [CouchDB](https://www.youtube.com/watch?v=nlqv9Np3iAU).

It is just a little tidbit,

that jumped out at me, and I've been using it like clay in my own code experiments.

When working on the web not only do you have multiple people saving data at the same time,

but also multiple instances of your program handling the traffic, usually one per CPU core.

People normally just use a database a program that is far and away,

and is designed to handle multiple connections.

But to me that adds extra complexity,

I once had MySQL database go down for no reason at all, the server was offline, perfectly configured, indexed with quality SQL, and there was nothing in the logs.

At that point I was doing simple data gathering for a prestigious institution,

and the reason I used a proper database, is to avoid things getting broken like this without explanation.

In that moment I promised myself to play with files a little bit more,

I wanted to find a way to save a file under the stress of multiple simultaneous connections.

Years later reading up on CouchDB, the way they stored their records,

made me jump, it was both suspicions and lovely.

I invented my own tiny theory about it,

a demand that no matter what happens, information must always be stored on disk, and as soon as it is possible.

If you have many users trying to update some common piece of information,

such as the profile of a school, the chances of one overriding the other are very high.

Inspired by Couch, I create a directory, named after the file I want to save,

and then as people try to save that file, I store their information in a randomly named file inside the directory.

The first and foremost, is that all data, from all users and processes is saved,

it can never be lost, every file that I save in that directory has a long random file name that is guaranteed to be unique.

Even if Alice and Bob, save Manhattan International High School Profile at the same time,

the server records their information in two different files, no data is lost.

The filenames also contain version numbers, it is possible to track conflicts,

the system can now flag when two people saved at the same time.

But more than that, the really cool part is that many servers storing files this way,

can synchronize together, as the files are always uniquely named, so thousand servers can keep in sync tracking all changes, marking wherever there are edit conflicts.

People saving data can see conflicts,

and resolve them as they make their updates.

I don't want to write too much about the details of this program,

but a conflict occurs when both Alice and Bob edit version 10 of the Manhattan International High School Profile, hit save at the same time, and call it a day.

That means that two versions 11 exist, no data is lost, but the person in charge of school profiles will see a red flag,

and may investigate, and mark one of the files as deleted.

Another notable thing is that if nobody cares to resolve the conflict,

there is this crazy way of deciding which version 11 is going to be used.

You know how those files are randomly named,

the conflicting files are sorted alphanumerically and the first one wins.

It is an arbitrary election mechanism,

but no matter the circumstance, CPU core, user, or server, it is an arbitrary but consistent election process, that always returns the same winner.

---

What I describe here,

is saving a file.

I have a feeling that only practicing and learning on your own,

will make you sensitive, or maybe even passionate about such little gems.

Even if this ever made it to a test,

how is marking that correctly on a multiple choice exam, or even even making a fake little homework program going to emphasize this as special.

And before any pro complains about using this in production,

this is a useful data backup mechanism, that should be used along side a proper database.

---

Learning for real is an adventure,

you make fascinating discoveries in your travel.

It is better to learn on your own and then go to school to graduate,

if you still wan to.

Learning for real will also make you happy,

I enjoy experimenting with different variations of the CouchDB inspired file saving mechanism.

Visualizing data being saved without any obstruction, if statement or error,

sure makes for a fun programming session.

In school we get stressed out about passing the exams,

or trying to graduate in half the time to save money, and that is no way to learn.

That is not how a Student should be treated,

a Student represents the future of humanity, they should be treated with great dignity and respect.

I think time has come to view schools that charge for education, and companies that require a diploma,

as institutions that have little talent, will eventually either lose credibility, or just go out of business.

What does a company that demands a diploma say,

about its stability and your retirement plan, what does it say about the talent that you will encounter there.

Will your co-workers be passionate about making cute little file saving discoveries,

or is it all going to be about profit maximization and promotions.

---

Once you retire,

the real work starts.

You now enter an age where you are experienced enough to make lasting contributions,

to leave an inspired and meaningful legacy.

And at this stage in your life,

having learned for real, becomes even more important, as you rely on it, to become a Great Being.
