[Variables](https://www.youtube.com/watch?v=J0y6XXdm4KI), [functions](https://www.youtube.com/watch?v=bOkuPo5VbTg), [if statements](https://www.youtube.com/watch?v=IsG4Xd6LlsM), [loops](https://www.youtube.com/watch?v=6Hb0qZ3PVWI),\
and [objects](https://www.youtube.com/watch?v=X0ipw1k7ygU) to group variables and functions together into a structure that makes sense to you.

For example, my if(app.user.loggedIn()){app.navigation.signOutButton.visible = true}

---

So computer programming,\
is super simple.

If you stick to one programming language,\
like latest modern JavaScript it is even simpler.

Programming is just about variables that you define,\
which hold things that yo use, like serverAddress = “example.com”;

If statements that you use on your variables,\
like if user.loggedIn then redirect(‘/home’);

functions that you call,\
which most often return variables.

You usually create a lot of function for yourself,\
and they represent the shape of the program you are writing.

---

If you are building a virtual world or a [MUD](https://en.wikipedia.org/wiki/MUD),\
then you will have a function that says player.go(‘north’);

Or better yet, room.connect(‘north’, universe.createRoom(‘Bathroom’));

Many of the tiny functions come from your operating system,\
so like open(‘letter.txt’) is something that the programming language creators let you have.

It is a wrapper function, for the operating system’s,\
open file call.

The programming language it self will bring in a lot of functions,\
one of the coolest and most forbidden functions in JavaScript is eval().

It is often said that it is evil,\
so I am not going to tell you about it.

---

Some variables are actually groups of variables,\
groups are a big deal in programming.

You can use a group variable to store,\
a bunch of urls that you then download and convert to plain text.

This way you can simplify your news,\
and just get the plain text version.

If statements have a sister, that comes in useful here,\
and that is the loop.

Here you can say, I will loop over my list of urls,\
and call some functions like downloadUrl(), and then convertToText().

---

Functions can also be grouped,\
and that is where you hear this “dot” a lot.

It does not make sense to put functions in a sequence,\
like a list of news adresses for download...

So you throw them in a bag,\
like a generic group.

The word bag is something I just use here,\
to show you that it is just this generic thing.

And this would just be another variable,\
in your program.

The correct name for bag or generic group,\
is object.

---

Things get pretty fuzzy here,\
because why stop at putting functions in a bag...

Why not say:\
user.name = “Alice”;

The dot actually comes from the world of\
Object Oriented Programming.

In JavaScript you can have a ban like object,\
where you don’t have to define it first or create a new instance of.

But that is just the short hand notation,\
for the underlying object.

---

And you would want to use it so that you can have two variables names user1 and user2,\
and user1 can be alice, and user2 can be bob - without overriding anything.

A more realistic example is where,\
you have a list of users like in a spreadsheet, which is what a database is.

In a spreadsheet your data automatically updates,\
in a database, you create lots and lots of sheets and then join some of them when needed.

Here rather than thinking sheets,\
you think in rows of data, where each row represents a user.

Often people go extra step,\
and setup a useful user object for each row.

You can have a databaseRows.find(‘username’, ‘alice’);\
which then returns a user object that would have some useful functions.

So databaseRows, for more often database.query(),\
fills the user object out for you.

---

If you were programming a MUD, or a virtual world,\
you would define an object named room.

And then dream up what your room objects should be about,\
do you want your rooms to have a .go() function which moves the player through some door.

Or do you want your user to have a user.go() function,\
what sounds better for you?

What if you want to move a chair,\
do you want to write a go function for a chair.

Or move function for the room,\
or an inventory bag or object, that you attach to the user.

Where they can put their chair in their inventory,\
then say player.go(‘living room’), and player.inventory.drop(‘chair’)?

---

Building out Objects with functions,\
can be like building a universe.

---

So objects and lists, are like a higher level grouping mechanism,\
for variables and functions.

Where functions can call other functions,\
often based on if statements testing some variable,

And if you do have a list then you use a loop,\
to apply some function to each of the items in the list.

And often in that function you have lots of if statements,\
and call other functions, maybe do some more looping.

---

There is this funny thing where people call HTML a programming language,\
technically it isn’t, but those people don’t usually understand why.

So HTML has these nested tags, and each tag can have attributes,\
and in most cases you close the tag.

So all this actually represents a hierarchy of objects,\
all the tags have corresponding object, and tag attributes are applied to those objects.

You could create a tag named user,\
with attributes name and email.

But the reason why HTML is not a programming language,\
is that it is used to create a deeply nested hierarchy of variables.

It is just like the variable creation part of a language,\
converting tags to objects my be sometimes called hydration.

Because tags in their text form,\
are like this dehydrated object hierarchy.

---

Inventions like [svelte](https://svelte.dev/) mix logic and loops with HTML,\
so svelte’s markup is almost almost a language.

It is a [templating language](https://www.youtube.com/watch?v=4HuAnM6b2d8), because templating HTML,\
is not really thought of as programming, templating often does not understand tags and sees text instead.

---

If you are going to learn a language learn JavaScript,\
because it helps you program windowed applications with electron, on the server with node.js, and in the browser alongside HTML and SVG.

HTML allows you to include a code editor in your program,\
and SVG and canvas allow you to manipulate graphics, including [3D graphics](https://threejs.org/).

To pull in all those technologies together in C, Java, or Python, or PHP,\
may not only represent a lot of work, but outdated or old libraries.

---

As to whether or not you should consider learning programming,\
knowing programming is like having a smartphone, it is the new standard.

All the young people will eventually know it,\
but the previous generations still can be [Hip Hop!](https://www.youtube.com/watch?v=lFdnQlA4ucM), without the damn thing.
