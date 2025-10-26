It depends where you start,

start someplace easy and neat.

[Modern web](https://www.youtube.com/watch?v=6ffUHK7o5yI) is a [mix of several technologies](https://www.youtube.com/watch?v=gT0Lh1eYk78),

and each \_can\_ be [very overwhelming](https://www.youtube.com/watch?v=s-pCNqqUbfI), not to mention all together.

But the [web is unfortunately tough on all](https://www.youtube.com/results?search_query=programmer+burnout),

even hardcore programmers.

As a lead programmer, [you don't actually have to know a programming language](https://www.youtube.com/watch?v=wwbM63-LFD4),

[managing the creation of your program](https://www.youtube.com/results?search_query=how+to+become+a+program+manager), is [far more powerful than writing it yourself](https://www.fiverr.com/categories/programming-tech/web-programming-services/web-application?source=category_filters).

---

[Hosting on the web can involve a lot of complexity](https://www.youtube.com/watch?v=H8K-Rg_7Tbo),

and you probably don't want to rely on any company providing application-specific services...

With the exception of the [operating system you pick](https://www.youtube.com/watch?v=iox7fr7p5Hc),

and the [hosting company](https://www.youtube.com/user/LinodeCloudHosting).

And even with that, you already committed to [owning a web server](https://www.youtube.com/watch?v=wsh64rjnRas),

the moment your server goes online, there will be [automated tools scanning it for exploits](https://www.youtube.com/watch?v=7pJKBL9x6bY), and trying to guess the password.

---

The computers [scanning](https://www.youtube.com/watch?v=4imIIKEK5gc) or trying to break into your server, by the way,

are hacked, they are the ones that the automated hacking programs already broke into.

Any other traffic will be coming from [Tor or VPN](https://www.youtube.com/watch?v=U8pCRMrbSl4) networks,

often times the location of the hacked server is obscured.

There is nothing you can do,

often there is nobody to care that their server got hacked.

The moment one gets shut down,

couple more will get hacked elsewhere,

Unless you want to run a [honeypot](https://www.youtube.com/watch?v=0WUaI2pNiPI) tracking those servers,

you probably don't want to program web applications unless it is something big.

---

[As far as web goes, you may wish to start with serverless functions](https://www.youtube.com/watch?v=wWEID0d6wfo),

if you application is small, then you are going to be somewhat worried about performance.

But the serverless pattern is hard to beat,

when it comes to worrying about growth.

And it is actually a nice way to start programming,

because you just create simple functions.

These functions are executed as needed by nameless, random servers,

once you start noticing that you are running out of servers, you simply add more.

These servers can be though of as workers in your company,

and during development you will probably only need one.

And one neat thing about those servers is that,

is that there is nothing special running on them, so you can just reset them.

All the functions that you and your users need to have executed, [go into a task queue](https://www.youtube.com/watch?v=HAj7F37SfG8),

and then these poor nameless servers, start executing those functions.

On the internet every millisecond counts,

but it is interesting to have your worker-servers at home just to envision the process.

Normally, I wouldn't mention this, but [this is how the modern CPU works](https://www.youtube.com/watch?v=Iz0MFOKmmDY),

you need to have multiple workers even in your smallest programs on your own workstation to take advantage of the CPU.

---

But notice how phone apps use the Phone CPU,

and it is the worst CPU to use, it is slow, battery powered, and you need it for emergencies, and for answering the phone.

At the same time, if there was one large company trying to keep up with the processing power needed to make all the apps go,

they would need a large and complex operation.

Apps, that you pay for, burn up your own CPU and battery power,

they are not web applications, they are resilient, decoupled, distributed.

They are clearly a success,

they make the phone more useful.

---

But as far as complex [Graphic User Interface](https://www.youtube.com/watch?v=XIGSJshYb90) applications go,

put them on the desktop, at least at first.

Even with the crazy restrictions that popular Desktop Operating Systems created,

the walled gardens, non-free developer networks a Desktop is still a good target.

---

For one, when you create a desktop application,

it is not going to be instantly attacked by hacked computers.

And if it is a good idea, like [HyperCard](https://www.youtube.com/watch?v=FquNpWdf9vg) was,

you can sell it for a good price.

---

When developing for the Desktop should use a base like [electron](https://www.youtube.com/watch?v=8YP_nOCO-4Q),

or [NW.js](https://www.youtube.com/watch?v=5UsGnjPYxLU).

The big weakness of desktops,

is that there are three incompatible operating systems, electron and NW.js, are actually [cross platform](https://www.youtube.com/watch?v=TWFUSxqMJic) and repair that problem.

You don't have to start Developing your application User Interface First,

learning programming relies on good ideas, not just what is possible, but also, what is good.

For example [Smalltalk](https://www.youtube.com/watch?v=JLPiMl8XUKU) has a very consistent user interface that requires very little GUI programming,

it is a good idea to write the non-GUI core of your program first, at the very least, to make it easily testable.

If you do like complex architecture, a well thought out [Object Oriented Programming](https://www.youtube.com/watch?v=T-HGdc8L-7w) language can be useful,

even better if you use [Behavior Driven Development](https://www.youtube.com/watch?v=JuWEQsE7Hlo) that describes your program core in a readable subset of English.

This is a good place to mention [MobX and Redux](https://www.youtube.com/watch?v=83v8cdvGfeA) and similar application state based approaches,

where high level actions modify a non GUI model of your application.

---

You shouldn't let programming become complicated, though,

look at [Apple's Siri](https://www.youtube.com/watch?v=OIn5DZU_NoA), it is just chat; or filling out forms one line at a time.

Siri combined with a program like [MUD](https://www.youtube.com/watch?v=QzvqSVgc2t4),

can start keeping track of context of conversations and learn and become more intelligent.

---

Finally, I think the best type of a program is one that has two kind of users,

the end-user that enhance their program by making additional purchases, and plugin-creators that further expand your original program idea.

This isn't so much about creating something as toxic as in-game-purchases,

but rather developing the initial features of your program as if you were a third-party content creator.

Giving your program life from inside out,

all the way back from its most fundamental features.

This way you can upgrade your program, one board at a time,

like the [Ship of Theseus](https://www.youtube.com/watch?v=iVlIZJTwgyQ).
