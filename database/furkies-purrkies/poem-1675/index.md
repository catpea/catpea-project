---
id: poem-1675
guid: 3b536ba1-c4f3-44ce-807d-bcc25fe32e51
title: A Good Starter Project For Learning JavaScript, Is A Primitive WikiWiki – A Tiny High Level Overview
description: null
tags:
  - furkies-purrkies
date: '2024-10-02T02:55:07.085Z'
lastmod: null
weight: 167500
audio: poem-1675.mp3
image: poem-1675-illustration.jpg
images: null
artwork:
  - https://catpea.com
resources: null
features:
  video: true
raw: true
draft: false
chapter: 11
---

Do not wait for standardized education to magically click,
it won't happen, you have to learn on your own.

Programming is safest and most rewarding,
start as soon as you can, don't wait for college or High School even.

Learn programming,
and fix education.

---

You will need to write the wiki with the help of Node.js,
just look for a [Node.js tutorial video][0], and [how to make an HTTP sever][2].

Let us code like it is 1994, the main page of a WikiWiki,
is just called Main, with capital “M”.

We’ll be using just text files for storage,
so we'll write to a file named Main.txt.

Which brings us to the user interface,
for which you should use [the Bootstrap CSS framework][1].

These developers are quite wise,
and hard to beat.

---

You can just copy their HTML page, with links to Bootstrap hosted on a CDN,
CDN is a content delivery network, it means it is a mostly reliable way to get the code.

You can’t just output their HTML file,
that is just starter code.

You have to explore HTML Examples and Bootstrap Documentation,
and copy, paste and modify the HTML.

At this point you will need a server side templating engine,
to keep up with WikiWiki traditions.

[EJS][3] is very good as it allows you to use JavaScript,
To do your programming.

EJS runs on the server, within your Node HTTP server,
or Express JS is you choose that.

And now all you have to do, is create two URLs or routes,
one for viewing a file, and one for editing.

Viewing a file will just read Main.txt,
and have EJS print it into your Bootstrap Template.

But editing that file, will require an edit page,
with a form contain an editable textarea with the contents of the file.

And a little input box, where you can enter a message,
about what you changed.

You store that message away in a Main.log,
it is an append only log file, where everything is prefixed with a timestamp.

---

Along the way you will discover various tangents,
and you should follow them all.

For example, [EJS][4] is not the only contemplating engine,
[Handlebars][5] and [Moustache][6] are made to keep JavaScript out of templates.

The idea is not to frighten non programmers and security experts,
EJS has to be used correctly to be secure.

This is how you are introduced to,
Web Application Security.

All user input has to be isolated and considered tainted,
until you bless it with string sanitation.

As [security vulnerabilities come up][7],
you learn [how they are exploited][8], and [best avoided][9].

---

Finally, my second, or alternative recommendation is a Honey Pot,
a Node HTTP Server that accepts just about every thing.

Printing out some unique random nonsense,
like, firewall breached launching 7 Visual Basic proxies.

Here you would be monitoring the HTTP requests,
to see what automated bot attack are up to.

Where the hacked server are that are spreading the malware,
here you are chatting with evil robots.

This could be more exciting than making a WikiWiki,
though I recommend both projects.

---

The simple starter projects are something you should return to,
as you learn more and more.

And in an effort to beat your older version,
make it simpler, more secure, or even more beautiful.

[0]: https://www.youtube.com/results?search_query=JavaScript+Programming+Course
[1]: https://getbootstrap.com/
[2]: https://www.youtube.com/results?search_query=Node.js+HTTP+Server+Tutorial
[3]: https://www.youtube.com/results?search_query=EJS+Tutorial
[4]: https://www.npmjs.com/package/ejs
[5]: https://handlebarsjs.com/
[6]: https://github.com/janl/mustache.js
[7]: https://owasp.org/www-project-top-ten/
[8]: https://security.snyk.io/package/npm/ejs
[9]: https://www.npmjs.com/package/validator
