---
id: poem-1937
guid: 79a0786e-b9d9-4ae5-a864-8aeff6fcc196
title: "The Secret Application Sauce; Or, SPA Plug-ins And The Homework Assignment"
description: null
tags:
  - furkies-purrkies
date: '2025-06-20T16:25:35.234Z'
lastmod: null
weight: 193700
audio: poem-1937.mp3
image: poem-1937-illustration.jpg
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

“Good art changes lives.”

This week we talked about Artificial Intelligence,
and how it can create your applications.

---

We have learned that if you give it your idea,
and ask for a requirements document first.

Instead of asking for code,
you ask for an intermediate step.

In which you can double check and refine key items,
in plain english language.

And then you try to generate the application,
with expectations of bugs that you have to explain to the AI,

It your going back and forth, you can hit the reset button,
withut losing too much progress.

By asking the AI,
to convert your program back to the requirements document.

You may try asking it to save some of the code you got working,
in an appendix so that the next re-generation is more informed.

---

But there is a rather large problem,
eventually you code will be too be big.

And you may wish to separate features out anyway,
just so that you can make them optional.

---

I asked AI about [application plug-ins][1] today,
with focus on on AI friendly code.

Here is what it had to say:

That’s a *superb* question—and one that gets right to the heart of **human-AI collaborative coding at scale**.  You're designing a system *not just for users*, but for **yourself and an LLM working together**. That changes everything. The architecture must be not only **modular and extensible** but also **navigable, explainable, and contextualizable by an LLM** with limited memory.

Here is what to focus on:

Explicit structure, configuration over convention,
LLMs can't infer large codebases without guidance.

Uniform plugin contracts, predictable plug-in structure,
makes reasoning and code generation easier.

Registry-based discovery,
lets LLMs "scan" functionality without loading every file.

File separation (1 plugin = 1 file),
keeps context sizes manageable.

Flat call graph (low indirection),
avoids LLMs getting lost in multiple layers of abstraction.

Metadata, and Self-describing plugins,
Makes summarization and documentation easier.

This means that evey plugin has a name, description, type,
it may mention what it provides.

And then all plugins have a simple init function,
that will receive the application object it self.

Here it can access app.events where it can subscribe-to and emit event,
and mountUI where it can append it self to some UI selector or zone.

AI wants simplicity,
just give the whole application object to the plugin.

And make sure that good metadata describing the plugins,
and maybe even what they provide, exists.

---

The result of this, is you having the ability to add and throw-away plugins,
without harming the application.

One plugin per file, is trouble for sample projects,
but it makes sense, because when you include all the plugin code…

The free AI runs out of context memory,
but eventually even premium AI may have trouble with one file.

When everything is split into plugins,
you will not encounter any problems.

Make plugin architecture part of the requirements document,
and at first while the applicaion is still small, let the plugins sit in the index,.html.

Once things start working, pull them out,
and uses an AI that can scan multiple files, that works with file systems.

---

Just to say it again, your plugins need to have an initialize or init function,
and the application of app object will be passed in as the first and only argument.

Here you will hook into the app events, UI, bus,
and even helper funcions.

This is one step out of of index.html,
you are not adding any other layer than plugin with initialize.

You must protect the AI,
from confusion.

---

Now let us talk about homework,
and graduation.


Because the self educated never get a break,
you are receiving homework for this weekend.

You don’t have to turn it in,
becasue there are no deadlines in my programming class.

But, once you understand what it is about,
there is not much you can do to stop yourself from doing it.

So I ask you to get plenty of rest,
touch grass often, eat your vegetables and drink plenty of water.

---

Sit down for this one,
because like I said before…

The world has changed,
it will take some time to understand it, and get used to it.

---

You are to ask artificial intelligence,
to create a drag and drop visual programming language.

[You can use source code I generated, as a stable seed][2]

But you have to unstruct the AI to use functional reactive programming operators,
written in vanilla JS, to code your visual programming language.

(You can ask it to use Rx.js
or Bacon, or ramda if you wish.)

And then to allow using those functions,
in the programming language it self (See [Node-RED][R])

You can ask it to pop up a modal search box,
that means tell the AI to use latest [bootstrap from their CDN][B].

And then once the user interface works,
instruct the AI to replace the code of the visual programming language.

With, programs that run on your visual canvas,
continue asking the AI to move everything into the visual programming environment.

Until the visulal programming language,
is written in it self.

Upon completion for this task,
which may take anywhere between one hour and 25 years.

You may consider yourself a graduate of the CPU,
and a programmer of the Brave New Era Of Artificial Intelligence.

Please remember,
what I said about the vegetables.

[1]: files/plugins.md
[2]: files/demo.html
[R]: https://nodered.org/
[B]: https://getbootstrap.com
