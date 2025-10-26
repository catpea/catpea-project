All desktop applications and smart phone apps,
are operating system specific.

So if you develop an app for the iPhone,
you will need to develop the same App again and from scratch for Android.

And if you want to put it on the Desktop,
you will really need to redevelop it from scratch for Windows, Mac and Linix.

So you need 5 different development efforts,
to develop an application that does the same thing.

---

Clever programmers figured out,
that they can just use the web browser as an application platform.

Since the browser already covered,
all the operating systems.

And here, they can just write in JavaScript the language of the web,
creating an app and application all in a singe language.

Operating systems will frown upon this,
because they don’t want a full web browser behind an app.

In fact, they want you to be so precise with code,
that every bit of your application should specify…

If it need a lot of CPU, delayed CPU,
or it it can slowly run in the background.

When you drag an entire browser here,
everyone gets mad - how dare you, are you crazy?

You should make 5 programs,
under 5 different architectures.

---

So the rational programmer,
decided to publish on the web.

They will need server side code,
and code that executes in the browser.

The user will have to sign up,
they will get private space, and can work there – brillaint.

Well If  the web application does something useful,
that means it uses the CPU.

Thing is, you just put all your customers on a single computer,
the web server, that has your code.

So now you need a network of computers,
to handle all the workload – haha!

So you get four more, really good servers,
now you have 5 computers, but with the same code.

So it is not like you have five separate projects,
you just have two.

The server code that does something useful,
and the browser code that give the user a neat user interface.

And as your program grows and gains in popularity,
your servers crash, you lose data and customers, on your biggest day.

Your five computers could handle spikes,
but not a huge spike, like a black Friday or Christmas spike.

So in your new startup, you get clever,
and break down your programs into functions,

And every time a user needs something done a function is put on a queue,
and then a worker computer jumps in and solves that function returning data.

And when you get a huge and irregular inflow of users,
the system will detect that, as it will take longer to solve funcions.

And will simply bring in more servers, temporary,
they are just regular machines, that process functions.

They don’t need any special installation, and hold no data,
when no longer needed, they are erased.

And some other customer can use them,
this is called a self provisioning.

You fairly pay for the spikes,
only when your servers are being used.

There is latency,
but the system is nice.

Small apps are still better of on a singe server,
but they will crash on a really good day.

---

Self provisioning is nice,
but we still have dumb problem.

Because the server code is written in one language, Rust for example,
and the user interface is always in JavaScript.

But we are in luck, because node.js, bun, and deno,
can run JavaScript on the server.

This means a singe code base is possible,
code reuse would greatly cut down on complexity.

Bye, bye Rust or PHP,
we are all JavaScript.

It is very easy to write an HTTP server in node.js,
and same goes for cute queues, and cool workers…

Reverse proxies that merge many HTTP services,
under one consistent roof, we are really all JavaScript.

Which is amazing, because why do we even need servers now,
why don’t we just wrap the entire application in a browser shell.

Electron.js and nw.js do just that, and it is a browser and a server environment,
in an application framework, so you can have server code in there.

You don't need the queues, but it is fine, it is all JavaScript,
but companies will not like this.

Because you must ship 150MB of browser,
wrapped around your code.

But at this point, you have no need for network,
your code is consistent and fine.

You don’t have to worry about hackers,
everything is installed on your customers computers.

You can have an enterprise version,
where they actually make a little self provisioning thing with your queues in-house.

It runs in a browser, it does not strictly require the browser shell,
enterprise version has wiggle room, good flexibility.

There is just one last thing, your user interface,
will need an upgrade, every few years as technology evolves.

So you need a sturdy UI strategy,
that can mean React, Angular, Vue, Svelte…

Or doing something right from the begging,
for a change, this is called Vanilla.

To do Vanilla, you need to become…
part human, part machine, part beast….

And an ennobled creature…
but one who not only does not shy away from dirty words.

But actively invents or re-discovers new ones,
and is not afrais to speak them.

---

River cooter (a kind of turtle), skeezy an old man,
that calmly watches at you at the gym.

Ermagerdserserge,
a brand of bodybuilder workout singlets.

Or the devil’s az - my private idea for a ghost pepper based energy drink,
for bodybuilders and coders  – it will make your ears tingle.

---

You see everything – you see - in the web browser is a tree,
meaning it is built on the notion of nested elements.

Every element, button, input box, text paragraph,
contains a children array, that can contain other elements.

And those will also have a children array,
you can nest things as deep as you need.

And when you have a key point,
you give it an id, and then you use that ID to jump into that part of the tree.

These days UI work goes pretty well you have web component,
meaning you can create buttons, or even dropdowns and containers.

And each is an object, so it has internal memory,
graphic styles, and it will do what you need it to do.

You can have a login web component,
that just requires one line of code to display.

Working with the big tree requires some getting used to,
but once you can handle it, frameworks that abstract this way seem crazy.

They only just create a tree on top of a tree, it is madness,
especially now that the concept of Signals became popular.

A signal is just a variable like X in math, but parts of your program,
can listen to it, and self update when X changes – good stuff, really good.

Final quirk, is when you relay on two or more signals,
lets say X, Y, and X, and they just each hold a number.

What we are looking for, is being notified,
when any of them change.

Once they are NOT NULL,
and actually have a number.

And, yes, yes, yes, yes,
any time after that, whenever any of those three numbers change.

Signals are to die for, but you pay for it,
because change is not sugar and spice and everything nice.

It is change over time, and only after each of the numbers are valid,
and monitoring must stop, and it better do so automatically….

When that part of your program, or user interface,
is no linger active – you must stop listening for change.

Yup, signal dues,
but it is worth it.

You change a signal, and your entire application,
automatically updates.

The last bit of good news, is that combining signals only sucks,
when programming the old way, with code.

In a visual programming environment,
where a signal can be represented with a box.

And our X, Y, Z with 5 boxes:
X, Y, Z, CombneLastest, and XYZ, the result.

And all the boxes are connected with lines,
X,Y, Z is plugged into CombineLatest and output of combine latest.

Becomes the updated value,
of the X,Y,Z signal.

Lets say, that in the beginning, you just drop a button on a canvas,
and when you double click that button, you enter the visual programming mode.

And now you can change signals throughout your application,
to make all kinds of things happen.

This is not the best way to control applications,
it is just the best way to do it simply.

---

And this is where this story stops,
we rose from 5 different codebases, to just five different boxes.

We rejected walled gardens aka app stores,
and created a self provisioning enterprise masterpiece.

With a visual programming front end, that routes signals,
and updates the user interface components by just setting values.

Don’t ask what you make with it,
sell it as is, it is a development enthronement.

It is up to your customers to make stuff with it,
they will each have a different aim.

In a way this reflects our journey back to the desktop,
where we don’t need servers, but the customer brings their own CPU.
