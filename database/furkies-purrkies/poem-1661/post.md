Programming the mouse,
is not as simple as it sounds.

But you only need to know one thing,
the mouse move is based on a timer.

Let us imagine we have a blank web page,
with a small photo of a cat in the center.

I will show you how to drag the cat,
without bothering you with source code.

I want you to understand how to think about the mouse,
for an actual tutorial just search for JavaScript Mouse Drag tutorial.

---

The way we know that the user wants to drag the cat,
is by listening for the mousedown event that we attach to the cat.

Mousedown is the first half of a click,
the other half is mouse up.

Here is the first unusual thing,
within the mouse down event when the user is pressing the mouse button.

We must install a mousemove event listener,
so until that moment we don’t know if the mouse is moving.

We must also listen for mouse up, though now outside of mouse down,
to remove the mouse move listener.

So mousedown and mouseup,
basically install and unistall the mouse move listener.

The mousedown and mouseup themselves,
are only removed when you want to remove the draggability of the cat.

If you wan the cat to stay draggable,
let the browser clean up when the user navigates to some other page.

---

This is where things get wild and confusing,
and tough, but, what you have learned thus far.

Shows you how to install a cat dragging function,
and clean up when the user lets go of the mouse.

This is an awesome lesson, you install the mousemove,
inside the mousedown, and get rid of it, in mouse up.

---

Ok, grab on to something,
and just listen.

The mouse move event, does not trigger each time a mouse moves by a pixel,
it runs on a timer, it samples the cursor position every 50 ms or so,

The mouse is a dumb device,
it does not know about the size of the pixels on your screen.

So it is like the mouse move listener is a radio,
that receives a broadcast if the mouse coordinates change.

---

OK, it is going to get worse,
maybe grab a snack or something, it is about to get even weirder.

Listen, we can’t use the raw x and y coordinates,
of where the mouse is on the screen, NOPE.

Because if we used that x and y,
and applied it to the image of the cat.

We would ignore, where on the cat,
the user has clicked.

And we would set the position of the upper left corner,
to the position of the mouse, making the cat jump…

If the user was dragging the cat,
by its rear.

So we can’t synchronize the mouse position,
with cat position.

Further more, we mustn’t try to measure,
the distance from the upper left corner of the cat.

Our cat here is just an example,
this could be a deeply nested window.

In a panning and zooming application,
that can be nested in annotate panning and zooming application.

You would need to measure every border, margin, padding,
every, offset.

And measuring scale, or the zoom in and zoom out,
is not something we can go around, we must always divide by scale.

And scale, is a weird measurement, because scale zero,
means finitely zoomed out, and scale 2 infinitely zoomed in.

But let us leave it at that, the talk about working with zoom and pan systems,
belongs in a text specifically about them.

---

So let us imagine the user clicked on the left eye of the cat,
and that eye and the cursor must be in perfect sync…

While we are dragging,
the now pretty freaked out creature.

---

To accomplish this, from within our mouse move listener,
we have to figure out what the cursor position delta or difference is.

And we will apply that tiny number,
that we know our cursor has moved by, to the x and y of the cat image.

So we don’t set the coordinates of where the mouse is on the screen,
to our poor cat.

We figure out, by how many pixels the mouse has moved in x direction,
and y direction, and we add this tiny number, to the x and y of the cat.

So it is a relative calculation,
relative to the previous position.

---

So set this up correctly, and simply,
you should capture the initial x and y coordinate on mouse down.

And just call them previousX and previousY,
we are initializing here, and these are real screen coordinates.

Of where your mouse pointer is,
relative, to the corner of your viewport, let us imagine we are in full screen mode.

On an 800x600 monitor, with our cat in the center,
we initialize previousX to 400 and previousY to 300, cursor being right in the middle.

But as we install the mouse move listener here,
and the user does move the mouse with the button pressed.

Inside the mouse movelistener,
we calculate the mouse delta or change or difference between previous and current.

So we say deltaX = current.screenX – previousX;
and So we say deltaY = current.screenY – previousY;

So if we moved the cursor right by 5 pixels in the last 50 miliseconds,
our deltaX would be 405 – 400, which equals 5.

If we moved the cursor left by 5 pixels,
our deltaX would be 395 – 400, which equals -5.

Once we have that little number that perfectly captures motion,
We add it to the x and y of the cat.

And because our cursor moved 5 pixels,
the cat now moves 5 pixels, and the cat’s eye, stays under the cursor.

…

Again, we are not setting the cat position to the cursor position,
because we don’t know where on the cat the cursor is.

We are instead calculating how far our mouse has moved,
and applying the same values to the cat.

Onec the mouse button is pressed,
we move the image by the same x and y that the cursor moved.

And now that we adjusted the position of the cat,
we must update previousX and previousY, for the next delta calculation.

We set previousX to the current value of screenX,
and previousY to current screenY.

These are actual coordinates of the cursor,
not the deltas, the delta is only applied to what you are dragging.

---

To just to give extra information at the end for the rare instance,
you are in a pan and zoom system.

If you are zoomed out, you will have to divide the deltaX and deltaY,
by your scale, and again, given that scale of 1 means no change.

So at 50% zoom, your scale is .5,
and your 5 pixel deltaX would become 5 / .5 which is 10.

When you are dividing by a fraction, you are asking,
how many of those fractions fit into the whole number.

Our deltaX in a zoomed out landscape, is doubled,
because those litte zoomed out pixels need to do more work.

The pointer, is just on the screen,
in a world that cannot be scaled, that is outside of the browser.

I want to make it clear that the division by scale,
is just for daring user interfaces, and edge cases.

The web browser does have a movementX and movementY,
but [they don’t yet think in tiny or virtual pixels, consistently][1].

There is also a much easier drag and drop mechanism,
especially fun if you need to drop files on the browser window.

But applying the deltas, being so relatively low level,
gives you all the power, including the power to go around browser bugs.

[1]: https://github.com/w3c/pointerlock/issues/42
