Vibe coding is about asking Artificial Intelligence to add a feature to a program,
and then only checking if it works, without comprehending the code.

I tried it once, and I discovered that AI placed a data transformer
at the end of the place where it was downloading data.

Technically correct, but it would be very bad if you hoped to reuse the downloader,
because it returns something that’s part of something else.

---

I tested a new, more structurally sound approach,
where you speak very clearly about program architecture, and results were very nice.

The main technique that does the architecture is called a DSL, a dotted notation DSL.
where DSL stands for Domain-Specific Language.

It has also been referred to
as [writing down the code of your dreams][1], which is how I think about it.

---

Instead of saying app.useradd(user, pass), you say
application.account.signUp(user, pass)—it flows.

It’s a language specific to the domain of your application,
and it sounds as English as programming gets.

Instead of crazy functions you often have to look up,
you have account.changePassword, system.sendEmail.

account.upgradeTo(‘pro’), product.purchase(),
home.findAll(‘light’).each(light => light.turnOn()).

---

So, the problem with decorating your program
with a beautiful, dreamy domain-specific language is:

It will, one way or another,
take a lot longer to code everything.

No one can justify an extra month
just to speak beautifully.

And you know, in some cases,
all this beautiful code would take an extra year.

Sometimes, under pressure,
it would need to be removed to avoid delaying development.

So, a beautiful, flowing domain-specific language
is scary, or rather, it was.

---

I spent a few days creating a DSL application framework
with things like application.workspace.loadSaveFile(),

application.commander.history.undo(),
or commander.action.printText(‘Hello!’).

It’s a beautiful thing,
but I avoided putting in code beyond structural stuff.

I didn’t really program the application—
here’s where a thing adds things, and here’s where a thing plugs in with a dot.

---

Then I told the AI to try to fix the program
that I spent all those hours pampering.

It made a very powerful pass,
adding code that the DSL described very well.

I created an extremely sturdy skeleton,
and it understood everything.

I looked at 400 lines of code, and it’s perfect—
there are no sequence problems as I sequenced everything.

---

If you map your program out with nested objects like
application.commander.actions,

and then add all the functions—the stuff that gets executed,
like undo, redo, load, save, start, stop, exit, and addScene, openWindow—

the AI will understand the code as you’re handing it a strong lattice.
You can tell it to add stuff, which is an act of refactoring.

It will do it perfectly
as long as there’s structure for it, like I have a commander with history and undo.

It’s not vibe coding,
because the beautiful DSL shows where things go.

It’s not blind refactoring,
because you know where to add a spot for whatever the AI needs to add.

It will know what to connect it with
because all your naming is very informative.

---

While I have a mountain of tests left,
a beautiful, verbose application architecture

could make vibe coding, which now becomes non-architectural,
as you take care of the structure, pretty much acceptable.

And guess what? It’s readable as well—no spaghetti code,
meaning you can understand where AI put things.

You can grasp the now
relatively clear and flat code.

[1]: https://nobackend.org/dreamcode.html
