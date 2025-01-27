---
id: poem-1792
guid: e315c4c8-9df8-417b-8180-4d4861ff9360
title: Vanilla; Or, Programming JavaScript Without The Use Of Frameworks
description: null
tags:
  - furkies-purrkies
date: '2025-01-27T05:25:32.582Z'
lastmod: null
weight: 179200
audio: poem-1792.mp3
image: poem-1792-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 12
---

For those of you who just want to know if it is easier than using a [framework][1],
yes it is, your code lasts longer withut anything standing between you and your app.

You just need to use a tree beneath you app,
Signals for binding; and WebComponents with multiline HTML strings.

---

It turns out that all you really need is a list of Signals,
that you attach to a recursive backbone, where a node can hold other nodes.

This is very similar to a file system, and almost the same thing,
as the Document Object Model.

It is not a Node Tree that you ever restructure,
it is like the filesystem beneath your app.

You can add files into a specific location,
but you don’t move things around.

My structure is application that contains modules and scenes,
and you can think of them as scenes.

Whatever you attach to the scene,
gets rendered by a matching web component.

The tree beneath is the singe source of truth,
like a file system, or Redux, it supports commands or actions.

You open the main scene add a node of type button,
and a matching web component will create a button in the scene.

But don’t think buttons, think reusable components,
they contain multi-line HTML string just enough to create a UI.

And I use the Bootstrap CSS framework,
because they keep it simple and bare.

I never had a need for JSX, ever,
not even a need for coduument fragments.

I just insert the HTML into the dom,
and then query it, attaching events or data bindings.

And that is the last thing,
I keep my data inside signals that are kept in signal like lists in my data tree.

I don’t use normal variables for HTML,
unless things don’t change.

I always use signals, and then subscribe to them,
they instantly give me a value to initialize with, and then I put it into the HTML.

Text input boxes send their data into signals as well,
and they don’t cause any loops as they only emit when data changes.

---

I described a Visual Programming Application, with pan and zoom,
forms everywhere, SVG, and Mutation Observers.

It is about as challenging as things get,
but signals and web components flatten things out.

Finally,
allow me to repeat the key parts.

Everything is sitting on top of a tree,
it is as sturdy as all the well defined location on your file system.

But you can add to folders,
you just never move system32.

Then the UI layer goes on top,
and just renders a location with the correct types of nodes with WebComponents.

And to update things as they change,
Signals, Signals, Signals.

Don’t program without signals, just don’t do it,
ask AI to write you a simple JavaScript Signal implementation, it is 20 LOC.

And before yo ask, I don’t use a build system, just import maps,
I don’t have any module dependencies, I just ask AI to write me a simplified version.

And I never Reconcile my DOM in any complex way, meaning,
I avoid merging HTML.

This is a simple process of updating a flat list recursivley,
but when you have to make structural UI changes on a recursive level.

That means something needs to be rethought,
please, don’t use that, to justify using a Component Tree, on top of a DOM Tree.

Just structure your UI simply,
so that you don’t need to deeply update anything.

Roughly speaking, this is where multi-line HTML strings are useful too,
just think in terms of flat updates, list item.

Rather than nested DOM Nodes, vnodes, diff and patch,
as that is just too much, it is not fair to you as a programmer.

---

Please make sure that your code works 20 years from now,
and that AI will be able to remove defunct frameworks.

And that yo will still be able to recognize and enjoy the code,
that you wrote in your youth, or middle age as the came may be.

In a word:
Vanilla.

[1]: https://gist.github.com/faustinoaq/b19da758fc45155a0b3b10d9f578c5ce
