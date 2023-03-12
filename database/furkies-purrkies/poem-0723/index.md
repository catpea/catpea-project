---
id: poem-0723
guid: 55f8bb23-7aa7-4071-b6e5-5c0be56e8bdb
title: 'A Programmer''s Poem: ORM, REST, OPSEC, MOO, And A Scary Smelly Grue'
description: null
tags:
  - furkies-purrkies
date: '2022-02-21T21:00:23.402Z'
lastmod: null
weight: 72300
audio: poetry-0723.mp3
image: poetry-0723-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/QuP5RL_E5oE
resources: null
features: {}
draft: false
chapter: 4
---

You know how down at the CPU level,\
you have talk in ones and zeros, XOR and AND.

We created a nicer languages above that,\
like C, where you can nest functions.

You can have an UPSERT function,\
that contains INSERT or UPDATE functions.

If data in whatever the program is using is missing,\
then we INSERT, and if it already there then we UPDATE.

So UPSERT encompasses multiple functions,\
and it is pretty readable.

Now, on C level,\
we have to define things.

You can't just say, name = alice,\
you have to define a name array, and remember a string terminator.

To store the five letter name Alice,\
you need an array of six characters, for the name and a string terminator character.

It is a good language,\
but we invented better.

We have languages where we can just say name = alice,\
and everything will be taken care of for us.

Even better than that,\
we have languages where you can say name = evaluate name - alice; return name

This is called an eval statement,\
and everyone is scared of it, becasue you are running code inside code.

Though you never use it in production,\
eval is a sign of a healthy language.

If a language prevents you from evaluating code,\
then it is a language for cubicle workers, crafted to control the coders.

JavaScript is a very free language,\
it will let you add a number to a letter.

And will probably return the sum of the number and ASCII code of the letter,\
but it may also try to concatenate, or who cares.

This language does not try to control you,\
it will let you do whatever the heck you want.

Even if it is crazy,\
like adding letters to numbers, which is also crazy awesome.

And a sign,\
that corporate has not meddled with the language standard.

Once some big corporation steps in,\
they will strip the language of easy mistakes.

Load it up on computers,\
give it to all the High Schools.

Wait for them to graduate college,\
and then charge them for the enterprise version.

Or for business use,\
or for business license.

Or cancel the language,\
because they have something that will generate more profits.

---

You have to stick with the rebel languages,\
that is what everyone else will be going.

Unless they got trapped in a cubicle,\
then they will spout how evil eval is.

Because in order to believe that their walled language is good,\
they will fight to make all the other languages look bad.

---

Now, there is another bump here,\
because the web browser is not only awesome and very popular.

But powerful enough to let you build a code editor,\
it means you can edit code in a web browser, and not need a code editor.

Java is slow and bulky for no reason,\
Web browser is slow and bulky for beautiful reasons.

Which also means,\
JavaScript.

There was a time when it was unwise to use JavaScript on the server,\
it was possible but unwise, as it was young and slow.

We had Perl and PHP,\
while Microsoft was murdering their once pretty languages for something they felt was better.

It was actually different,\
not better - but people who do Microsoft, will absolutely attack me for saying this.

Though they may notice, by now, that Microsoft killed IE,\
that Visual Studio Code uses a browser, probably chrome, but I don't care, corporate will make mistakes, it is what they do.

---

Perl is beautiful,\
writing Perl it is like making jewelry, it makes OOP look ugly.

PHP is useful, full of libraries,\
and its OOP looks pretty, it flows like water, it is good for you.

But the moment Node came out,\
which is JavaScript for the server.

All non JavaScript languages,\
kind of became outdated, and certainly became outdated in context of the web.

---

Because, you can now have code in the same language,\
in the browser, and on the server.

Which is to say, if you write your server code in PHP,\
and your browser code in JavaScript - you are just weird.

Like, why would you want to re-create your objects,\
in some other language.

People were shocked when I brought this up,\
as in - how dare I tell them what language to use.

I was merely telling them,\
the truth.

Same language, client and server,\
and it just happens to be a language that is not babysitting cubicle workers.

It has eval,\
and it lets yo add letters to numbers, this is a sign of a healthy language.

---

Now of course, Microsoft came in and made their own version,\
guess what feature they added?

Yeah, the whole count letters of your name thing,\
they laced JavaScript with strong typing.

Meaning you have to define the type of your variable,\
they say "Oh it is just JavaScript".

But it is actually cubicle worker cool aid,\
the typing is there to make the code editors pretend to be useful.

The variable type information,\
will allow for fancy drop-down, and a measure of error checking.

If this was 1995,\
it would be, neat to look at, though probably not actually use it, unless you had to.

This language is called TypeScript,\
as in Data Typed JavaScript.

