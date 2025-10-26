Let me tell you in the first paragraph,\
use a slow computer.

Slow computers are almost always single board computers (SBC),\
little over the size of a credit card.

They should come in a kit an cost less than $200 dollars,\
buy from the company that makes the kit, as others may be artificially inflating prices.

You should do your own research, but the computer that comes to my mind,\
is called the Raspberry PI.

More specifically,\
"CanaKit Raspberry Pi 4 8GB EXTREME Kit".

This is priced at $169.95,\
I think that is somewhat fair, for a full kit that get a computer going.

You will need a monitor, these go for about $70,\
but no more than $100.

The Raspberry PI 4 does support two monitors,\
you don’t have to get them both at once, but the more room for terminals the better.

---

When learning or just starting to get good at programming,\
you are faced with multiple ways of accomplishing a task.

The Perl Monks often quoth Larry Wall,\
"Tim Toady" spelled "TMTOWTDI", which means “There's More Than One Way To Do It”.

While that is true in a broader context,\
to be good at programming you have to chose one of the fastest ways.

---

Even more important than having a way to develop a nose,\
for efficient programming, by means of a computer than will tell you when you are wrong.

Is gaining this beautiful ability to see slow code,\
just when you are starting out with your programming.

What a marvelous invention, this ability to navigate the programming world,\
not by listening to others, but simply listening to whether or not the CPU fan comes on.

---

More than that, you don’t really need a teacher here,\
what could they possibly know that you can’t know better by being efficient on an slow SBC.

And speed matters, while desktop computers are getting faster,\
the code that we write today is likely going to run on a starved virtual machine.

Over at some corporation, trying to squeeze every dollar,\
for all the distributed code repositories, their build systems is what gets you.

With all these fast computers everywhere,\
your build system is going to be charging you per second.

And while every second counts,\
it is the people who don’t count them that lose.

An un-optimized clunky and confusing system,\
not written with efficiency in mind, is a ticking time bomb.

Few extra equally inefficient additions,\
will make the system come to a crawl - if you are lucky - mostly it is game over, try again.

---

You maybe thinking to yourself, that you can rely on bench-marking,\
on a speedy system, but that is always a lie.

Especially when you work hard and are always short on time,\
a fast computer will constantly tempt you with shortcuts, or cake, as some call it.

A slow computer, is like having a responsible teacher,\
staring at your every move.

---

In closing,\
I will give you some examples of efficient code.

Node streams, from the realm of node.js,\
a modern JavaScript ecosystem for the server.

Allow you to process binary files in chunks,\
when working with a large video file.

A slow computer will force you to stream the frames through your program,\
you will never load the whole thing into memory.

This applies to working with text based data files as well,\
you will structure your text or JSON so that you only consume one line at a time.

This allows you to save memory,\
and prevents you from parsing the content all at once.

And because you are writing efficient code from scratch,\
everything you do will be forward compatible with efficient processing.

---

You don’t always need to save on the memory,\
for one, in-memory databases with a log and periodic disc or card sync...

Are an efficient way to deal with frequently accessed data,\
that may need generic methods for sorting.

There will be opportunities to simplify things,\
that you will know to ignore, in order to protect the efficiency of your code.

---

Two examples of disasters, are the Java programming language,\
not really related to modern JavaScript, which is just too slow to bother with on SBC’s.

And I remember an important government website crashing because it used,\
an XML database, with XSLT style-sheets, and almost certainly ran on Java as well, though it could have been PHP.

I am assuming a company stepped in, an not only setup a memory cache server,\
but also probably replaced the XML database with something that scales.

Both the memory cache server, and the replacement database,\
would have been written by programmers aiming to write efficient code.

---

If you are curious about scalability,\
know that in a world that uses multiple computers on a network...

(Meaning that by adding more computers it can scale,\
to handle higher processing loads)

You don’t write code that executes in your program,\
but rather, post code to a central server, called a processing queue.

And then two dozen computers,\
which you can simulate with $30 Raspbery PI Zero.

Check the task out, perform it, usually execute the function,\
that ordinary runs in your program.

And check the result back into the processing queue,\
which will notify your program of the task’s completion.

This kind of architecture is said to scale,\
purely because you can throw more computers at it.

And thus without thinking,\
increase the speed at which the jobs in the queue get processed.

If you are interested in experimenting with distributed processing,\
I recommend the Open Source [ZeroMQ](https://zeromq.org/).

Which will allow your networked workers talk to the queue,\
and the queue back to the task posters.

---

Don’t try to become an efficient programmer just to get a good job,\
the prestigious companies will almost certainly treat you like a nobody.

And will be unwilling to go over $500,000 per year,\
a good and efficient programmers saves so much money that a $1,000,000 per year is a bargain.

But incompetence will always hope to cover your abilities with two coders,\
and instead hire programmers with no interest in writing efficient code.

---

Just like you are meant to find your meaning in a quest to become a Great Being,\
by means of reliable self education, authentic and hard earned knowledge, and resulting wisdom.

You should also accept the responsibility for building your own company,\
you can easily demonstrate to your investors why your systems are superior.

And earn more, as well as learn more,\
the if you got a job at a prestigious company.

Don’t waste your time on hoop jumping and diplomas easily begotten,\
by means of memorization and cramming.

Aim to learn for real,\
because that is precisely what real life **always** demands.
