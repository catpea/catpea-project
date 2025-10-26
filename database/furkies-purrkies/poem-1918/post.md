Well, [I wrote the pan and zoom program][3],
and had a lot of fun, I think I'll call it peasy.

This is my fourth attempt at creating a pan and zoom system,
and each time I used a new combination of techniques.

[The most popular pan and zoom system right now][1],
does not seem to allow dragging of things within it self.

There is an open issue from 2017,
“Support drag n drop elements inside panzoom” and that is it.

As these are my later attempts I am testing wild stuff,
embedding a web page within a web page speaks of desperation.

[Non the less it is a very nice, and very complete try][3],
somewhat predictably resulting in the screen flickering.

And it goes wild on Chromium,
it is less annoying in Firefox.

---

Aside from the flicker, when the user clicks on the nested page,
I lose the ability to intercept the pressing of the Shift key.

I use shift to activate Panning and Zomming,
it makes sense that the web-page that is nesting another web page.

Should not be able to hear the keystrokes,
this would be a security problem.

People could trick a user to open a URL that looks correct,
and then nest what the user expects to see in an invisible frame.

And intercept the keystrokes,
see what they are typing.

So I have to install a piece of code,
in the application that I am panning and zooming.

That notifies me when Shift is pressed,
this is easy, but it violates the main principle.

I want pan and zoom to be completely external to applications,
it makes perfect sense.

As panning and zooming,
has little to do with what the application is doing.

My original and sturdiest attempt at pan and zoom is very invasive,
it is a set of Events and Functions that the user is forced to use.

In order for their drag and drop, even line drawing,
and things that automatically attach to their things to work correctly.

Panning and zooming, horribly messes with x and y coordinates,
of just everything.

And just the moment you understand that it is not just scaling,
but also offsetting everything.

You discover, that in some cases,
you may need to acclivity listen for pan and zoom changes.

And react to them,
which will absolutely turn code inside out.

---

Though this was a desperate attempt at creating,
what is basically a microscope with move, zoom-in and zoom-out.

It was not throw away code,
because I am preparing for a knockout move.

Uh, this idea is rooted in a truly horrible experiment,
one that I would never attempt.

Replacing browser functions, updating the JavaScript functions,
to return correct pixels and dimensions relative to the pan and zoom.

Someone will try this some day, and it will work,
and the internet will love them, and it is not going to be me.

I actually grew something sane from this idea,
to offer the commonly used Events and Funcions through the Pan and Zoom program.

So where a wise user would normally say:
document.addEventListener('mousemove', handleOnMouseMove);

I will offer a
panzoom.addEventListener('mousemove', handleOnMouseMove);

And now give the user correctly scaled pixels,
so that their drag operation at half the scale would move twice as fast.

I will not copy everything to perfection,
just add a few obvious things that have the right Dimensions.

---

Maybe the flicker is a simple problem,
though I doubt it.

And to be realistic, the pan and zoom API I will offer,
will always require rewriting old applications.

But it will work much more smoothly,
than the wrangling of x, y, and scale we see today.

---

There is one important lesson to take away from all of this,
tightly coupling with panning and zooming devastates [simple code][4].

Panning and zooming must be external to applications that rely on it,
as much as possible.

Ignore this warning, at the peril of any and all simplicity,
in your applications.

---

And if you are just learning programming,
you are going to have a lot of fun.

But there is one thing you should avoid,
and this time, ignore this at your own peril.

Any and all environments and people,
that think the concept of deadlines is reasonable.

It is not reasonable, real programmers remove code,
not smear it for the sake of a deadline.

And in may cases, perhaps most cases,
it is too early to write good programs well.

Rather than being told what to create,
take charge of your existence.

And start searching,
for what can be created beautifully.

And then just do it, refine your attempts down to a few lines of code,
and enjoy your success and all the adventure that comes with it.

[1]: https://github.com/anvaka/panzoom
[2]: https://github.com/anvaka/panzoom/issues/19
[3]: files/view.html
[4]: files/app.html
