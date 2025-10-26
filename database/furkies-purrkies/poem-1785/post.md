Yes, you can graduate High School,
without mastering programming.

If you do, you will be forced to work,
under the threat of hunger and homelessness.

College will not help you,
they’ll just take your saving and force you into loans.

You need power, in your mind, that works,
that you know is yours, and that creates results.

That is computer programming,
the first thing you learn, is that memorization is not education.

You need to dream, imagine, invent,
and practice programming daily, by writing ever larger little projects.

---

We are about to talk about a function from RxJs,
a toolkit, that is hard to understand.

Learning programming, by starting with RxJS,
could considered, an assault.

But we will talk about just one function: combineLatest,
the authors of RxJs don’t call it a function, they call it an operator.

This is not an RxJs tutorial,
I just explain the dynamics of such a function.

---

We are also not doing conventional programming,
times have changed.

The old way still has it place,
but as tiny functions - or as Rx (very neatly) calls them operators.

The reason for that is that people use programming frameworks,
which exposes that everyone has trouble with keeping track of things.

If they can’t program vanilla, they sure as sunshine,
will never be able to comprehend their program structure, as it is not their own.

---

combineLatest accepts data from multiple sources,
that yous hould imagine as pipes, think communication cables.

It combines, the latest value, arriving from each of those pipes,
and sends the combined data as one.

Please be aware, that in order for it to know when to send the combined data,
it needs to know how many pipes are stuck into it.

And it must wait, until data comes from every one of those pipes,
if you got three pipes stuck into combineLatest,
it will never send data from one or two, it will wait for all three to bring data.

It combines the latest values from each of its inputs,
and sends it along as its own output.

---

Practical use, you have three web pages, that you are waiting for, to load,
each of them will send you status, either loading or ready.

And you want to check if all pipes say ready,
before you send out an action to let your application extract data.

One, you will be never bothered with empty values, null, or undefined,
once you start getting status information, it will be either page-loading or page-ready.

JavaScript has an every function, that you can run across all the status info,
and when all are page-ready, the every function returns true, otherwise it is false.

Remember you will be notified as each pipe sends in data,
that is a perfect time to check is every status page ready.

And that is when you will output some action packet,
that will be interpreted into a command, down the pipework.

I would wait to web pagers, to extract data form the,
so the action would be, everything is loaded start data extraction.

---

If any of this made any sense to you, that is good,
but my goodness, you should never need such an explanation.

[Look at RxJs combine latest documentation, to see the disaster][1],
neither the singe sentence explain much plainly, nor is the marble diagram helpful.

Certainly not for a cheerful peron,
having a nice afternoon, and hoping to go on a walk later.

---

Which brings us to visual programming,
where you don’t need an explanation.

Because you can see what combineLatest does,
with your won eyes.

[Visual programming languages must show you how data flows][2],
and every marble must reveal the data it represents.

If you were shown three pipes connected to combineLatest,
slowly sending a packet their its way.

You would immediately notice,
that it waits for all packets to arrive before combining them, and passing them along as one.

This is not a computer game approach to learning programming,
this is programming.

Even if you don’t end up using visual programming,
you still learn, Rx, functional programming, and reactive programming.

---

I need you to to understand that it is just boxes with ports,
and the ports connect with lines, and boxes represent operators.

Learn JavaScript, use Bootstrap for windows, SVG for lines,
and Agent Model programming as a more beautiful replacement for Rx.

Just as AI to give you a JavaScript version of OTP/Erlang,
and know that you are just sending and receiving between objects.

But you don’t use addresses, the pipes, pass the packets for you,
so you just send send, and the pipe will deliver your data where it is connected to.

---

Please do not wait for the era of visual programming languages,
use the opportunity that it is not here yet.

And not just master a trull powerful and beautiful ind of programming,
but instead of paying for college or universe.

License your software for them, for fees proportionally as high,
as those that they would chare you.

---

Mark my words, the era of visual programming languages is coming,
because the AI can easily generate any kind of operator you could wish for.

Code will move away from questionably useful frameworks,
and state management flows, to flows that you can animate in a debuger.

Packets that anybody can track,
[by just watching them flow and transform through pipes and operators][2].

[1]: https://rxjs.dev/api/index/function/combineLatest
[2]: https://catpea.github.io/mawp/
