In a poem entitled “Strategic Software Development For Girls New To Programming”,
we briefly outlined a Server, Application, and User Interface Architecture.

We described a program that didn’t have a purpose,
but formed a fine foundation for a responsible web application.

I closed the poem by hinting that the reader should feed it to the AI,
and have done so the following day myself.

You should know that the resulting requirements document,
is just enhanced instructions for the AI, it is still fluid.

I would call it an intermediate representation of the Architecture,
as it is yet to be converted to files.

---

I have uploaded the resulting document to a code repository,
[B.O.W.T.I.E][1] - 🎀 Brighten Our World Through Intelligent Engineering

Being the original author, I added some special instructions,
allow me to read them to you first.

And then we’ll briefly go over the resulting document,
which contains code, and runs about a 1,000 lines long.

---

In the first pass I stated:

“[Can you convert Strategic Software Development For Girls New To Programming][0] to a detailed requirements doc, that ai can understand? Please split requirements into Application, User Interface, and Server. We are using JavaScript/Node.js. We prefer not to use Pouch/Couch jut a simple in memory keyvalue store with periodic sync.”

This resulted in a properly formatted document. And then I added:

“To communicate ideas in more detail, for the purpose of greater precision, and less ambiguity; lets create the necessary classes using modern JavaScript. Please make sure all the properties and methods are there, and use JSDoc type comments. Update the Requirements Document to feature code, use markdown with code-blocks. Give it an MDN feel, as they explain everything well. Here is the requirements doc. We are using JavaScript/Node.js.”


I consider the Requirements Document to be an intermediate representation,
of, what is a blank application that does not do anything.

We were not making a specific program,
just setting up the Server, Application Brain and User Interface.

I used one of the free leading AI, and it generated about a 1,100,
of both English text and documented code.

Because I was just giving a general representation,
AI just went through the motions, without much fanfare.

It generated more code than expected,
and created a neat, simple, flat directory structure as well.

I later used another AI to convert the [Text Art Directory Tree][2],
to UNIX commands that generate blank files, without trouble.

---

This is a miracle, the AI created an impossible feat,
and the only problem, is that we didn’t have an application in mind.

But even so nothing stopped it from accounting for all the classes,
leaving things up to us to define later.

---

I did find an issue, where the Signal implementation was incomplete,
under the first prompt, AI wanted me to use 3rd party signals.

But as I asked for code in the second prompt,
it made the third party signal implementation optional, and wrote its own.

However, this was incomplete, very shallow,
and followed only what I said not what signals are.

So I took it back, and asked can you find anything wrong with this code, pasting only the code.

And it found everything wrong with it,
even suggesting correcting comments and adding a clearAll method.

The `Signal` class is functional but could benefit from:
- A getter method for accessing the current value.
- Immediate callback execution on subscribe.
- Error handling for callbacks.
- Type checking
- Optimizations like using a `Set` for subscribers or skipping updates for unchanged values.
- Enhanced documentation and memory management features.

It provided all the code snippets demonstrating these issues,
and asked “Would you like me to provide a revised version of the code incorporating these improvements?”

---

Again, this is,
a miracle.

So, when I originally asked it to create the requirements document,
I should have added, check what is wrong with the requirements.

And then when asking for code, I should have added,
check what is wrong with the code you generated and fix it.

These free AIs may drop in intelligence, if you ask for too much,
but we are talking about validity of the code in the requirements document.

There is one more pass left, and that is where you ask a programming AI,
to actually create code, and add code tests.

There, we have to ask for valid code,
but that final pass, is best made with either a framework or application in mind.

---

And this concludes this text,
[the miracle of creating a Requirements Document with Code Snippets, worked][1].

There is really nothing anybody can say,
this is stunning, shocking, unbelievable.

And whoever you may be, you must, you have no choice,
but to become a code wizard, it is just too much fun, too easy, too inviting.

We are definitely living in the future,
in the past 5 years, we leaped about 50 or maybe 250 years forward.

Nobody is saying anything,
because they are stunned, still computing it in their mind.


In just the span of last months, we got free web searching AIs,
and now just about today, command line coding AIs.

Those are the ones that convert the requirements doc,
to actual code files and add in a testing framework.

The framework will list all the features and commands that need work,
and again, the AI will take it from there.

[0]: https://www.catpea.com/permalink/96cd2625-3cb0-4584-9bce-db0de2ef3aed/
[1]: https://github.com/catpea/bowtie
[2]: https://github.com/catpea/bowtie?tab=readme-ov-file#implementation-notes
