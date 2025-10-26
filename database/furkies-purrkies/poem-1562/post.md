Visual programming, like any kind of programming,
can get pretty complicated.

If we were to base visual programming,
on standard programming concepts like loops and ifs…

We would quickly defeat the point of visual programming,
which is easy to comprehend programs.

Low level constructs are useful to get things started,
but too primitive to use in creation of large programs.

---

Furthermore there is a problem,
because computers have multiple CPU/s.

So from the get go,
we have to write programs with parts that may run at the same time.

How in the wold can you manage such a feat,
not only tracing the flow of your program as you design it.

But 8 or 32 flows of your program at the same time,
when do you know all the flows completed, even.

---

In comes, the [Worker Queue][1],
it is a list of things that need to get done.

Instead of loading a list of blog articles that need processing,
and then pushing them down a simple pipeline.

Where it is likely,
that only a singe CPU core would process it,

And you have to keep track of,
a no more data signal, along with too much data, or the slow-down signal.

You load your blog articles,
and push them onto a worker queue.

In visual programming, that would mean,
connect your JSON Feed, where you blog articles are, to a Worker Queue Node.

Pretty much,
a single swipe of a mouse.

The worker queue, has a single output,
that spits all the data out once it has been processed.

That is the DONE signal,
you get another feed, this time a list of transformed articles.

And it has the marvelous,
worker input socket.

Where, you put your program in,
conceptually your blog article processor function is a worker.

So you have, JSON Feed Box, a Worker Function Chain Of Boxes, plugged into the Queue,
and an output port, that spits out another feed you can iterate over.

You can configure the number of workers to match your CPU core count,
or set it to any number including 1.

If you are going to process one article at a time,
don’t wait for the whole list, tap into the job done output socket.

If you can afford to initially process your blog articles,
with 32 workers crunching data at the same time, go for it.

But then need to start worry about memory as things get complex,
you send the list to another queue, this time process one item at a time.

---

You are not limited to the CPU cores,
of a single computer.

Imagine you have 128 articles in your blog,
and you want to clean them up.

If you have a Raspberry PI Cluster,
of say 32 computers, totaling 128 cores.

You can theoretically, have a worker on each of those,
distributing your worker queue processing to theoretically run 128 times faster.

Go from two minute wait time (if your program ran single threaded),
to two second wait time.

There would be bottlenecks,
but you could deal with those.

The theory here matters the most,
as you can go beyond the local network, now.

And request, 128 powerful servers,
which will get booted up, just for a moment, and won’t break the bank.

This kind of dynamic worker network expansion,
is called self provisioning, or automatic scaling.

If you wanted to let your users,
to convert their blogs to video, you would want a self provisioning network.

As it could theoretically scale, to meet all demand,
and since you know ahead of time how much it cost to run the remote workers.

You just include that in what the user pays,
so you don’t worry about the cost, and it wouldn’t be to expensive.

---

There is one more interesting use of a queue,
that I must mention as it is just too enchanting.

If for example, you needed 128 cooking recipes,
with some strained but interesting background stories.

You could put that in a queue, and create a worker,
that posts a bounty somewhere.

And a lady comes in, shares her recipe gets paid,
and your worker marks that job as solved.

Later sending it to another queue that verifies quality,
perhaps even with the use of AI this time.

---

These functions that comprise a worker,
do resent a challenge to the novice programmer.

But, this is a solved problem,
and Apple Automator is a neat example of that.

It is just a comprehensive library of actions
with some options that you configure,

Automator is a visual programming language,
that chose to only allow for two ports, input an output.

And rather than lines,
the UI designers created the idea of Blocks that go on top of the other.

---

For the sake of completion, the application framework,
that wraps these feeds, queues, and workers or automations.

Is event based, I once called Event Based programming,
Thought Programming.

So you just emit events such as, load initial JSON feed,
program complete, save the result.

And you setup listeners, that hear those events,
and respond with more actions such as load from URL and save to disk.

---

So visual programming done right,
does not bother you with ifs and loops.

It brings out the Elite, Exclusive, and Luxury patters,
that guide your hand.

It is of some note, that the more luxurious the pattern,
the uglier it is in standard non-visual code.

It is just hard to track everything,
as there are no shortcuts here you are operating a virtual machine.

But once you move up to the higher generation of programming languages,
then it is just a couple of boxes, as the hard to imagine machine becomes visualized.

[1]: https://www.youtube.com/results?search_query=What+Is+A+Worker+Queue
