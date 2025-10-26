I never wanted a computer mouse,
it found me, I got a used one as a gift.

Then I came across GEOS,
saw a little cursor and put the two together.

I’ve been struggling with computer mice,
my whole life.

Let me show you,
let me just tell you a story.

One of the biggest battles I’ve had,
with the computer mouse.

Happened just this past week,
and I lost, I lost.

---

Allow me to open,
with evidence, just what a cruel beast it is.

This is from the Mozilla Developer Network documentation,
on the subject of the movement, the bare movement event.

The most basic thing there is,
and it reads as follows.

“Warning: Browsers use different units for movementX and screenX than what the specification defines. Depending on the browser and operating system, the movementX units may be a physical pixel, a logical pixel, or a CSS pixel. You may want to avoid the movement properties, and instead calculate the delta between the current client values (screenX, screenY) and the previous client values.”

This is done on purpose,
somehow perpetrated by the hold the mouse has over our world.

This is a simple problem,
and I’ll explain to you how dragging a thing works.

You press the mouse button,
and receive a mouse down event.

Lets say you pressed it in 5,5 position,
just for simplicity sake.

Now, at this point, you hae to begin monitoring,
for a mouse move event.

Because you don’t care about the movement,
until you press the button.

So you set up a listener,
and wait, you actually have to wait.

There is no sequential execution here,
the mouse will send the move event, the damn mouse.

It will be just a few milliseconds,
but you don’t decide how many, you just wait.

And then you will receive the event,
and it may say:

Okie kitty, the mouse,
is now at position 10,10.

Meaning it has moved five pixels,
to calculate that you say current position minus previous position.

Which is 10 minus 5,
for both x and y.

Now that you have performed this calcuation,
you say to whatever you are dragging on the screen.

I need you to update you position, by 5,5 pixels,
because the mouse said so.

When you release the mouse button,
you remove the listener for mouse movement.

---

This is the friendliest thing you can expect from the mouse,
subtracting pixels to get the delta.

And it all gets worse from here,
it gets so bad, that the movement property needs a warning.

---

Now, where I have been defeated,
by the mouse, just this week.

Is where I need to drag something,
in something very similar to a desktop window.

That unlike a desktop window,
has no limit to how many windows can be nested in.

And cannot use, pixels for calculations,
no pixels.

You have to use transforms,
each window defines how it should transform x and y.

I was prepared for it,
I had a beautiful little array...

Where every window reported to me,
by how many pixels things have been panned inside it.

And my what scale,
things have been zoomed in or out.

My calculations were perfect,
I understood the problem I was facing.

Including, that things inside the windows,
have their own layout manger, which needs to be alerted to when the window moves.

I could make it work,
which required that wherever you scroll the mouse wheel.

You either zoom in or zoom out,
and have to pan, at the same time.

So that the point under the cursor,
is always the same.

---

I had to abandon the way windows are structured,
create a new repository, which I called kerfuffle.

And it is one of my development strategies,
to carefully move the code, while just going over it step by stem.

There isn’t a lot of code,
but you have to follow the story it tells precisley.

I had to begin, anew,
and yes, it was the mouse.

---

It was the mouse...
the documentation states that .x and .y, another way of reading coordinates.

Is an alias for .clientX and .clientY,
that reports mouse position within the visible window viewport.

(the square that shows,
the page you are scrolling)

As opposed the long page that requires all the scrolling,
view-port, view port is the camera view port.

And I compared, .x and .clientX,
and the values were just different.

---

Furthermore, when I maximized the window,
the view-port coordinates appeared to have changed.

By what seemed to me,
the size of the browser menu bar.

At this point,
I wasn’t taking the program seriously.

---

I am sure I am wrong about clientX and x being different,
but it is the distrust for the mouse.

Presley because of warning messages,
such as the one I quoted in the beginning about movemenX.

That, derail you, that cause doubt,
that perhaps somewhere, you used the wrongX.

---

Finally there is one more thing,
I could make it work, I had it working.

But because I observed the numbers that needed change,
not because I understood the problem.

And even then,
understanding is not enough.

I am a watch maker,
the clockwork is an art form.

Adding extra gears to correct movement,
is not how programming is done.

Only wisdom and precision,
is allowed.

---

I was the mouse,
a cruel cybernetic creature, that threw me off.

I know it,
the mouse.

It is just imprecise enough,
just unique enough, to make you reassemble the watch.

I like normal mice,
but I do not like the computer mice...

Too imprecise,
the mouse jinxed me.
