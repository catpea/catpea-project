---
id: the-hacker
guid: 08431eae-169a-4b55-b10d-37d982d94c58
title: The Hacker
description: null
tags:
  - westland-warrior
date: '2020-01-22T02:54:23.471Z'
lastmod: null
weight: 15000
audio: null
image: warrior-the-hacker-cover.jpg
images: null
artwork:
  - null
resources: []
features:
  ytcover: true
draft: false
---

[What is a Hacker? with Emmanuel Goldstein.](https://www.youtube.com/watch?v=5vjMnUX6v4M "Play Video")

[Kids hack their Dad's computer on her Raspberry Pi](https://www.youtube.com/watch?v=W76o_iG7Y7g "Play Video")

## Raspberry Pi

The $35 [Raspberry Pi](https://www.raspberrypi.org/) is the most handsome in a class of computers\
called [Single-board computers](https://en.wikipedia.org/wiki/Single-board_computer). They just released version 4, **so make\
sure you get that one**; and don’t forget a monitor. BestBuy does sell the\
PI, packaged in the [Raspberry Pi 4 Cana Kit](https://www.youtube.com/watch?v=7rcNjgVgc-I). Personally, I think\
getting the original keyboard and mouse is really cool, I am not a fan of\
the plastic case and would go for a cool looking [Heat Sink “Case”](https://www.amazon.com/dp/B07VD568FB/ref=twister_B07VD58LGV?_encoding=UTF8\&psc=1) -\
and then probably short something out. Good news is that ashens has a two\
part review of all the popular cases here you go: [Part 1](https://www.youtube.com/watch?v=zpTlB6oju5w) and [Part\
2](https://www.youtube.com/watch?v=rYb2IEsfhnE). Heads up, ashens is an odd British man that utters odd British\
phrases.

[Raspberry Pi 4](https://www.youtube.com/watch?v=sajBySPeYH0 "Play Video")

[What's inside the Raspberry Pi 4 Desktop Kit?](https://www.youtube.com/watch?v=88WOo4DIElY "Play Video")

## Portable Monitor

![Portable Monitor](files/portable-monitor.jpg)

## Monitors

There is a class of monitors called [Portable Monitors](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps\&field-keywords=+Portable+Monitors) it is still nice\
to have a desk one, but if you are wondering which one to get; get a\
portable first (the cheapest one is $99), then you can take it to\
Starbucks, plug in your PI, keyboard and mouse, and headphones; and\
[compose some music](https://www.youtube.com/watch?v=3qfa9hGJzoY) with [LMMS](https://lmms.io/) whilst [pondering album art](https://www.youtube.com/watch?v=4mgrY-U9_8E) with\
[GIMP](https://www.gimp.org/).

## Screen Projector

![Screen Projector](files/screen-projector.jpg)

Don't forget about [Projectors](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps\&field-keywords=projectors) as those too are a kind of monitor (the\
cheap ones are $50 - $75). A projector turns any wall into a monitor.

## Heist

She likley stole her daddy’s dad’s password by using her older brother’s\
[key logger](https://www.amazon.com/keylogger/s?k=keylogger). To log into her dad’s computer she uses the ssh command.\
ssh is just a program that establishes a secure (encrypted) connection\
between two computers. She executes ssh alex@192.168.1.27 at [1:27](https://youtu.be/W76o_iG7Y7g?t=87). And\
begins using the ssh program.

The remote shell, for convenience sake, looks almost the same as her own\
local shell. Even though very little changes on her screen she is in a\
full-screen program now, and once she is authenticated her shell prompt\
changes to that of the remote system. It goes from pi@calebpi ~ $ to\
\[]~$\[].

A shell prompt is the thing that indicates that you are free to type\
commands. Her dad’s shell prompt is broken, he messed up with whatever was\
supposed to go in between those square brackets, it maybe that he is using\
fonts that the Raspberry PI does not have, or some mess like that. My\
prompt as I write this is \[user@computer warrior]$ that means username is\
user, my computer’s network name is computer, and the directory I am in is\
warrior.

The dollar sign $ indicates that I, alex, and pi are normal users. You can\
escalate your system privileges to become a system administrator where you\
can read or delete other user’s files. On most systems the dollar sign\
would then change to the pound sign # to indicate that care must be taken\
as you are in special privileges mode, often called [root](http://www.catb.org/~esr/jargon/html/R/root.html).

## Warning

Now, when the Little Hacker Lady, logs into her dad’s computer she makes it\
talk using the **say** command.

A command is a feature of the Operating System, using commands is a\
management or administrative task, it is not really true programming, but\
it is OK to call it that.

The say command uses [speech synthesis](https://en.wikipedia.org/wiki/Speech_synthesis) to convert text to speech. The\
say command resides on her dad’s computer, and thus uses her dad’s speaker.\
She executes the command at [5:10](https://youtu.be/W76o_iG7Y7g?t=310)

The command she executes is wonderfully illustrative:

**say -v serena dad watch out**

You see that -v that’s a special directive that states when executing the\
say command use the voice of serena, serena is a cute name for a library of\
sounds, the say command supports multiple voices, serena is one of them.

How do people know that -v means voice, and how do they know that serena\
is one of the voices? **Nobody knows this at first**, before a person\
executes a command they read about it in a manual. The manual command is\
called man and people usually type man followed by the command-name that\
they want to learn about. In this case: man say (meaning bring up the\
manual page for the say command). The man page will tell you how you can\
list all the available voices too (say -v=?), a command like say can do\
multiple things based on what you are trying to do. Here is the internet\
version of a man page for say: <https://ss64.com/osx/say.html>

People are not happy with this. Many try to create simplified man pages,\
here is one example <https://tldr.sh/> but it is always best to go to\
the source, and just get used to the man command.

She didn’t need to use the serena voice library, she could have just\
executed:

**say dad watch out**

And the say command would use the default voice. The say command is mostly\
available on Macs, Raspberry Pi will likely use the espeak command.

**espeak "dad watch out"**

Espeak command is slightly different, for it gets confused by multiple\
words, you have to join them together by wrapping them in quotes. A\
programmer should demand that his program code has good hygiene. eSpeak\
simply said “I am not just going to read everything that you type at me”\
whereas the programmer that made the say command said “Let’s just assume\
that whatever they throw at us needs to be converted to speech unless\
something starts with a hyphen”. The say command makes assumptions, whereas\
espeak is very strict about input.

## The Kill -9

At [3:49](https://youtu.be/W76o_iG7Y7g?t=229) the Little Lady Hacker explains that she will be shutting down\
her dad’s code editor, and writes down the Process ID number 95251. Mac\
users frequently use [Sublime Text](https://www.sublimetext.com/) code editor. She issues the kill\
command with the -9 switch, this is a terrible idea, as it basically\
crashes her dad’s code editor and the -9 ensures there is no way to save\
data. Here is the man page for the kill command\
<https://linux.die.net/man/1/kill>. Unix programs that are actively\
running are called processes (as in a program that is processing something)\
and each process has a number. The kill command can be used during\
development and debugging, in a reboot scenario, or when battery is about\
to die on a laptop, it has its proper uses. As a joke, it is already bad\
enough to use the kill command on a process as it sends a TERM\[inate]\
signal. As a programmer you can add a signal handler in your program, and\
then in case of TERM signal you can for example ask the user to save his\
data, the TERM signal is an advisory. The -9 sends a KILL signal. There is\
no handler for the KILL signal, there is no saving work, the process is\
destroyed by the Operating System, whatever he was working on is lost. She\
executes kill -9 95251 at [5:26](https://youtu.be/W76o_iG7Y7g?t=326) his code editor disappears instantly.\
**Yikes!**

## All Your Base Are Belong To Us

![All Your Base Are Belong To Us](files/aybabtu.png)

Lookup [All Your Base Are Belong To Us](http://www.catb.org/~esr/jargon/html/A/all-your-base-are-belong-to-us.html) over at the [Jargon File](http://www.catb.org/~esr/jargon/html/go01.html)

## Jargon File

There is a wee bit of jargon here, but don’t worry. ESR is managing a\
jargon file you can read at\
<http://www.catb.org/~esr/jargon/html/go01.html> and he has a cool\
[HOWTO](http://www.catb.org/~esr/faqs/hacker-howto.html) on hackers from which I quote below:

**What Is a Hacker?**

There is a community, a shared culture, of expert programmers and\
networking wizards that traces its history back through decades to the\
first time-sharing minicomputers and the earliest ARPAnet experiments. The\
members of this culture originated the term ‘hacker’. Hackers built the\
Internet. Hackers made the Unix operating system what it is today. Hackers\
make the World Wide Web work. If you are part of this culture, if you have\
contributed to it and other people in it know who you are and call you a\
hacker, you’re a hacker.

The hacker mind-set is not confined to this software-hacker culture. There\
are people who apply the hacker attitude to other things, like electronics\
or music — actually, you can find it at the highest levels of any science\
or art. Software hackers recognize these kindred spirits elsewhere and may\
call them ‘hackers’ too — and some claim that the hacker nature is really\
independent of the particular medium the hacker works in.

There is another group of people who loudly call themselves hackers, but\
aren't. These are people (mainly adolescent males, and little girls) who\
get a kick out of breaking into computers and phreaking the phone system.\
Real hackers call these people ‘crackers’ and want nothing to do with them.\
Real hackers mostly think crackers are lazy, irresponsible, and not very\
bright, and object that being able to break security doesn't make you a\
hacker any more than being able to hot-wire cars makes you an automotive\
engineer. Unfortunately, many journalists and writers have been fooled into\
using the word ‘hacker’ to describe crackers; this irritates real hackers\
no end.

The basic difference is this: hackers build things, crackers break them.”

## The Glider

![The Glider](files/glider.png)

## Hacker Logo

This is a glider, a bit of a symbol for hackers, who are like cats, and do\
not like each other, herds, or stupid little symbols.

## A look at a glider

![A look at a glider](files/gliders2.gif)

## Gliders

The glider comes from [Conway’s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) the little things\
manufactured by [Gospers glider gun](https://en.wikipedia.org/wiki/Gun_\(cellular_automaton\)) and walking off towards lower right\
are gliders in action.)

## Game of Life and the Gliders

![Game of Life and the Gliders](files/gliders.gif)

## Cellular Automaton

Gliders, are of the world of [Cellular Automaton](https://en.wikipedia.org/wiki/Cellular_automaton), you have heard Murray\
Gell-Mann talk about it in context of [Emergence](https://www.youtube.com/watch?v=ONiWmzrmfuY) the Game of Life is a\
little simulation of playing with Fundamental Principles, and Accidents.\
Life emerged the same way the gliders do, out of Complexity, Infinity of\
Time, Fundamental Principles, and Accidents (remember nobody counted the\
failed attempts).

## Stephen Wolfram

Here is Stephen Wolfram in his “Computing a theory of everything” TED talk,\
reminding us to **never pause** after uttering the words “I invented a new\
kind of science” - Oof!.

[Computing a theory of everything](https://www.youtube.com/watch?v=60P7717-XOQ "Play Video")

[Pentesting Android Applications](https://www.youtube.com/watch?v=EF3oi9Ra7IU "Play Video")

[Network Penetration Testing for Beginners](https://www.youtube.com/watch?v=3Kq1MIfTWCE "Play Video")

## White Hat Hackers

Without Pentesters, Ethical Hacking, or White Hat Hackers we would never\
become aware of vulnerabilities in our phones, smart homes, refrigerators,\
lockers - day to day lives. They do not keep information secret, and help\
us keep our family, homes, and possessions safer and more secure.

[Smarter Every Day on Vulnerabilities in Smart Devices](https://www.youtube.com/watch?v=ozIKwGt38LQ "Play Video")

## Lock Picking Lawyer

[Lock Picking Lawyer](https://www.youtube.com/channel/UCm9K6rby98W8JigLoZOh6FQ/search?query=combination) has 1.14M subscribers (Dec, 2019).

[My Wife vs. Ben & Jerry’s Ice Cream Lock](https://www.youtube.com/watch?v=lod_LUp3ggc "Play Video")

[Fortress Combination Padlock Decoded FAST and Bypassed](https://www.youtube.com/watch?v=Fah-LJJaPWg "Play Video")

[Gallium vs. Titalium - Abus Padlock Meets a Gruesome End](https://www.youtube.com/watch?v=jeghGhVdt9s "Play Video")
