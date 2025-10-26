I finally connected the little Bluetooth remote shutter,\
to my heavy little mp3 player invention.

My 1998 design was a small mp3 decoder equpped Printed Circuit Board (PCB),\
strapped onto a huge CD-ROM drive filled with a lot of MOD files converted to mp3.

It was meant for a car,\
but also for learning.

Inventions are important things,\
they help us dream and learn.

---

I took a computer hardware class,\
but it was so simple that it was painful to see my time being wasted.

It was all good people, weird but OK,\
it is that kind of simplified education that holds everyone back.

An you know it, everyone was just laid back,\
the semester passed everyone got an A, and nobody learned a thing.

And there was no education to be had,\
I had to hurry with my English.

I still had bunch of words to learn,\
it was a high priority item for me, so I spent my teenage years reading paperbacks at Plymouth's Denny's.

Our education has to progress the way water moves through a piece of paper,\
observe, how it starts as a dot, and then it spreads as far as it can see.

The more it knows the more it grows,\
we must reject fake education, we mustn't tolerate it.

---

I had my little invention,\
but I didn't have so much as an LED to make a [throwie](https://www.youtube.com/watch?v=hme5ladDQ_0).

---

The player I made today, has a battery where the old CD-ROM was supposed to go,\
and the PCB is now replaced with an actual GNU/Linux powered Computer.

I finished programming the shutter [thingie](https://www.amazon.com/Cellphone-Shutter-Multifunction-Playback-Smartphones/dp/B08SWC2DQW),\
but I didn't even try to figure out the buttons.

The thought hardly occurred to me,\
the shutter has six buttons that trigger a lot of data.

I can see that a single button press triggers multiple [light pen actions](https://www.youtube.com/watch?v=EBfkiprmoi0),\
that is probably what the kernel calls a finger.

Left and right buttons tiger what maybe to be a swipe,\
up and down, actually trigger many rows of data, as if counting from 0 to 100.

Holding down the Y-axis key, does something slightly different,\
it slides values between 0 and possibly 1,000.

The values are always the same,\
there is no continuation from where the button last left off.

So if I am always getting the same events,\
I can just glue (concatenate) all the data and call it a single button.

The long press is a bit off, because the stream of data that long-press sends,\
ends when a person lets go, it ends at an arbitrary location within that 1,000 virtual key presses.

It is really good for changing audio volume,\
but I'll have to think about it some more.

[So the program I wrote, has a learn function that concatenates all button data into a single recognizable ID](https://github.com/catpea/isir/blob/01ef4b7e55058fde70e5098aad8402345d7e113c/command/learn.js#L51),\
and then when the program is in normal operation mode, it [monitors for the presence of the same flurry of key presses](https://github.com/catpea/isir/blob/01ef4b7e55058fde70e5098aad8402345d7e113c/command/listen.js#L41).

When the stored and detected sequence matches,\
it then [triggers a command that is manually associated with the ID](https://github.com/catpea/isir/blob/01ef4b7e55058fde70e5098aad8402345d7e113c/command/listen.js#L49).

And the GNU/Linux commands it triggers are extremely simple,\
the play button simply [stops](https://github.com/catpea/isir/blob/01ef4b7e55058fde70e5098aad8402345d7e113c/bin/p.sh#L2) music if it is already playing and then [plays](https://github.com/catpea/isir/blob/01ef4b7e55058fde70e5098aad8402345d7e113c/bin/p.sh#L3) songs from the Music folder, shuffling them first.

Pressing play, multiple times,\
stops playing current song, and it picks a new one at random, it is surprisingly simple.

---

I had a fun time this Sunday learning how to manually connect a Bluetooth device,\
it took me four hours because that little shutter button pad, demands that pairing the device and connecting the device, happens instantly.

I couldn't issue the commands manually, I only had hundreds of milliseconds to go from pair to connect,\
so it needed to be scripted, the computer had to issue connect right after pairing.

---

This little $50 of $75 invention is extremely interesting,\
even for people that like having closed source phones around.

Not only can you control everything from your phone,\
but also proxy your phone traffic through [Pi-hole](https://pi-hole.net/) a which greatly reduces spam and ads.

The openness of the Raspberry Pi and the underlying GNU/Linux,\
[allows for things that aren't possible with closed source phones](https://www.youtube.com/watch?v=WDa_odxAGUU).

It is this kind of tinkering that makes learning GNU/Linux fun and painless,\
it takes many years, but there is no hurry, in the end being able to reprogram things without investing too much time into custom PCBs is a fun talent to have.

I think my next project is going to be,\
a Linux driven Boom Box.
