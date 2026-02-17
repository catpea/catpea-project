The following text is for people who know they must learn programming,
who want to learn programming, but who are betrayed by their starting points.

Please, you are having problems with learning programming,
because those starting points are rare.

Currently, Node-RED, Electron Fiddle and p5.js,
and they don’t go far enough for User Interfaces.

What you really need is a very sturdy list of non-nested places,
where you put different flavors of data in, event, packets, actions.

And that data, bounces around where server push packets.
become app actions, and click events are connected to funcions.

A place where you can say, OK, I have this mess where do I put it,
and not just piping around, but also combining actions or events.

For example, easily, stating:
fire ready when you receive loaded and start.

Also, events are events in time, that you can miss,
so they need to capped with Signals.

Signal loaded initially set to false, listens for loaded events from the start,
and then switches its value, and keeps that value.

So you don’t subscribe to events, they feed into signals,
you subscribe to signals, though events are available too.

Some people would call this declarative programming,
but this is actually a config file that flattens, not cheapens the app surface.

Furthermore, listening to a signal, means you have to unsubscribe when done,
and this must be done for you through nested disposable contexts.

And then all you code, must be sorted well,
I remember looking inside photoshop 3 in 2000s and nodding at the plug-ins.

You need plugin architecture as simple as app.use(myPlugin, {}),
where the plugins receive the app reference and do whatever they need.

---

When you start learning programming on a shiny flat surface,
your world becomes clear to dream about, to learn from.

---

User Interface, continues being a massive problem,
the correct technology is HTML, but you must never lose control.

And that means no tree diffs and patches,
and no large abstract components that obscure simplicity of HTML and CSS.

It means backbone views were somewhat correct,
and yes, they must be nestable.

And the areas of your user interface that need live updates,
need the concept of regions.

Where you can make careful bidirectional binds from Element to Signal,
or just slam safe HTML into.

Regions are delicate annotations of parts of UI,
around where your components nest.

The concept of a region exists, because the notation is simple,
you have a named region that you can reference, and/or automatically wire.

Just because forms exist, and today users lose their cursor if you replace HTML,
is not a reason to turn everything into virtual trees that quietly sync.

WebComponents feature here as well, but as Elements,
to which you deliver configuration to.

This alone in context of UI especially shows that programming is simple,
if you don’t try to dominate it, or force it.

---

Finally, one of the AI applicaions I made today uses similar architecture
and I previously created a visual programming language with it.

I can tell you very well what the key is, if the configuration does not look pretty,
or if it fails to enhance the whole, then it does not belong in the bootstrap.

A good example of a beautiful configuraion is “button.hello -> “show:greeting”
button.hello is a CSS selector, it means button with a class hello.

Show greeting, is an event name, it is in a category or on a bus show,
and it is named greeting.

Then you just add an event handler that calls a JavaScript function,
in in your code.

This bouncing around creates flat pockets,
to which you add more CSS selectors, and handle events from strange place.

In two words, it is just a configuration file, that creates a supremely flat surface,
you don’t see it yet, but in great part because of Event math, or Aggregation.

---

Your problem is not that programming is too hard,
it is that there isn’t yet a powerful and respectful surface you can stand on.

Where it is safe for you to focus your all attention,
and not end up with a defunct Backbone 15 years from now.

So you don’t install it as a library,
it is a light weight application template with plugin architecture.

Though it perceives misdirection, because of the way we bounce things around,
AI understands it, and even a limited one chose to use it.

For everything else there are the filtegraph languages,
they have events and signals sent into them.

And from here they can shape and route them,
across networks, or tabs, or windows.


For everything else, you just ask AI to write it for you,
it should be noted, that you can put an entire app inside a plugin.

And you can still have the tool and data or even AI harness around it,
again just a configuration file and maybe some App.use(Plugin) statements.

---

Most people once they figure it out race forward giddy with superpowers,
they forget to turn around and leave an invitation behind.

Where they once stood in confusion,
wondering is programming is just too hard for them to understand.
