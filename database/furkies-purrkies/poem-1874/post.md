Avoid generic algorithmic ideas, don’t create reusable nodes,
that when nested together create a tree, that you shape into an Application.

No, you have to create an Application Object, with Toolboxes and Tools,
Scenery and Scenes, Commander with Commands and History.

You are naming things what they are, so that AI can understand them,
by just looking at them, and not how they are supposed to be structured.

There are two additional benefits to that, you can really spend days,
working on your Toolboxes, or Commands, and make them Unique and Perfect.

If you were reusing generic objects to create your application,
you would be limited to only the changes that are useful to all things.

Unless necessary, avoid object inheritance as well,
that is where you say, Toolbox extends ToolCategories.

Or LoggedInUser extends User, which extends Profile,
that also makes a mess, write poetry, long objects.

Because you are no longer writing for programmers,
now you also write for Artificial Intelligence.

The biggest benefit,
is that you don’t make a program, by programming it first.

You now, MUST, make programs, by describing them first,
by telling the story of your Application.

From this end, you see that it is CRITICAL to call things what they are,
the AI does not want you to talk about nested Nodes.

It wants a story, how everything fits together,
how information flows, and it wants a clean separation between layers.

There are three layers, Server, Application, and UserInterface,
and you want to use the Server as little as possible.

You don’t want 10,000 sign-ups when you hit a front page somewhere,
to shut you down or cost you.

---

What follows is a brief overvio of the three,
without talking about any specific application.

Simply just going over the outline,
to help you get an overview of what is inside a program.

---

[PouchDB][1] is a good starting point for server work, it runs in the browser,
and whenever possible synchronizes with [CouchDB][2] on the server.

But it would be best to have a simpler storage mechanism,
that follows the same principles.

Key value stores where keys are paths such as:
“/users/alice/projects” = “a, b, c” can go a long way.

Whenever you store such a key value pair,
you also build up a tree based on the key.

So your app would create a users location if not yet there,
and with user alice, who has a projects location.

This tree then allows you to iterate over all users,
otherwise you are matching strings and that can get ugly.

Down here, on the storage level, you do have generic things,
like a location.

But beneath that is just your key value database,
or a database that you only use for key value storage.

This is the server, the end,
there is nothing unusual behind the key value storage.

I do want to add, that you need to version your values,
Couch and Pouch teach you everything you need here.

But basically, you give all the key value storage values,
a revision number, and with each revision a Universally Unique ID.

A revision number starts at 1,
and the UUID is just random letters and numbers created for that revision.

This way when alice updates a, b, c,
to include a project d.

The revision number tells you if it is an update,
or an old version of the value.

In some cases, usually when two people do the same things somewhere,
you get the same revision due to a hiccup.

So then you use the universally unique ID of those revisions,
you just sort by it, the one on top is the winner.

So as long as all servers get the same data,
everyone will elect the same revision as winner.

This is called eventual consistency,
the conflicting revisions stay in your logs, and are marked as a conflict.

Depending on what you are doing,
you may need human intervention.

That is how CouchDB written in Erlang,
and PouchDB a clone of Couch written in JavaScript do it.

Just to clarify, The revision number and uuid, is stored along with the abcd,
in the value of your key value store, under the path “/users/alice/projects”.

---

The web browser has its own key value store,
that is why you want the same on the server, as you get easy sync.

And data synchronization is something you can’t avoid,
you want to let your users run your application in multiple separate windows.

---

If this sounds a little scary, it is because databases are primitive,
and data synchronization is scary.

In fact it is so scary that we call sorting by UUID,
an eventual consistency conflict resolution mechanism.

And we just rely on key value stores written by other people,
to reasonably guarantee the disk persistence.

Disks are primitive, tornadoes that knock out electricity are primitive,
complex databases and memory leaks are scary.

So we just do a clever key value store,
sync up a couple of databases servers in US WEST and US EAST east.

