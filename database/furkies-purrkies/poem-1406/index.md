---
id: poem-1406
guid: 9a9fcd69-a9f1-4c5a-99b3-e7bc69e7e42b
title: Easy Introduction To Programming; And, Reactive Programming Explained (Recording in progress, lol)
description: null
tags:
  - furkies-purrkies
date: '2024-01-07T06:09:41.758Z'
lastmod: null
weight: 140600
audio:
image: poem-1406-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: false
raw: true
draft: false
chapter: 8
---

Easy Introduction To Programming; And, Reactive Programming Explained

I recently quoted a young programmer stating,
“coding is basically just ifs and for loops.”.

And that is true, it is also functions,
which is kind of the base reality of programming.

But, you can add stuff beyond that,
but let us start in the beginning.

---

All programming languages, are caculators,
where you can say ```const result = 1+1;```

And result variable will hold the value of 2,
to display the contents of result, like in a calculator…

You have to say:
print result.

A variable is just a way of saving things,
a variable stores variable content.

---

I am sorry to say that different languages,
have different ways of printing things, and print to different things.

If you wanted to print something to a debug console,
that you can open in a web browser with SHIFT+CTRIL+I.

You would say console.log(result); ENTER,
or you can just say console.log(1+1) and that will print 2 as well.

Now if you wanted to print to the web page that is currently open,
you would say document.body.textContent = 1+1 (which would just show number 2 in the entire window)

So there is no one way printing things,
it depends on context.

---

Everything in programming is like that,
it is about what are you trying to do?

If we wanted to create a calculator with a print function,
that prints to the web page.

We would simply say:
function print(input){document.body.textContent = input}

And we could print numbers,
all day;

---

So in the beginning we can add,
but to do anything beyond that, we need functions.

And I say, if you don’t have one,
the first thing you should away do is to create a print function.

Where it will be printing,
depends on what you are doing.

---

Functions,
abstract and automate.

We have more than just numbers in a programming language,
we also have groups, never use the word group.

No one calls it that,
but for us the normal people arrays, strings, and objects are just groups.

Arrays are a way to hold multiple things under one name,
strings are pretty much arrays of letters.

Languages use a lot of good ideas, to be useful,
so it is best to think of strings as being for text, and having little to do with arrays.

So we are moving up the abstraction ladder,
from numbers, to lists of numbers, and now strings.

By extension, we can now have lists of strings, numbers, functions,
and finally, there is one more grouping thing, called an object.

Objects are not lists,
object name things, rather than keep them in a sequence.

So you can say someObject.someName = “Alice”,
or myCalculator.result = 1+1;

You can get stuff out of a list by number,
it is called an index number.

But it is better to use objects,
and then retrieve things by name.

Here, we finally arrive at “coding is basically just ifs and for loops.”,
so we covered the stuff that this quote glosses over.

Calculations, variables to remember them, functions to simplify stuff,
arrays to hold sequential lists of variables, strings to hold text.

And objects, to group things,
under some name.

And by thing I mean, everything we learned so far,
variables, functions, arrays, strings, other objects, arrays of objects, and functions, and more.

So you see, how we are enhancing out abilities,
we started with 1+1, but now have lists of objects that can have objects with names of maybe lists of other stuff.

When we say result = 1+1;
we execute a statement, in time, or in a sequence;

This is where ifs come in,
we can now say if(result > 0){
	print(result)
}else{
	print(“ERROR: Something has ran afoul”);
}

And you bet your fanny,
you can nest if statements.

So now we explode, in multiple directions in a program,
depending on some variable, some parts of you program, many never run.

See, you are now controlling a machine,
you are a wizard.

But there is one more thing we need to upgrade our ability,
because arrays are no good if you just refer to items inside them by number.

Arrays then are just objects,
with stupid names, like 0, 1, 2, 3.

So we need those loops,
a for loop is just one of many kinds of loops, it is the most verbose and flexible.

With loops we can say for every person object in the array of people,
execute some ifs and functions.

This is the base layer of programming,
you can make solid programs here.

The longer you stay on this level of abstraction,
the more of a code poet you become.

You invent state machines, strange chat-bots like ELIZA,
multi-user dungeons, and just thrive in the world of text.

---

There is much more to it,
but it is harder to explain, as you have to use strange new words.

For example, objects are more than ways of grouping named variables,
though this is an important explanation of objects.

Objects model things with properties,
and since they can nest other objects.

They can model the world,
or processes, they abstract things.

An object has two modes of existence,
as a description of something, a specification of it.

And as an instance,
once it has been instantiated with the “new” keyword.

And the reason why you want instances,
is to have multiple instances of the same objects.

