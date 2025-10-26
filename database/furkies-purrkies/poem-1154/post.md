There used to be just two kinds of hackers,
the beautiful, and the scary.

But there is many kinds now,
most are not worth mentioning.

The mightiest hacker,
is always the programmer.

They are looking at security top-down,
whereas plain hackers look at it blind-up.

If we just had one paragraph to describe what they want,
I’d say privilege escalation, to put it simply, to get to the next level.

No matter how you look at it though,
it is all about having fun.

---

And not having fun,
is actually the hardest thing to achieve in hacking.

Allow me,
to explain.

Internet is old, made for old computers,
which is great, because it means stuff runs fast on new computers.

But old also means, limited,
wise, but limited.

---

Let us examine the HTTP protocol that you use every where,
it is often called stateless.

But, what that means,
is that a server has no memory for you, and thus or of you.

But no single server, is ever expected,
to handle all the requests you are making.

You see, because they have no memory for you, and of you,
you can have 50 servers in different parts of the world.

And it simply does not matter,
which one will handle your request.

Sine they have no memory,
they are all equal, and equally unaware of who you are.

This is amazing and auditions, and rebellious,
because you can servee your website…

From a cardboard box of old phones,
or used up single board computers, that don’t even blink their LEDs anymore.

Your hardware can be so old,
that it may not even have LEDs.

So this is already funny,
the mighty HTTP, is nixie tube ancient.

---

But it gets funnier,
because the login feature of a website, demands memory.

The server needs to remember, that you have logged in,
or it will just keep asking you for username and password at every request.

This is where the cookies come in,
your browser remembers data for the server.

And then each time you make a new request for a page, or image,
it sends all that data along with it.

---

What this means, is that your login information,
is in the browser.

What that means in context of hacking,
is that you can forge, manipulate requests to a server.

You can send whatever memories you want,
a hacker can tell the server that they are anybody.

They are after all sending in the memory,
that the server needs to recognize you.

You see how funny that is,
because HTTP servers are so primitive, and thus super fast.

We have to send in memory, or state,
and in that memory is our login information.

So a hacker can manipulate that state,
it is all just user=bob, or account id=5.

When your username and password passes the test,
the server gives you the thing it can remember you by.

So that your browser can send it in,
next time you make a request.

---

This is the funny part,
hacking HTTP servers, or websites is the natural state of things.

The more mature hackers, take several weeks,
to study a website, they have a list of items that takes them weeks to check.

And the first item, is, what is the server sending back after a user logs in,
and if it is account id=5, what happens when I change it to account id=1.

This often results in gaining administrative privileges,
because the first account added to a system is the administrator id=1.

When you hear about [data leaks, or data breaches][1],
this technique is still responsible for some of them.

---

So as a programmer, you can’t just program like a normal person,
you are not allowed to write rational readable code.

It has to be a maze, a twisted upside down machine,
that by it’s very design, makes things impossible.

So upon authentication, you can’t reply to the browser,
with account id, or hackers will start changing that number to get at other users data.

---

So let’s say there is a man with a very long checklist,
let’s call him [Mallory][0].

Tasked with back-engendering,
our very thinking, when we programmed the login system.

He wants to know, who we are,
how we do, do we we have class or just a diploma.

So he he singns-up to our website,
doesn't even bother at looking at the HTTP data here.

Then he signs-in,
[and now, Mallory looks at the server response][2].

The memory, that he is put in charge,
so that the next time the browser makes a request the server will recognize him.

It is going to be a cookie, because browsers automatically keep track of those,
and always send them back to the server.

If he sees account id, he goes to lunch,
and has the intern finish up.

If he sees username, he knows that it is baited,
and can infer that there are active countermeasures in place.

But that also means, all the programming is defensive,
and defensive coding, is complex coding.

Complexity,
enlarges attack surface.

The only thing we can send back is a huge random number,
meaning that if he changes it so something else…

There is no way, that this number,
will be valid, in fact it would take hundreds of thousands of years, to guess a valid number.

And we must never send in an actual account number,
that is precious information that can absolutely be used elsewhere.

We need to create a session id,
that will expire in 8 hours.

And send that out to Mallory,
this ID will be uses when he resumes his work the next day.

Here, we need to setup a new server, but not HTTP,
this will be a database server, it will be beefier than out HTTP hardware.

And with each successful user login,
we will generate a new session ID, and save that in the database, until its expiration.

So out 50 HTTP servers,
now have to connect to a much beefier database server.

Again, it is more complexity, Mallory will infer that there is database server, because we must keep those session IDs somewhere near the user account.

He forced us, to enlarge our attack surface,
but we did protect the account number, by sending him just a temporary session id.

---

Mallory is not alone, he is part of a large team of retired programmers,
who put together a Penetration Testing company.

The people in the cubicles around him,
are completely out of control, they don’t have anything in common.

You can’t call them geniuses, or brilliant, of gifted,
they don’t belong to any group.

They don’t dress the same, they don’t really care about their fancy cars,
they never watched TV.

They never tried to cram for a test in college, as this would waste their time,
time is precious, and can only be committed towards authentic things.

---

There is no way in hell, will not break into your system,
the elevator problems you had last week, were staged.

The reason that list is so long, is that they have to keep going,
even though they already have your passwords.

Their job is to find all the vulnerabilities,
so that hackers can’t break into your system after you launch.

---

This does not mean that programming is hard,
it means that you aren’t just writing programs.

You are wrapping your programs in active countermeasures,
in hoes of defeating Mallory.

You have to check for cookie tampering,
check if someone changed a session ID.

You have to wrap your program features,
in access control lists, where you always check if a user has permission to execute a particular function.

The final and the funniest thing, for this text,
is that you don’t have the ability to block Mallory’s requests.

He never uses his real IP address,
he may not even use the same IP address of browser fingerprint twice.

There is no way, to block new hacking attempts,
and in a real world scenario…

Your website will be exposed to tens of thousands,
of automated bots scanning for vulnerabilities, and errors that programmers make.

---

There are no jobs more exciting, than programming,
none, and no sport, no computer game, no game of chess, will ever come close.

There is only one thing you can do here, and in fact you can't stop your self from doing it,
to prevent yourself from learning programming by building a honey pot.

A website specifically designed to trap bots and hackers,
so that you can learn what they are up to, and how to defeat them.

Don't be scared, this,
is an invitation.

[Welcome, to the world of programming][3],
it will be fun, and pretty funny, too.

[0]: https://en.wikipedia.org/wiki/Alice_and_Bob
[1]: https://en.wikipedia.org/wiki/List_of_data_breaches
[2]: https://www.youtube.com/watch?v=gTVpBbFWry8
[3]: https://www.youtube.com/results?search_query=node.js+tutorial