And to me it is hilarious, as it is a step backwards to make their programmers brain-less,\
as in think less about things they are doing.

So JavaScript is still fine,\
they just modified it to make their own thing.

There was briefly a flash of CoffeScript,\
a JavaScript alternative.

Though TypeScript will last much longer because of all the money it makes,\
it will eventually fade away like CoffeScript did.

Who needs a branch of JavaScript,\
follow the eval statement, as corporate will always destroy the language to make profits and get raises.

That's what corporate is for,\
profits, not languages.

---

But JavaScript is still not good enough,\
there is something better.

Though this time,\
that something better is written in JavaScript, it is a JavaScript pattern.

---

And here I have to mention Databases,\
we can't use files.

Because as far as multiple users poking at the keyboard at the same time,\
files live in the world of adding numbers to letters.

There is no good answer to who saves first,\
files are for single users sitting at the computer.

You can use mutually exclusive locks,\
or folders named as the files, with versioned GUID named real files, that need manual version conflict resolution.

But if you can't just save a file - simply,\
just let it go, use the database.

---

Database use tables,\
a table is like a spreadsheet.

You add rows to a table,\
each row has cells.

And a type, have a good reason to need type information,\
they aim to be efficient.

So you define the username column to be short text,\
and if you have a description column, you define it to be reasonably long.

There will be an error if you try to add a row,\
that has a username, that is too long.

That is why websites sometimes tell you,\
this field cannot be longer than 255 characters.

YouTube for example has a 5,000 letter video description field in their database,\
and I will need to cut this poem shorter to paste it there.

---

You see a divergence here,\
moment ago we had JavaScript where Microsoft disgraced it self by making a copy of it with data type limits to make their IDE IntelliSense nonsense work better.

But now we are adding databases,\
that have limits.

We are adding it for a good reason,\
safe storage of data - that is a very good reason - compared to making debugging less crappy in TypeScript.

In fact a language without a good connection to a database,\
is not that good.

And manually communicating with a database,\
like we used to in Perl days, was ugly, and for many, caused security issues - SQL injections.

---

Now we have this thing called ORM in a language as wild as server side JavaScript,\
what ORM does is let us use JavaScript Objects, very simple and pretty things, to hide the database stuff away.

What ORM stand for is mangled English,\
ORM translates cute JavaScript to database table, without yo needing to think about it too much.

So you just make an object like User,\
say user.name = "alice", user.email = "alice at example.com" and then user.save() and it is saved in the database table called users.

ORM also lets you create relationships between such objects,\
so you can say Alice has many articles she published.

And in a table, called articles, you will find, alices userID,\
along with all the other id/s of users.

And the alice object, will be smart enough,\
to only give you articles with Alice's id, when yo ask for it.

There is a Relational Database, behind this object,\
and we establish a relationship between user and article, a oneToMany relationship to be precise, but this is completely abstracted away with our sweet javascript.

By the way, this relationship is called a JOIN,\
as we JOIN two database tables on UserID, the user ID in Users table, and User ID, in the Articles table.

But you don't have to think about it,\
because ORM loves you - and it takes good care of you.

---

But we need more,\
oh yes.

Because all of this is happening on the server,\
and we need to bring this stuff safely into the browser.

So on top of ORM,\
we have to add REST.

I won't tell yo what REST stands it is just more mangled English,\
people being cutsy with words.

It is a technology related to the URL,\
in your address bar, all those slashes.

This technology,\
is good for working with ORM.

Because we can have a user/1,\
and this will give us alice, as she happens to be the first user.

We can also say, user/1/article/1,\
and that will give us the first article she published.

We can get more creative here,\
and there is a good way to expose ORM information under REST, and a questionably creative way - which can be beautiful.

The best way, however,\
is an automatic way.

So here, you are just creating your Objects,\
that automatically take care of the database.

And you automatically,\
get all of that stuff exposed as paths, in the URL.

For free, you get your databases taken care of,\
and your website exposes all those objects automatically and uniformly.

---

See, you don't need a better IDE,\
you just need a better IDEA - ha ha... where stuff can't get broken.

---

But we need more,\
because we can't just expose all the users to the internet.

---

We need to give users abilities,\
the way they can have articles.

One ability they always get,\
is updating their address filed.

Though, they are not quite allowed to update their e-mail address,\
because that needs to go through a verification process.

We want to send an email to the old account,\
just in case someone forgot to log out on a public computer, and hopefully they don't have their email open as well.

We also want to make sure the new email,\
is correct, and the user can click on a unique URL we send them.

---

And of course yo can already tell,\
things are breaking down for us.

They are no longer automatic,\
different things need different things.

Yeah we can account for all the variations,\
and group them, but again, we end up with questionable complexity.