An instance of a calculator that writes to the web page,
and an instance of a calculator that writes to the developer console.

Now you can add stuff,
and print it in multiple places.

A more sane example of multiple instances,
is a File object that groups file related operations.

You can have multiple files represented,
by the same File object, by just instantiating the File object with a different path.

Files, are a very primitive concept,
you have to keep track of file handles, and modes, like read or write, or append.

They are a great candidate for being abstracted,
with an Object that has useful funcions.

My favorite abstraction of a File,
is the now [ancient ActionScript File Object][1].

Every file you opened had a .desktopDirectory property,
it seems like overkill, and pretty strange.

But that would change based on what operating system you used,
and it was right there in the file object, you didn’t have to ask anything else.

---

And I think the finest example of Object use,
is Component Based User Interfaces.

That just means you are creating a world of Objects,
such as Window, Button, and even Draggable and Selectable.

And you can say, myProgram = new Window();
const calculate = new Button()
myProgram.add(calculate)
and calculate.onClick = funcion(){print(1+1)};

So you see how you have an .add function,
where you can add a button to a Window.

That is all you need, to build massive user interfaces,
with menus, panes, tabs, slide out consoles, and embedded browsers.

Window add menu,
for every menuItem in list of menu items menu add menuItem.

I think web design greatly benefits,
from this type of abstraction, but I seem to be in the minority.

I personally see [new Dojo][2] as being superior to React and now the Ru[i]ned Svelte,
tidy Object based component architectures are just more friendly.

---

Now, that we have covered ifs and loops,
and tasted the strange vocabularies with words like instance.

Which at my old job, earned me the nickname “Buzzword Boy”,
and made my idiot co-workers create a web age with my really fat face on it.

And just recently had me ban a user,
who lost his tits assuming I am just speaking in tongues, still too scary to be funnny.

Let us finally, get to the adventure part,
and blow some professional programmer minds.

---

There is something crazy you can do with Objects,
and a lot of programmers either don’t understand that yet, or more likely are freaked out by it.

One of the leading programmers said,
that he made JavaScript reactive, but that is only correct in the context of funcions, kind of.

In the broader context that includes JavaScript OOP programming,
there has been this beautiful little thing.

And I’ll demonstrate it, with the X of a User Interface component tree,
where the x is part of the x and y coordinate system.

But at the same time I also want to give you a preview of it,
so that you know this is not just some boring x to be used in geometry calculations.

Beyond object instantiation, you also want to hoist yourself up,
to using .start() and .stop() in your components.

This helps to let your components to for example,
stop listening to the mouse, when you remove the component form a UI.

Every time you say on click do something,
you need to add a mouse listener...

and you better remove it,
when you get rid of that something.

When for example moving to the next step in a form,
you must remove the listeners from the previous user interface.

A stop() is just the reality,
of cool cats working with the mouse.

If you just leave your listens laying around,
the mouse will eventually get ya.

---

That means, your component,
once instantiated is in a stopped mode.

Or more usefully component.started=false,
mode.

Before you start a User Interface component,
it won’t be displaying anything in the browser.

So if you try to make it draggable,
everything will crash, because you didn’t create anything that can be dragged yet.

The component hasn’t started,
yet.

---

By using a getter and a setter,
that divides the act of assigning to an object property.

We can create a cute little system,
that notifies things when the .started property changes.

So you say observe(started, andDosomething),
where andDosomething is a function that will be given the latest value of started.

And this is the cool part, any time you started=true or started=false,
[and]Dosomething will be automatically executed, with that value.

So all you are saying is .started=true,
and all the observers will start dong their stuff, bringing your component to life.

When moving to the next step in a form,
inside your .stop() you just say .started = false…

And whatever is still listening to that,
will know, it is no loner needed and must clean up after it self.

Now let me show you how the x works,
and then you can go get a drink of water.

To move a window all the way to the left,
you just say window.x = 0;

No crazy function calls, no calling refresh(),
ore remain, you just assign a number to the x.

And the window will react,
as the x notifies all of its observers.

By going an extra step beyond start and stop,
and making the properties of an observable.

You almost, almost, almost pretty much, go back,
all the way to the begging of the language, where we just assign 1+1 to result.

Reactive programming, hides almost everything,
and when you consider, that objects are a programmer interface…

That actually make the programming better,
reactive assignments, make programming accessible to novice users.

And the code, so readable, to programmers,
that they won’t ever want to go back to the non reactive world.

The non-reactive world,
won’t let them request operations out of sequence.

They have to wait, until a component produces elements,
that the mouse can then listen to.

In the reactive world,
things just work in sequence, without any strange syntax at all.

[1]: https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/filesystem/File.html
[2]: https://dojo.io/
