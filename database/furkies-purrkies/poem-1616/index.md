---
id: poem-1616
guid: 9976d56f-8fe3-4a02-ae04-899a85c5f61e
title: Programming Data Structures; Or, Inventing A Machine That Is Already Old And Wrong
description: null
tags:
  - furkies-purrkies
date: '2024-08-04T03:28:51.080Z'
lastmod: null
weight: 161600
audio: poem-1616.mp3
image: poem-1616-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 10
---

I recall some expert giving his opinion on the work of a young researcher,
that went something like:

“All the new breakthroughs they claimed to have made are old,
and everything else has already been proven wrong.”

I think this is lovely,
and I am sure the expert was wrong, and off his head.

And the loveliness comes from the fact that the young researcher,
was independently re-inventing things.

Becoming as wise as the original inventors,
and becoming able to see all the paths they didn’t take.

The old guy was wrong,
the young researcher probably changed the world.

---

Lets jump right into it, as the introduction would take hours,
and I primary want you to know what a data structure feels like.

So, programmers have variables of type number and text (called strings of letters),
and then many of them don’t realize they have bucket variables.

Those are objects and lists (called arrays),
and I call them buckets, because they can hold other variables of any type.

In low level programming languages like C a string variable is almost a bucket,
because it is an array of numbers that represent letters.

But we are working with JavaScript, on a higher level,
where we can just put some text in quotes and we get a string variable.

Not some array,
of whatever.

---

Now this being the modern world,
we want arrays to announce when they change.

This is why we are using a High Level language,
we don’t want to be tripping over type definitions and low level concepts.

Because what we are doing is already messy,
lets say our array holds a list of people.

And that list can be updated by the server,
or from the user interface.

There are many crazy ways that programmers try to tame this,
event emitters with wildcards, immutable data structures, alcohol.

But we want to be revolutionary,
our array will emit a singe message when something is added or removed.

It will tell all the things interested in it,
I changed.

If we tracked added or removed, which seems efficient,
our user interface would need to do two different things.

But we are not going to be efficient, and send out only a notification of change,
and that will mean our user interface will have to re-run it self to update.

There is room for optimization here,
because our list will always mark entries with a unique ID.

So when the UI is re-rendering, it can compare ID numbers,
and see what has been removed or added.

But computers are fast, and we want to keep our code clean,
and encourage our coder to use a templating engine like Svelte.

Which will look at the ID,
and automatically optimize re-rendering of the UI.

---

Now when we add or remove person,
the array announces I changed.

Lets us call our array a table,
to make it sound special and friendly.

And give our table columns for integrity,
id, first, last, age.

We want to keep the same ID at all times,
but first last and age __can__ change.

And just like with the array, we want to emit a single message,
I changed.

We are not going to emit, filed empty, or error in filed,
just changed.

So with three users in our table,
we have 12 fields, containing id, first, last, age.

The id field does not support changes,
so we only have nine fields that announce their updates.

---

And all of them just emit,
changed.

---

Lets say we have Alice Smith, 101, Bob Smith, 99, and Carol Smith, 50,
where the number is their age.

And now we create a report, with people over 100 years old,
in our case that will be Alice.

And this is a toll order, because we have to monitor the table,
for when it changes.

And we also have to monitor age column.
because that will get updated as well, (think typo rather than yearly)

So we are monitoring three fields and the array,
and then, to make our report, we re-run it at any of the four changes.

Our filter for creating the report simply says:
report.filter = table.filter( person.age gt 100 );

This is pseudo code, but a special part of our system,
because the person object here, is not the perron in our table.

We are using an object proxy, to intercept,
what is being used in a filter, and now we will know to subscribe to age.

To listen to age for changes,
and automatically update the report, we are already listening to the table.

---

So our old and wrong, and inefficient, software machine,
creates a report, that updates it self, whenever its sources change.

And as with everything else,
the report will emit a change event.

So now we can use this report as a source for a new report,
and return all the last names of old people.

We can chain,
reports.

This is just about 10 lines of code,
but we get automatic dependencies and updates.

Hidden here is a mechanism,
for un-listening, to free up memory, a stop function for every report and table.

---

Now, we tables that create and update other tables,
let us give them order.

Lets do something crazy and say,
object folder has an array called folders.

And this creates a tree, we make a root folder called application,
and a folder called users, and add the users folder to application’s folder array.

We can nest things like this to no end,
creating an entire application hierarchy.

To which we can attach tables,
we can make a new array or throw them into the folders array.

Very similar to how files work,
in a file system.

---

Now we can sort our reports,
we can talk about people and users.

And call tables from other places in the tree,
but which is more, we can map put the user interface with the tree.

Application folder, would have a window, window would have a side pane,
and a main pane, main pane would have a list.

A UI system like svelte, can crawl data structures like trees,
with a for each loop.

So our window having a side pane, and a main pane,
means we have two entries in the window’s folder array.

And the for each loop would scan window.folders,
and first render a component for side pane, and then main pane.

We can change the folder array to a report,
and the for each loop would re-run making the UI dynamic.

But out aim is to use the for each loop,
with the users over 100 report.

Our one line tree,
and 10 line data machine.

Will alert the for each loop, when the report changes,
efficiently updating the UI representing a person.

But also at the same time,
if only the person’s age changes, in the original table.

The UI will just update that number alone,
without re-running the for loop.

---

Unfortunately it is not possible to go into greater detail,
but there really inst much more to add.

We have a tree with tables and reports that self update,
and use svelte to efficiently decorate our data tree with user interface components.

---

Svelte programmers would notice here,
that components don’t have to extract data because that happens in the table.

This way user interface components can just deal with clicks,
and filed and list updates.

Low level and low-ish leveler programmers would notice scary things here,
because their programs demand discipline and force them away from dynamic UI stuff.

And for the rest of us, we shouldn't feel bad that we only emit change events,
these tables never hold more than a screenful of stuff.

My precise use case is color gradient creation for a fantasy user interface,
my tables will have five items on average.

And my tree, does use tables for other baches,
so in my case the very structure of my tree also announces change.

---

Programming only gets complex, when programmers don’t know the vision of a program,
imagine someone quote optimizing unquote our report to emit more than change.

We lose that pretty simplicity, and if someone removes the tree,
thinking that was useless.

We can no longer decorate the tree with user interface,
which in svelte is quite simple and readable.

Few programmers optimizing, would complexity the application,
and then code would become unreadable and need unit tests and an office of old men.

---

Re-inventing, what people tell you has already proven to be wrong,
or has been done better is a magnificent way to learn and become an expert.

And being inefficient, is quite the powerful act during re-invention,
because those are the path that original inventors omitted thinking they are sub-optimal.

But as the case is with rendering you can calculate if you are adding, or removing,
based on whether the ID is there or not, it is a quick check, not at all inefficient.

---

I invite you all now, to ask your favorite AI,
to create a minimalist JavaScript Signals implementation.

And ask it about Object Oriented version,
and how Signals help, and their subscribe/unsubscribe life-cycle.
