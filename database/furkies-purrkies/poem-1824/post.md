Unlike Algorithms which are interesting calculations,
like converting Celsius to Fahrenheit.

Data Structures kind of just sit there,
wanting to hold your data.

You can send a data structure,
or save it to disk.

A Data Structure is a harness,
that holds Structured Data in some nifty way.

---

Trees, are the most fanciful data structure,
and all you have to do to make one is say:

Branch, has a value property, and a list of children,
to which you can add other Branches.

See, we can build an infinitely sized tree,
by just nesting Branches within Branches.

You just need like, 2 lines of code,
one for value, which could be an object.

For example Person that has email address,
or animal that type, and name, and such.

And then a List of other Branches,
so it is a recursive data structure.

Branches, within Branches,
within Branches.

Your file system has a tree data structure,
it holds Files, which are forbidden to have children.

And Folders, which you are free
to nest.

---

But as you learn programming,
and make your own trees.

For example for a world,
that has a lobby, in some building.

The building is in a world,
divided by areas that have monsters.

Or as it is in my case,
you have an Application, that has modules and scenes.

Where scenes can contain Windows, and pipes,
that connect windows together.

---

There is a danger,
that you tree, will attack you.

Because as beautiful as trees are,
they are infinitely complex.

There are no rules,
and even with a pretty graph.

It is hard to visualize everything,
for tracking bugs or meory leaks.

And unfortunately,
and this should come as somewhat of a shock.

You should always be mindful of multiple users,
editing your tree.

Even if you don’t plan on multiple users,
you may find it useful, to open multiple tabs or windows.

Or even have a split pane,
in your application.

Moreover, you may wish to save your tree,
to a database, which is based on rows and tables.

Very useful, for dealing with multiple users,
as everything just collapses to fields.

Or cells similar to a spreadsheet,
so you are no longer in a confusing recursive data structure.

But, you now need to collapse your tree,
your beautiful nested data structure to a flat grid.

In my case I only get two columns, key and value,
which is what you get in a web browser storage object.

This is not necessarily worse than something like a spreadsheet,
because it is really easy to make.

It is just like our person object from above,
which has a key named email, and a value that is an email adress.

---

In a spreadsheet, you start naming columns,
and not all of your stuff will have the same columns.

So you need multiple, things with different columns,
and you back yourself into a world of complexity.

Trees are very fluid, and naming or defining columns,
it rigid, so having two columns, key and value, is bad, but won’t bite you much.

---

Which brings us to the point of this this text,
how do you store something as magnificent as a tree.

In something as bitey and primitive,
as a key value table.

Let’s give ourselves a break,
and call our root, by id of “root”.

And you have a root folder,
on your file system as well.

And now, let us store a ‘root.children’ key,
with a string of three letters a b c separated by spaces, as value.

And just to be through, let us give our a child,
a proper name “Alice”.

So we will create a new key a.name,
with the value of Alice.

It is that simple, we now have a tree, of four nodes,
encoded in a very flat and primitive key value table.

We know of a root node, by just convention,
and we can lookup the root.children property which will hold “a b c”.

As you convert this back to a tree,
you can look up a.name, b.name, and c.name.

And your “a” child,
will become names Alice.

You can leave th other nodes names “Unnamed”,
or print a warning, that b and c are unnamed.

---

Lastly, the browser storage object,
or in my case the Web Extension storage object.

Will trigger a changed event,
when you give “b” the name Bob, in for example the third browser window.

So now you can subscribe to the storage object,
as you build up your tree from the key value store.

And have all your tree nodes listen to their properties,
b for example would listen to changes of the key “b.name”.

And all of your windows, would get the change event,
and get the Bob update.

Now, technically, the window that made the change,
would not get an event.

But you may not be working with web extension,
you maybe working with a web socket connection to a database.

Or server push event.
So it is always good to flatten things out, and say everything gets the update.

So you have to check if changes need to be made,
compare new versus old etcetera, etcetera.

This concludes this text,
but I must tell you about [Signals][1] before we end.

Because signals are reactive variables,
perfect for this kind of thing where data changes left and right.

All they have is .value that that you can read from and assign to,
and a .subscribe, that accepts a function that gets executed when signal value changes.

And the .subscribe returns a function that when executed,
unsubscribes your subscription.

First of all, if you get the same value,
a signal will do nothing, so it stays silent.

So we already solved the problem,
of checking if a value has changed.

Second of all, if you want to print tree node names in your browser window,
b’s name Signal, will also do nothing, it does nothing on null or undefined.

But, and this is a big but, the moment, b’s name signal,
receives a value of Bob, all the things listening to it will be notified.

So your user interface components just say b.name.subscribe,
and specify a function that updates a folder name for example.

Until then, the folder label, by defult,
just displays blank or unnamed.

So you would would say function(input){folderLabel.innerText = input},
and you just leave it alone, it set the name, when the time is right.

So a Signal, is like a tiny little machine, that soaks up some complexity,
and levels things out for you.

So that you can very easily listen for changes,
and make automatic updates, when the time is right.

One more thing, for those of you who want to implement this,
when you set a signal value externally through your application.

By editing b’s folder label in your fancy UI,
that new name Bob, should first set the signal value.

So you would say, bob.name.value = Bob,
and then immediately, in the same breath, updatethe key-value store.

This is called an optimistic update,
and you should revert on key-value store failure, whicyh is easy with signals.

But you must do optimistic updates, because otherwise your UI will lag,
especially if you are commnicating with a server.

Setting the key-valye store or database, may then send a notification back,
but it will be ignored in your source Signal as the update will be what you just set.

Your signal, just does nothing, issues no notifications to subscribers,
when the value is the same, so it prevents an infinite loop.

But it will be heard by all the other windows,
where b’s name is undefined.

And those signals, will cheerfully, and finally,
set B’s name signal to Bob, and then announce the change to name subscribers.

Which will update the UI,
in all your other browser windows.

Making you a very powerful programmer,
in deed.

[code image](./files/md-poem-1824-illustration.jpg)

[1]: ./files/signal.txt
