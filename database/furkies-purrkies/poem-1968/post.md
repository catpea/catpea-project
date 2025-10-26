This is a crash course, it means a lot of words,
in a little time, it is unfair, a crash course is never fair.

If you like it,
the more you will re-listen to it the more it will make sense.

If you don't, don't,
because Application architecture is simple, by design.

And you should not stress about it,
being too complex.

This text exists to give an overview,
of the full thing, it is a picasso, that you have to comprehend in tiume.

If you just glance at it,
it will be scary, and that is not fair to apps.

Apps must be simple, poetic,
because they are fundamental to all the features you add.

---

I spoke of Signals of Reactive Variables showing how,
user interface forms and manual layouts connect together.

Bunch of weird syntax,
on top of some oddly clear things.

Now you need an overview of the application architecture,
that hosts that code inside little plugins.

There used to be many application architectures,
but with AI, the simplest ones won.

As little misdirection as possible,
clear information, over magical conventions.

---

AI isn’t just a helper or teacher,
it is your thousand programmer large developer team.

For applications on the scale we have not seen yet,
it is only a matter of creatively engineering the prompts.

---

First of all, no one mentions an EventCorrelator when introducing EventEmitter,
so you can be sure, this short introduction is really good.

I am a firm believer that real programs use Signals,
that any program that does not, is silly.

But signals, store values, applications need a little bit more than that,
especially now that AI prefers plugin architecture.

And  your plugins should listen to the main app,
for events such as: projectLoad and projectLoaded, fileSave and fileSaved.

I won’t waste your time, events come in pairs,
the first one executes the function the second announces that the job is done.

So the first event is a trigger,
and second an announcement of job well done.

This is how you stack frighteningly complex operations in your application,
you listen for completion, of something that you absolutely require.

---

This may sound primitive,
but applications are complex beasts, and you need that primitive simplicity.

It is important that I should mention that eventHandlers,
that are triggered by events are the perfect functions to mark async.

Which then lets you use the await keyword,
and you can write much simpler programs.

Event handlers are,
usually tiny.

And EventEmitters love, anonymous functions, regular functions, async functions, and object methods equally – they don’t care.

Many programmers don’t understand this,
and end up needing to mark everything async as things slip from their control.

EventEmitters,
give you superpowers.

---

Signals just to be clear, do emit things kind of,
but if your user was to click the same button twice.

You would not get a notification of the second click,
because signals only announce when their value changes.

So your userClickedButtonWithID Signal, that holds the ID of the button,
will not announce a second click, signals are for storing values.

For announcing things, you use events, which do not have values,
honestly if you extend event emitter and give your events a value.

You will just make,
a bloated unstable signal.

And if you knock out same value test in a Signal,
you’ll just make a crappy and corrupted emitter.

Signals are for storing values,
and events for broadcasting messages.

Signals and events are names in a similar way,
because people like you are missing from the world of programming.

You need to sit dona and rename signals,
to ReactiveVariables or maybe something nifty like Reactives.

---

We need you all,
keep learning, please.

---

Finally,
we get to EventCorrelators.

Stacking plugins is OK, for program architecture,
but when programs are running, and the user is poking around.

You will often need to wait for two events, of different names,
that may share the same id such as userId.

Or, you can listen for addedToCart, wentToCheckout, and paymentSuccessful,
that each share the same shoppingID.

When restoring data, and also allowing the user add data,
you don’t know when an event will happen, or which will occur first.

All you can do, is listen for both events occurring,
and sharing the same ID or type, or some other property.

So that you know you got all the data,
to proceed with some action.

Applications grow large enough for your mind not to be able to grasp them,
and even if you can handle it, all it takes is a vacation to change that.

But you can always be sure, that you be able to figure outdated-the things you need to do something, and you just put them in the correlator.

And the correlator will emit an application event of a name you specify,
with the data of both of the events it correlated.

So you get to stay in control,
no matter how complicated things get.

---

To be clear, designing low misdirection applications that AI can easily help you with,
demands use of Application object, that extends EventEmitter.

Plugins that listen to the Application Emitter,
signals for various object properties that change often.

And EventCorrelator, to help you know when you got everything,
to proceed forward with your application features.
