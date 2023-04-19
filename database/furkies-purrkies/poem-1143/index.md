---
id: poem-1143
guid: a132dd21-fe71-497b-ac47-2de2a82d80b3
title: Programming Is Not Hard; You Just Need Real Context
description: null
tags:
  - furkies-purrkies
date: '2023-04-19T03:23:00.171Z'
lastmod: null
weight: 114300
audio: poem-1143.mp3
image: poem-1143-illustration.jpg
images: null
artwork:
  - https://www.pexels.com/photo/network-servers-on-an-enclosure-6466141/
resources: null
features:
  video: false
raw: true
draft: false
chapter: 6
---

Allow me to explain to you completely and in context,
what relational databases are, and how they work.

---

You might have already heard that databases are like spreadsheets,
they have rows and columns, but that is all you should visualize, rows and columns.

Spreadsheets emphasize cells and have formulas like SUM,
that can dynamically generate cell values.

Database tables, focus on relationships with other tables,
to establish a relationship two tables will share data.

Each table will have a column with the same information,
so that you can say join those two tables on that column.

This is a different trick than dynamically calculated cells in spreadsheets,
but the underlying data structure is the same a grid, rows, columns cells or fields.

---

The next thing textbooks talk about,
is the different types of joins.

But there is only one type of join that you should ever remember,
the LEFT JOIN, or the one to many relationship.

Now before we go any further,
we need to understand what we are doing, speaking in abstract terms is useless for understanding databases.

You cannot understand databases, without a reason, a picture,
an idea, and our idea here is to create an internet version of a music player with multiple users.

---

The first thing we must do, is create a starting point,
and that is the notion of accounts, it is the main database table.

The only thing this table really holds is a userID,
just in case you ever want to support multiple logins per account.

Gmail has a feature, where you can combine inboxes,
that is how a singe account would envelop multiple users.

If we were just to run a LEFT JOIN or establish one to many relationship here,
we would get multiple rows for the same account, with different users.

If you had one account with two users, you would get back, two rows,
they would have the same account number but different user information.

---

Our professor, wold have a huge-problem with this setup,
because the concept of database referential integrity states.

That if you just have one user per account,
then you need a one to one relationship.

And that would be pretty cute,
but nobody has time for that.

We just use a left join everywhere,
this way, we create a consistent tree.

The account is root,
it may contain multiple users.

The account it root,
it will totally contain multiple playlists.

Now when you get into a playlists, and think of it as a root,
then it will absolute have multiple songs.

Now your songs will have multiple ratings,
bob give a song thumb down, Alice gives it thumbs up.

When you are connecting tables together, relating them,
imagine a folder structure.

---

Now we violate another rule, the do not repeat yourself rule,
because we are going top put accountId into evey table. User, Playlist, Songs, Rating, etc.

Becasue we are working in the real world scenatio of making a minimum viable product,
accountId is very special.

Because as your user is moving around the user interface,
they are always submitting that accountId, that information is always present.

So even though we have this tree structure of nested tables,
to get all the songs you only query one freaking table, you say:

Select all from Songs table where accountId is,
and here you plugin in that account id number.

Later, you can run a query to see if the account is active,
and maybe create something complex.

Where you combine account table with user table,
with playlists table and the songs table, and here you will get all songs with account information.

Presumably, this would be useful for some internal company report,
or some graph or statistics, that functionality is there, but you don’t need it.

Because you did repeat yourself,
you put the accountId everywhere.

All tables have an id, but that is one piece of information,
that you never change, you can change an email, or mark account disabled.

But you never have a need to alter an id,
and you should never do that anyway.

---

Now, to make the website go, you now create [beautiful function names][1],
that you will use for your API.

JavaScript, the only language that works in he browser,
and on the server, that is the only language you learn.

Allows you to mark your functions for export,
and then when importing them say import * as playlist from playlist.js

So you are never crating a list of functions, like an array with names,
so when you add an API function such as addSongToPlaylist.

You hit save, nodemon restarts your sever,
and that function is now part of your API.

These functions are conceptually higher than your database,
so your signUp funcion, will execute two queries.

Add account, where you grab the accoun number that the database gives you,
and then add user, where the first thing you do is save the accountId.

And then you put in the email,
password, first last name, whatever.

Encrypt or hash your password,
encrypt means that you have a master password for all user passwords.

Not a good idea,
it just adds unnecessary worry.

If you hash your password, you still get an encrypted string,
but there is no way for you to decrypt it.

It is a one way encryption,
to check if the password matches, during login.

You encrypt the password user is sending again,
and compare if the encrypted strings match.

---

These functions become your automatic API,
when you wrap them in a JavaScript Object Proxy.

An object proxy gives you the ability to intercept the call to the API,
and either say that function does not exist, or execute it if it does.

To create the API object that you apply the proxy to,
you just use a spread operator on the objects returned by “import * as playlist from playlist.js”

In this case the playlist object,
it is now assigned to you api, and you API object now features all the funcions you marked for export in playlist.js.

And here, you create a web socket and http endpoints,
that use application/json and thus can contian information like funcionName and functionArguments, along with Authentication.

At first you present only signIn and signUp,
but you always check for authentication property on the incoming object.

Becasue once auithenticated, you than apply all the otherfuncions to the API,
like uploadSong, or createPlaylist.

When executing signIn, you will actually authenticate twice,
do not optimize that, hoisting your API from anonymous to logged in.

And then performing signIn tasks, are two different things,
this grants you the ability to execute addPlaylist from caommand line for exmple.

Without ever eve needing to sign in, there are different ways to acces your API,
and to account for all of them, you kind of authenticate twice when signingIn.

Rule braking, makes your programs consistent,
and powerful.

---

Now you expose your API object as WebSocket, then via HTTP/S route,
you should call it v1, as in API version 1.

And use the npm commander module, to expose your API,
on the command line as well, just in case you ever need it.

You don’t have to put authentication information int every command,
just set it as an environment variable or a dot file.

Now you are done, you have a headless API server,
and you grab Svelte and Bootstrap, create a UI, and use HTTP/S or web sockets.

To call those neatly named api funcions singUp, signIn, addSong,
which trigger one or more queries on your database…

And return the table data,
that you then use in your interface.

[1]: https://nobackend.org/dreamcode.html