Because now your little database can wisely clone it self,
with the use of revisions and UUIDs.

So as long as you guarantee delivery of all records at laest once,
meaning if initial transfer failed, replay from your logs.

Simple means you can debug the thing,
if you use an ORM with an SQL, what are you going to replay from which log?

Most programmers will disagree with me,
and just use a third party service with guaranteed up time.

But, the key-value store in the browser,
and Desktop Applications based on Web Browsers as the case with Electron is.

Show that, there is a more responsible way to deploy your application,
don’t put everything on servers.

Let them download to their desktop, or browser,
or install a browser extension, or all of the above.

In this case,
a simple key value store is a wise idea.

That comes with no monthly bills,
and your user can save data in a simple JSON format.

---

As to the Application Layer, that needs to be described by you,
but written by AI.

As AI improves, this will become the wiser way of building,
because if you want to change or upgrade something.

You just re-write the requirements document,
that you feed to the AI.

As AI improves, no only do you get your features,
but also more advanced version of your program.

In the begiing, you can actually ask AI,
how to structure the application and ensure flat Objects without inheritance.

---

You should know that your application, is just objects,
and to do something with it, you say.

Application.Commander.Command(‘echo’, ‘Hello World’);
this is just the brain.

On top of this, you start a new project,
and think of it as a remote UI that connects to the brain.

So remote, that you can have multiple Uis,
talking with the brain.

The application I am working on right now,
has both a data synchronization simulation and feature testing system.

Behave like remote user interfaces,
that – remotely – connect to the brain.

---

Please learn good ideas from frameworks,
but don't use them in important projects.

Your final user interface, should use [WebComponents][3],
and rely heavily on simple [Signals][4], Signals are reactive variables.

You set a value through x.value = 7,
and listen to changes via unsubscribeFunction = x.subscribe(v=>console.log(v))

They flatten your user interface needs, when your your WebComponent is removed,
you just call all the  unsubscribeFunctions, and clear the memory.

---

The WebComponents you create, are likely
ApplicationComponent, SceneComponent, ToolBoxComponent.

They are closely related to the Brain,
but their purpose is to visualize it, and let the user execute commands.

---

Finally, the commander and commands,
are useful for a neat little command line, and command output.

But their real purpose, is the UNDO/REDO system,
like data synchronization, this is not something you can escape from.

But it is easy, you just give your Commander a History that keeps a list,
of all the commands you executed.

But, you must think of them as events, events in your application,
when a command is executed, you add an event to your Commander History.

Here is the crazy thing, and event, does not just store the command you executed,
it also stores the command you need to execute to undo the change it represents.

And event has an UNDO COMMAND,
and a REDO COMMAND, redo is for going back, because the user went too far.

So redo is the main command the user executed, undo is its opposite,
the you have to program into your Commander. You need an opposites creator.

And the way you move up and down history,
is by an event popery called active.

So if you just deleted a file, you store that command under redo,
you store a re-create deleted file under undo, and set event as active.

If the user wants to go back in history, Ctrl-Z sets active as false,
which triggers the undo that creates the file again.

And if they decide that they really wanted to delete the file,
and press Shift-Ctrl-Z, you set active as true again.

Which now runs the redo, where we stored the original delete,
and yet again we delete the file.

---

The AI will both explain it in more detail,
and write a first version of whatever your application is about.

This kind of text is how you get started,
we divided your Project into Server, Application/Brain, and User Interface.

You can now approach each of these separately,
and write a first draft requirement document for whichever one interest you the most.

With the aid of AI,
you can now engineer applications while learning programming.

[1]: https://www.youtube.com/results?search_query=PouchDB+Tutorioal
[2]: https://www.youtube.com/results?search_query=CouchDB+Tutorioal
[3]: https://www.youtube.com/results?search_query=What+Are+WebComponents
[4]: https://www.youtube.com/results?search_query=What+Are+Signals+JavaScript
