Well, it surely is one of the smallest things I wrote,
it is light and delicate...

And as always eggstremly dangerous,
which also happens to be my middle name.

Hopefully it will inspire the new to programming,
but let us weep for the pros.

The react and rune, and mob learners,
the rx, the reflux and redux.

And whatever resulting curses and query query languages,
they got tieir jimmies russled with.

---

The lesson that the pro must learn,
is that in the AGE of AI.

You can ask for a simplified lightweight version of anything,
and study the heck out of it.

---

In the last couple of days I programmed,
two [little applications][a], and I found them both lacking.

After all, it makes little sense
to give a counter or sample application, a revision number.

---

I sensed, that a revision signal
and object property/method access watcher…

Is best for things like shopping carts and shopping cart items,
where the product can have a revision, and items in cart can update.

The standard todo list example is not enough,
but a collaborative - multiuser - todo list would work well.

---

Today I set down to a plain old array,
just assuming it wont work much.

And I begun with the un-usual
ReactiveArray extends Array, somnethign you don't usually do.

But it worked, I only made one change,
adding regula expression and function support to the watcher.

If property access is done by a number, as in array[n],
be sure to trigger the needed functions.

Arrays famously have more than just add delete, push, splice,
they expose all their contents by an index mymber.

So array 4, gives you access to the fifth element in the array,
assigning to it, now triggers the watcher and it announces the change.

I coded peliminary what was added, what was removed, what was reordered,
and it went very well.

---

Let us talk numbers, the [ReactiveArray is 6 lines of code][0],
this is shokingly little.

[The less revolutionary version][1] comes at at the tiny
287 lines, ans plenty of twisty little passages.

Technically what I wrote today, is a snippet,
almost a one liner.

---

And it is proof of wat we all need to see,
we need a Reactive Variable Toolkit, not Reactive Objects.

---

I'd sure hate to be someone who wanted to learn reactive programming,
and ended up with weird stuff.

What we have, is so ordinary,
it may take as much as half an hour of staring at the title image.

To finally ignight a professionals rage,
and have them question reactive programming choices the same way I did.

---

If you are new to programming, the world of programming is yours to shape,
do what moves you, and you will move the world.

[a]: https://catpea.github.io/mlue/
[0]: https://github.com/catpea/mlue/blob/b66b8a72756e7e9048fa62f38e4886a4f87f7f03/playground-array.html#L72-L79
[1]: https://github.com/catpea/signal-array/blob/a975dc784d19e4f511a9f7024f7cec230ea14b9d/SignalArray.js
