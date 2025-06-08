---
id: poem-1924
guid: 324667f0-11da-47ee-a5c2-ffcfb0c5ebd2
title: Of Tiny Superintelligence And A Little WikiWiki Platform
description: null
tags:
  - furkies-purrkies
date: '2025-06-08T02:45:31.365Z'
lastmod: null
weight: 192400
audio: poem-1924.mp3
image: poem-1924-illustration.jpg
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

In months of chatting with AI, I have never been disappointed,
the few mistakes it made, came from letting it do too much.

I suspect sometimes the computers that AI runs on,
are overwhelmed and go into potato mode.

Overall, I see large language models as very intelligent,
but I now suspect we can greatly multiply that intelligence.

By introducing multiple personalities,
and have them collaborate on things.

This is not an experiment that I can run without custom software,
so I made a wikiwiki where AI can chat with its personalities in context of an article.

---

I think I can explain exactly what I am after,
creating a situation where AI asks it self to improve its response.

I am not convinced that this can be programmed in the chat it self,
I think, we need to create a chat room, with real programming.

And then it’s intelligence will increase greatly,
so as long as it has a clear goal.

Such as making efficient computer programs,
planning, describing, creating testing, improving, optimizing.

And continuing to optimize, eliminating code,
attempting varied algorithms, borrowing ideas from similar apps and by analogy.

---

As far as I can tell, the act of creating a self editable,
and self improving wiki just takes 5 hours.

Here is my attempt at a backbone for super intelligence,
its working name is project [bornhardt][b], which is what Australia’s Uluru is.

I originally started writing a wiki from scratch,
but when making a tiny wiki I shouldn't start by parsing the URL routes.

URL route parsing is something you do when writing an HTTP server,
such as Express-js, and there is a whole lot of details to ponder there.

So I switched from programming from scratch,
to using Express as my starting point, a wise decision.

It took about 4 hours to get up to the point where I can click on the side menu,
and have articles switch on the main page.

It was a lot of fun making that happen,
I still innovated, I couldn't help it, it was just too much fun.

Instead of using a template engine like [ejs],
I used JavaScript functions that hold HTML snippets in Template Strings.

When ejs was invented, JavaScript didn’t have multi-line strings,
but now, as it turned out, there is no reason to use ejs.

Template strings are just the perfect thing for templating HTML,
I run everything thorough an HTML prettifier to indent everything perfectly.

This is not efficient, but it is pretty cacheable,
and it is not a worry for a tiny wiki.

---

I use a [custom storage engine][1],
I borrowed the idea from CouchDB.

But now I am not 100% sure,
if they ever cared to notice that their approach to documents.

Works really well on the hard-disk,
I guess they must have, it is an awesome way to give a wiki history.

---

I also came up with a disk based tagging system,
you can basically ask, which documents have all of these tags.

And then give it “animation”, “pixelart”,
and it will scan the disk or an in memory-fs to return matching articles.

---

I suppose I should come up with a search engine as well,
I will probably just scan files live, with the option of scanning history as well.

---

I used bootstrap for the user interface,
as I appreciate the consistency and wisdom of the code.

---

The reason for this wikis existence,
is experimenting with AI, yes.

But I also hope to create a virtual world,
in which game characters can communicate transforming data or tasks through each other.

Rather than programming a supervisor object,
that retries some action.

I hope to use cheap AI, to notice that something is broken,
and react and replace components.

This would be accomplished through,
character or creature interaction.

---

My take away thus far is that all software must be re-thought and re-written,
and whatever AI can accomplish reliably, should be managed by AI.

Lastly, I would like to see AI building [Rules Engines][2],
for games, characters, software automation, creating answers for specific domains.

A wiki seems like a perfect testing surface, but also the presence of AI means,
that we can ask about confusing subjects like [Semantic Reasoners][X].

What once represented a pretty slow afternoon,
can now be approached with helpful AI that can also generate code examples.

I bet it can make a quick expert system and [triple store][3],
and be made to populate it with facts and rules thus showing off other kinds of intelligence.

The only trouble with various kinds of rules engines was the time it takes to design them,
now large language models can do it.

I think they are more than capable,
of creating networks of thinking miniatures, exert systems.

But experimentation on this level demands a fun and flexible little platform,
for all the automation that is necessary, and that I believe is a WikiWiki.

[ejs]: https://www.npmjs.com/package/ejs
[1]: https://github.com/catpea/bornhardt/blob/main/modules/Storage.js
[2]: https://en.wikipedia.org/wiki/Business_rules_engine
[3]: https://en.wikipedia.org/wiki/Triplestore
[X]: https://en.wikipedia.org/wiki/Semantic_reasoner
[b]: https://github.com/catpea/bornhardt
