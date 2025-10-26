Before we begin, just between us, we have to internally change the name Signal to Pulse,
pulse is a short burst, a signal is a kid and caboodle with extras.

I didn’t come up with the name signal,
but pulse is the correct term.

I will still use the term signal,
up until I show you why it is important that we switch.

---

[Allow me to remind us what Signals are][1],
it is a complex variable, meaning an object with properties and methods.

Similar to how an Array has a length property,
and push method.

And an array is a complex variable, an object, that is efficiently programmed,
for the purpose of storing things like numbers, letters, and other objects.

Unlike an array, which does not announce changes,
a signal when given a non null value will notify all its subscribers.

A subscriber is just a function that is given the value of the signal,
during value change notification, it only gets one argument, the value.

Let us make a signal, and we will call it username,
const usernameSignal = new Signal();

This is a null signal, because we didn’t specify value between the parentheses,
we will now subscribe to it: // usernameSignal.subscribe(v=>console.log(v));

I use the letter v, but you can use the word username,
though can see that it is the username signal, that’s why I only use “v”.

---

In a horrible mistake, some people give the signal dependencies,
so that you can log, v and another signal.

And that second signal will be remembered as a dependency,
and now whenever “it” or the username changes the subscription will be reran.

Don’t do that, do not make the signal more that a value holder,
that notifies subscribers on non-null value changes.

---

Last week I was fool enough to tweak the non-null comparator,
to foolishly provide a customization isNull function.

With just such a tiny change, you can no longer check if .value is null,
you now have to run .test() and then use the .value.

I do believe it,
they used to call that a blivet.

You must protect the simplicity of signals,
they are far too precious.

Especially in context of User Interfaces,
something that is outside of JavaScript/ECMAscript design considerations.

---

This simple signal can’t do much but notify on non null,
but that give you power, because your mind is good at simplicity.

So we will make a map function, this is a signal utility,
and it should be both external where you can say map(usernameSignal, mapFunction)…

But also, be good to yourself, create a class that extends Signal,
and give it a map method, that will call the reusable map function.

With the “this” keyword,
as the first argument, and the given mapFunction as the second.

And then return the result of the map function,
as the result of the map method.

So you are just wrapping the method around the function,
setting this as first argument and mapFunction method argument as second.

The keyword this,
is how objects refer to themselves, internally.

So inside the usernameSignal, we don’t say usernameSignal,
because when we create the Signal…

We have no clue what variable name the user will pick,
as they instantiate it at a later data.

So we use the keyword “this”,
which always refers to the owner of the method.

The difference between function and method,
is that functions are just programming language functions.

Methods however,
are functions that belong to an object, and can use the keyword “this”.

If you want to call another method of the object you are in,
you say “this” followed by the method name.

---

The Signal extension,
is where the naming problem reveals it self.

Our perfect little signal,
must be renamed to Pulse.

You will often find yourself using pulses,
without any of the extras.

But the extension that has map, is now what we will refer to as Signal,
so; externally no one will notice this change.

But you will know, that if you don’t need anything extra,
you can just use a pulse – such is the world of programming.

---

Map takes two argument, a signal to map, and a function,
to send the value of the signal through.

So a map,
transforms or maps the value for the signal.

And the way this is accomplished,
without ruining anything.

Remember,
pulses and signals are precious,

Is, by creating a new signal called mappedSignal,
subscribing to the given signal in this case usernameSignal.

And taking that v of the usrname signal,
and passing it through the mapFunction…

And then setting the mappedSignal value,
as the result of mapFunction(v);

And remember that the v is the usernameSignal.value,
and then the map function and thus method return the mappedSignal.

So when you call a map on a signal,
you get another and equally uniform signal.

And it also has a map method,
so not the pulse bu signal.

Just to give the fast version, map returns a new signal,
the mappedSignal.

It is a standard signal as we have it here,
that subscribed to the signal that we fed into the map function.

And then each time the signal we fed into the map function changes,
that new value is passed through mapFunction…

and assigned to out mappedSignal,
that was returned from the mapped function.

---

It does not get much more complicated than this,
this was the shot, and it dod not hurt.

Just like the function of an object is called a method.
a function that operates on signals, alslo has a special name, that name is operator.

So map is an operator,
there are many operators.

You can look up Reactive Operators,
but don’t read the documentation.

Instead, ask AI for a simple implementation,
that works with your pulse.

To understand an operator,
you have to understand its code.

It is pretty simple in our case we just pass the original signal value,
through the mapFunction, often referred to as predicate.

---

So our mapFunction predicate,
is where we can add stuff to out username, not signals, but some text, like hello.

We can now say  usernameSignal.value = “Alice”,
and say  usernameSignal.map(v=>`Hello ${v}`).subscribe(v=>console.log(v))

And we will see “Hello Alice” in the console,
as the map function automatically subscribes us to usernameSignal.

Which now that it holds the value of “Alice”,
instantly executes the subscription.

Which means it sends its value Alice to the map subscriber,
which sends the v thorough the mappedSignal mapFunction predicate.

And assigns to the value of the mappedSignal,
which then yet again….

Instantly executes the subscription which just has console.log
that prints Hello Alice.

---

It is not complexity you hear,
it is just English that sounds weird when describing program flow.

Looking at the tiny snippet,
undoes all the tangled words.

[1]: files/Signal.txt
