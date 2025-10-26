At the very core of visual programming,
is the node with ports, that connect together.

To print something on the screen,
you connect the output of a text node.

To the input of a screen node,
and whatever text resides in the text node.

Or is pumped into it dynamically somehow,
gets printed on the screen.

---

But this is the most basic interface,
it can be argued that this is just a slightly improved spreadsheet.

Where rather than cells being connected by name,
there is a line dragged between ports.

---

But this is where all the simplicity ends,
this is where the future of powerful programming begins.

The nodes with ports and lines,
are just the simplest operation in the system.

It is like math in a programming language,
it is the most basic thing.

---

The nodes, ports and lines,
represent just one visual programming world.

Hit the escape key, or click the X or PI,
and you will zoom out.

To see that you are in a box,
in a tray, in a world of nodes, ports and lines.

There are others,
countless many other worlds.

Each tray, or world theory, or box,
or visual programming contexts.

Has input an output ports,
so that you may connect the worlds together.

The worlds communicate with generic OOP objects,
or JSON if you like.

To keep things simple, in the reference implementation,
only world nodes exist here.

Only world ports,
can connect to other world ports.

---

Now let me give you some examples,
to help you distinguish the difference between a node and a world of nodes.

The user interface of a desktop application is a world,
a button inside a form, inside some pane, inside a window.

When you click the button, this user interface world,
needs to be connected to application logic world.

Application logic is as simple as actions,
editing tables of a database.

A table of a database is just like,
a row in a spreadsheet.

Except that when two spreadsheets contain the same filed,
they can be joined together to for a more informed row of data.

So a button basically sends a command,
that edits the database.

And the changes to the database,
are sent back to the user interface to update it.

---

Here is the major thing though,
the user interface, does not rely on the node, port an line theory.

You just drag user interface components,
out of a toolbox onto the application window.

That is why the user interface,
lives in the world separate from database actions.

Moreover, the database actions,
can be achieved via multiple methods.

Standard node port ans line, File Maker or MS Access like approach,
or via a built in code editor, a code editor that create a world, a tray, a theory.

Message passing, can be UDP, 0MQ, HTTP, WebRTC,
or even EventEmitter.

The type of transport,
depends on what worlds are being connected.

Is it Desktop-to-Server, Button-to-Action,
App-to-Remote-API, Peer-to-Peer.

---

Every world can be different,
and programmers novice and pro will have their personal preference.

---

I am personally looking forward to building a Comic World,
where panels with AI generated art can be arranged beneath speech balloons.

Here, it will be possible to make web comics,
the output ports out of this world.

Would be the images, and their XY coordinates,
the URLs of the images used, and the position and text of speech bubbles.

I always wanted to make a little comic creator,
to practice SVG but I could never justify it.

Now, I am really interested,
into integrating Text Generating AI with Image Generation.

In such a way so that it plugs into the input port,
of the comic world, and automatically generates strange comics.

To me this represents a very handsome test of this system,
and the code generators behind it.
