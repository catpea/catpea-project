Sometimes code gets tough,
and it is tough to get going.

I am working on a Zoomable,
Visual Programming Language.

Where you zoom into things,
to get more details about them.

I am also working out pretty hard,
and I get tired.

I work out for three hours,
to very nice results.

And in less than a year,
I will return to my two hours.

Three is just to burn up fat,
but it also makes me tired.

---

My programming on weekends,
works great, nice and steady.

But after the three hours,
on week days, I run out of time.

I started working on smaller things,
tests, math, and libraries.

I find creating a stand-alone library,
on what feels like a short day.

To be the best way,
to make the day count.

---

Whatever the reason,
that your day feels short.

Working on something tiny,
and making a little library.

Will restore the feeling,
of productiveness.

---

While I still had my energy,
I came up with a new little test.

For my Zoomable User Interface,
when zooming out:

All the rounded corners,
would become squares.

This does not improve,
performance, at all.

But, it is a test,
of the reactive systems.

I begin observing the scale,
and then use that value.

To quote “simplify” unquote,
the shape of visual programming nodes.

My program can zoom out to 0.05,
and zoom in to 10.

But I wanted the corners to square,
at 0.5 zoom out, and be rounded, at 1.

So this demands,
multiplying the radius of the rounded corner.

By a number between 0 and 1,
that is based on current zoom or scale.

And that has to be clamped,
between 0.5 and 1.

Meaning, given rounded corners,
of radius 32.

Rounded corners are radius 0,
at zoom 0.5 or less.

And they are 32, when zoom,
level is 1 or more.

This requires range, or domain translation,
whatever math nerds call it.

Of range between 0.5 and 1,
to the domain of 0 to 1;

---

Rather than using a function,
where I would have to say:

Value, value range, and target domain,
I chose to use an object.

Where I instantiate a translation tool,
that then accepts a singe number.

The value of scale,
then is then transformed…

To something proportional,
relative to the value between 0 and 1.

---

Using an object, gives me the ability,
to ask for inverse value.

That I will later use to make a tool box,
which will not scale no matter the zoom.

---

Instead of racing forward,
to see some progress on the screen.

I just focused on the math,
and published [translate-domain][1] to [npm][2].

And then moved away,
from the computer.

Maybe the little library can
saving some coder context switching.

They’ll just drop it into their program,
and keep on truckin.

---

I plan on doing the same thing,
tomorrow.

Find a scrap of functionality,
and just focus on that.

And if there is time left over,
then I just find another one.

Though these are not big TODO items,
they do help the big ones get done faster.

I think the bid takeaway from this,
is the notion...

That a healthy body mass index,
is just much more important than work.

Get healthy and stay healthy,
a health nut programmer is a happy programmer.

[1]: https://github.com/catpea/translate-domain
[2]: https://www.npmjs.com/package/translate-domain
