---
id: poem-1877
guid: e046f22b-b647-491b-89f9-53308403114c
title: Architectural Programming For Ladies; Or, Teaching Your AI Who The Boss Is
description: null
tags:
  - furkies-purrkies
date: '2025-04-21T23:23:38.571Z'
lastmod: null
weight: 187700
audio: poem-1877.mp3
image: poem-1877-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 13
---

If you bear with me in one more gibberish poem,
we will close the AI programming research chapter.

With the unusual conclusion that it is better to describe code for AI,
than actually write it yourself; freeing you to invent and strategize.

In a poem entitled “[Strategic Software Development For Girls New To Programming][1]”,
we explored a simple AI friendly Application Architecture.

Then, in “[The Miracle Requirements Document; Or Investigating The Power Of Artificial Intelligence][2]”,
we experimented with [letting the AI create a System Requirement Document][3].

Today, we look beyond Requirement Documents,
and put the parts together into a coherent vision.

Ignore the confusing words, just skim over them at first,
and understand that you can build an empire, with just well informed text.

You don't actually want to write the code,
that takes decades.

What you need is to ease yourself into a world of software development,
in this bright new age of ever improving Artificial Intelligence.

Ignore the negative commenters, programmers invested in the old ways of manual programming,
cannot help but to try to push you away from this new road.

But they represent the old ways, the manual cranky ways,
fill of complaints, advice that leads to nothing.

That is the advice of old incontinent men,
that yell at clouds in a desperate search for their medicine.

---

The biggest problem you are facing today,
is lack of competence on the part of AI companies.

There was announcement a day ago or so that the leading AI company,
embedded hidden/non-printable characters for the purpose of watermarking.

You probably can’t sell a WebExtension to convert the characters,
into little Clown Emoji, as it is probably a violation of user agreement.

And, when you create a large Requirements Document, as we have,
you will have to pay for a premium AI to comprehend it.

The leading AI, asked me to log-in, and gave truncated answers,
[for a 404 line Requirement Document][4] a small part of Application Architecture we described.

To address this dumb discovery, large requirement documents,
have to be broken down, and not into parts, as that would confuse AI.

But into stand-alone programs, so the Database part explained in,
“Strategic Software Development For Girls New To Programming”

Needs to become a stand alone product, with its own name,
and likely needs to be further broken down into plugin-architecture.

Plugins themselves, will each need a Requirements Document,
and may eve be further broken down into Classes.

The AI will take care of the class breakdown,
but you need to ask for it.

You will have to ask, “How can the functionality of this plugin,
be broken down into separate classes, and what does the re-assembled main plugin Class look like.”

The requirement sections of your Requirements Document,
will help the AI to create a Class breakdown and re-assemble.

I will now show you an [example of such a breakdown][5],
for Remotable a somewhat scary and still rough Class.

It is just a reactive variable, like X, that holds a value, like 1,
but, the server can update the value, and the program will update it self.

The AI broke the class down,
into State, Subscription, FrozenState, RemoteSync, DerivedState.

State, or Memory,
Manages the internal value, revision, and UUID. Handles all value validation, serialization, and ensures state changes are tracked with revision updates.


Subscription, or Automatic User Interface Updates,
Handles registration, deregistration, and invocation of listeners, and manages debounced delivery of notifications.


FrozenState, or protecting, especially the derived objects from change.
Enforces immutability. Once frozen, prevents any further modifications to the value.


RemoteSync, or a way for a server to inject a value in a smart way,
Handles synchronization with remote peers, using revision and UUID to resolve update conflicts.


DerivedState, or transforming the value into somethin guseful, that must be read only as the transformation provides the value:
Provides .map() for derived, read-only states, and .merge() for aggregated Remotables. Derived/merged Remotables are always frozen and update reactively.

---

So this would be the fine grained architecture of a plugin,
inside a well named program, with multiple such plugins.

---

AI vendors, may not dumb the AI down,
but they will prevent you from getting their AI from processing a 1,000 requirements document.

And you know, large language models are not perfect,
breaking something down into simpler stand-alone parts helps them.

---

But at every division, perhaps even on class lever,
you need to approach the code Requirements Document first.

You don’t want to code the thing, you must stop yourself from coding,
even today’s AI will do it better, and in the future, that will certainly be the case.

---

Finally, allow me to clearly state,
that an Application, large or small, is no longer code based.

It is now a directory tree of requirements documents,
and architectural specifications, such as class breakdowns.

That describes multiple, well named, stand alone applications,
that integrate together in simple and obvious ways.

Remote via HTTP calls to various URLS, exactly like browsers do it,
[and Libraries, via nice, tidy and predictable API][6]

---

You don’t have to learn programming,
but you will pick it up along the way.

More important than code,
are the architectural patterns.

And they are a human invention,
made to simplify programming.

They will pose no challenge,
and all you need to get started.

Is to watch videos about Application Architectures,
talk to AI about what Application Internals work.

And then as you start reasoning about your Applications,
break everything down into small programs, their plugins, and even classes.

The way you keep track of all this is just text,
your own wiki, and tables of contents that you memorize and rely on.

---

This is not about sidestepping programming,
this is a programmers dream.

This is about having a team of powerful programs,
do all the coding for you.

As you drive your Side-projects, Startups, and Companies,
often staffed primarily by AI, into the future.

You are not meant to be the programmer anymore,
today, you are the CEO, the project lead, and the senior strategist.

---

[I recommend that your first undertaking, is a desktop application][7],
that puts all of the above into a simple user interface.

Where not only you build an empire,
but others can buy the program, and built their dreams too.

[1]: https://www.catpea.com/permalink/96cd2625-3cb0-4584-9bce-db0de2ef3aed/
[2]: https://www.catpea.com/permalink/68c192aa-29bd-4c33-bfff-3de0e9e84d78/
[3]: https://github.com/catpea/bowtie
[4]: https://github.com/catpea/liminal/blob/cd6f1395c6cf7e146bb2b127397c6003ca919f1f/remotable/REQUIREMENTS.md
[5]: https://github.com/catpea/liminal/blob/5df51971e73a95eb7e1e882e933945377ba66666/remotable/COMPOSITION.md
[6]: https://nobackend.org/dreamcode.html
[7]: https://www.literatureandlatte.com/scrivener/overview