Some very smart people,\
don't want you to have a password.

One smart cat, decided yo shouldn't have a password,\
that he will only store your email.

And to log in,\
you just enter your email, he will send yo a link...

And when yo click it,\
you will be logged in.

As a result,\
you can't forget your password, because yo don't have one.

---

That is a crazy unique dynamic,\
and it is so unique that it is hard to generalize it and classify it in a uniform way.

It is hard to abstract,\
without rewriting code.

If bob chooses not to have a password,\
then he can't have an update your password box in his profile.

That means you have to go in there and code that exception in,\
that one and a hundred others.

We had this wonderful JavaScript, ORM, REST and Objects and URL paths experience,\
and now it is an explosion of User Interface complexity.

And workflows, because, bob is not who he says he is, at all,\
[his real name is Mallory, and no, he does not belong to a don't leak all the internal repos red team, Mallory is Malicious](https://www.youtube.com/watch?v=zFLz70eQ9VI).

He will try to change the password,\
even though he is password-less, and one thousand other things, and one of them, will gran him remote code execution.

And that one thing,\
is always obscured by the explosion of complexity.

We will SOMEWHAT remember to disable the change your password UI,\
for password less users...

But will we remember to code a system,\
that prevents the submission of the form if Mallory re-enables the UI, based on research from one of his other accounts.

Yes, having the ability to change the password field, may not get anything hacked,\
but it is proof that the system has failed.

It is inconsistent,\
the abstractions are leaking.

Mallory is already telling tech support he never enabled password less,\
will this escalate his privileges.

Yes, how, red herring,\
his problem is fixed, he can login like before, but there is just one more problem he needs help with...

He needs a solution for,\
and now that he praised tech support, and tech support gets a little problem fixed happy smiley face.

Tech support likes Mallory,\
tech support will not think twice to click the link that Mallory just sent.

Tech support want to help,\
[and your business just ended up on List of data breaches on WikiPedia 14,870,304 users, all your customers leaked by helpful tech support being fed a red herring](https://en.wikipedia.org/wiki/List_of_data_breaches).

---

At this point we could almost forgive Microsoft for creating TypeScript,\
because we could use a little breadcrumb path to at least mangle our cute automatic REST to STOP allowing password change for password less users...

Just in case it is used as a red herring,\
in a fast paces cheerful and feel good dance of privilege escalation in Bangalore.

---

This is why you need to become a programmer,\
if yo start in High School, yo will surely invent a consistent automatic system that prevents the leakage of abstractions.

We don't need a better IDE or more typed languages with IntelliSense,\
we need you.

---

Because to you,\
this is a game.

And the game is the solution,\
Multi User Dungeons Object Oriented to be precise, [MOO](https://www.youtube.com/watch?v=QBnXvtR1qBw) and [MUD](https://www.youtube.com/watch?v=QzvqSVgc2t4)

You see, REST is good, but WikiWiki teaches us,\
the power of consistency.

What if we just had Locations,\
like WikiPedia has articles.

If you are allowed to cross the pathway,\
into a location, because you have a password key, then you can update your password.

If you don't have this feature in your inventory,\
then you can't access that location.

TO be clear I am describing a tiny mechanism that builds on top of ORM,\
and though it has paths, those are not RESTFUL paths, they are of the Dungeon World.

They are an anthropomorphized world of objects,\
and it is tiny and efficient, nothing at all like some bloated VR world.

Rails, [strapi](https://github.com/strapi/strapi), or Cake even is all the proof that Objects and Properties can be defined with a normal User Interface,\
ORM objects can be built by non-programmers.

If MUD can replace the paths of REST and make them more secure,\
then then company you invent can allow for Web Application programming, to people who hate code.

Not because they can't program, or don't want to learn,\
but because they can sense that it is the old way - that better abstractions can be had.

Like programming web applications,\
through a kind of a game.

Oh, sure is sounds goofy,\
you are walking around dungeons after all.

But if Mallory touches that password door,

without the correct key in his inventory, he gets eaten by a [Grue](https://www.youtube.com/watch?v=f4ZVzl_H_2w).

Maybe we need to consider, that pretending abstractions are not leaky is goofy,\
and that using an intelligent system that resembles the mechanics of a real world isn't goofy.

You are looking at highly sophisticated security systems,\
that are as easy to comprehend for a human as using a key to inlock a door, or check out an article from the user's home library.

It may even be the key of strong AI,\
that can improve it self - because why stop here?

Anyways, when you have a Grue on your blue team,\
that consistently chomps red team members, the world becomes a much happier place.

For those of you struggling to come up with a name for this new and groundgreaking technology, I offer:\
Complete And Thorough Protective Electronic Armor, or C.A.T.P.E.A. for short.
