Programmers have been trying to visualize their programs,
their internal micro-architecture for ages.

Only two things have worked,
and both are very primitive.

First is the actual directory layout,
where program files are kept.

It is a primitive way of categorizing things,
sometimes concepts like input forms or user interface themes.

Other times more generic concepts like,
plugins, where plugins can hook into all kinds of things.

The second is the obvious thing,
the documentation.

But, it takes forever,
it needs updates when code changes.

And it better have examples, diagrams,
maybe even an occasional tutorial.

Great for a group of programmers,
insane to attempt, for just one.

There is a slight shortcut here,
as sometimes text for documentation…

Can be pulled out of well structured code comments,
this is sometimes driven by static code analysis.

Here code is parsed by computer,
but rather than being executed…

It is queried for the purpose of generating,
a lot of the documentation.

But now the lone programmer,
needs to comment code…

Which is, yet again, writing documentation,
though not as detached from code and only a bit at a time.

I once ran an experiment,
where I embedded instructions to create a visual code graph, using [GraphViz][0].

I embedded the instructions directly into comments,
it worked, a large, high level, graph of the concepts within the program emerged.

Problem here is, the moment you see a pretty graph of your program,
you want it to be interactive.

This is where visual programming comes in,
as demonstrated by [Geometry Nodes in Blender][1], and [Node Red][2].

This works, but there is a flaw,
to program with just visual nodes.

A visual programming language is required,
we hoist things like if statements into the visualization.

The result is a tangled graph mess,
because we hoist low level concepts like if, each, filter, we make a mess.

To contain the mess, we make a bigger mess,
by adding a third dimension, of grouping of nodes to create custom nodes.

Where custom nodes will hide all the each, and if, and filter statements,
the program structure becomes so rigid here.

That the only way to address it,
is to retire as a programmer.

---

There once was a promising attempt to [visualize object oriented programming][3],
but again, here we hoist objects methods properties.

And on top of that, Object Oriented Programming,
is just a tool, it shouldn't attempt to contain entire applications.

Not everything,
should be an object.

---

Another promising attempt is [Apple Automator][4],
here, you don’t branch, at all.

You arrange a column of __High Level__ actions,
such as resize image, upload file – and that is it.

There seems to be an unexplored area here,
where allowing to create custom high level action actions…

May allow for creation of applications,
and they maybe very readable.

But, at the same time,
we could just do the same in code.

Just create a list of high level functions,
and hide all the logic beneath.

It is possible to create an Automator in code,
the UI is not that helpful.

---

Everything that has been tried,
everything showing promise has basically failed to impress.

Either high level concepts are burred, blurred,
or don’t deliver enough.

---

I suspect, there is one more thing let to try,
and here we borrow the user interface from [content management systems][5].

And create a high level code management system,
and let the user interface, guide the programmer.

There is a huge problem here,
but it is fixable.

Keeping things generic, as in “click button to add new plugin module”,
and enter code for UI, and action handlers to receive UI commands.

Is a huge mistake,
it will create a mess.

What needs to be done, and this may shock you,
is the UI of the code management system, has to be written around the application.

Each programming project, will have pretty,
but unique user interface, aimed at the concepts within the application.

Don’t be reusable, or generic,
be specific.

---

I will close with an example, and keep it simple,
a code management system for the creation of [Bootstrap Themes][6].

This is a deceptively complex challenge,
for those of yo who are still sad I said bad things about OOP.

You can see, that UML, or universal modeling language,
can’t work here.

Visual programming, could just come to a crawl here,
for all the nodes that need to be on the screen.

But a code management system,
that operates around concepts specific to theme development…

Well, at least in theory, would keep everything,
in check.

Let us make a simplistic dashboard,
with some interesting cards.

We click new project, add page, call it dashboard 4,
a side-pane, showing all existing components in the system would show on the side.

Dragging the dashboard into the design area in the center of the screen,
would create UI to configure a Dashboard.

This is not a generic container,
but an administrative component specifically crafted for creating dashboards.

We point to a data source, or code a function that creates test data,
and point to a card component to use.

Clicking save, and build will create a new sample dashboard,
which we can now go back and customize further.

---

The reason why this kind of thing could work,
is because there is a toner part of the program…

Where a new dashboard container can be created,
or an existing one can be edited, came goes for cards, menus, alert boxes etc.

A simple context menu, or clippy even, will allow jumping,
between the different parts of the application.

---

A code management system crafted for a specific purpose,
must not deal with generic concepts.

Rather that adding a new UI container,
we have use specific high level concepts, dashboard, card group, Input Form.

---

Here the application it self, serves as a diagram of the system,
the buttons, and UI, are a kind of self documentation.

When time comes to update some dashboard code,
you look under components dashboards, edit code, and get a CodeMirror code editor to edit the code.

So the convention here is to use high level concepts,
because it is the easy to navigate all the complex ideas.

The User Interface,
becomes a concept map.

And I think it is pretty safe to say,
it would be easy to return to a particular Bootstrap theme and figure out where everything is at.

Remember this is a code editor, where we replace the concept of documentation, or even folder structure, with an informative user interface.

So it looks like a builder of Bootstrap Themes,
bit it is actually visual programming done correctly.

The UI is mapping important concepts,
it is NOT a UI made specifically for making bootstrap theme editing easier.

It is a concept map for a programmer,
made with Graphic user Interface Concepts, to help them navigate themes.

Code management systems are not for making things user friendly,
but exposing the internal architecture of complex projects.

[0]: https://www.youtube.com/watch?v=YL260-A5r2U
[1]: https://www.youtube.com/watch?v=kMDB7c0ZiKA
[2]: https://www.youtube.com/watch?v=3AR432bguOY
[3]: https://www.youtube.com/watch?v=8CBnAmYnwk0
[4]: https://www.youtube.com/watch?v=BTmZOh1GI3U
[5]: https://www.youtube.com/watch?v=deqX0gMeUVc
[6]: https://www.youtube.com/watch?v=7QT7EMsQyjg
