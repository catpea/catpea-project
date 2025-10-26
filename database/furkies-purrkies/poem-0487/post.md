Upon a tiny bicycle adventure,\
asking myself how to approach the subject of workout music and linux.

While I was contemplating an introduction to linux,\
and the many steps required along the way...

[A little bird swooped down and tried to carry me away](https://www.youtube.com/watch?v=gWGiWHwmhhc),\
apparently this was exactly what I needed.

In the moment I was pedaling on my bicycle,\
and a little bird was camping on top of my head, hopefully merely attacking.

I realized all I need to say about UNIX and Linux in this poem,\
is that I have been speeding up my workout music, and explain the command I use to do it.

As the bird let go, and I started waiving frantically above my head,\
so that it doesn't come back again.

I felt that I should mention that it is probably best to buy a cheap dedicated Linux computer,\
a [Raspberry PI](https://www.canakit.com/raspberry-pi-4-complete-starter-kit.html) costs $140 dollars, and a monitor runs about $70.

It is not very fast, but web pages load OK,\
and it is a proper Linux with a proper terminal application where you can type commands.

Installing ffmpeg should only require running `sudo apt-get install ffmpeg`\
Raspberry Pi Documentation has some useful information about [APT](https://www.raspberrypi.org/documentation/linux/software/apt.md)

If the command does not work out, which doesn't really happen,\
then you have to search for ["How to install ffmpeg on Raspberry PI"](https://www.google.com/search?q=How+to+install+ffmpeg+on+Raspberry+PI) and begin your Linux adventure here.

But using apt is easy, and you will soon have ffmpeg on your system,\
you'll have to copy your music onto the PI.

And from now on I will refer to your favorite song as: "original-song.mp3",\
and the song that we will speed up will be called "spedup-song.mp3"

There are three parts to this command,\
and it all begins by saying `ffmpeg` to tell the system you will be using the ffmpeg program.

Then the developers behind ffmpeg decided that you should use -i\
to tell ffmpeg of any input files so you have to say `-i original-song.mp3`

This is called giving a command an argument,\
we are giving it the -i argument with the value of original-song.mp3.

Next, we say `-af atempo=1.25` so we are giving ffmpeg the -af argument,\
which is short for audio filter, and then we specify the filter which is atempo.

[atempo](https://ffmpeg.org/ffmpeg-filters.html#atempo) stands for "Adjust audio tempo" but the syntax that follows -af,\
is something that ffmpeg programmers picked to try to make things easy.

In this case atempo is followed by equal sign,\
which means assign value, and the value we are assigning is 1.25

This is so hard to grasp at first, because ffmpeg programmers,\
really struggled with how to make all this somewhat readable, and useful.

1.25 is a programmers way of saying set the tempo to 125%,\
the math is easier this way, an everyone just does it.

So if you wanted to speed up your song to 150% tempo, you would say, atempo=1.50,\
and if you wanted to slow it down to 50% tempo, you would say atempo=0.50

At this point we just give ffmpeg the filename we want to save the changes to,\
which in this tutorial is spedup-song.mp3.

So the whole command reads like this:\
`ffmpeg -i original-song.mp3 -af atempo=1.25 spedup-song.mp3;`

The biggest thing to learn from all this,\
is that programmers are trying to be useful, and they are very thrifty.

The operating system has no idea where or what atempo is,\
that is just part of ffmpeg, and its own world of complexity.

As to the command line,\
[the command line is trying to be useful](https://www.youtube.com/watch?v=tc4ROCJYbm0)

It is just command names and arguments,\
and developers trying to make commands useful.

It is faster to do things on the command line,\
just imagine how many clicks you would have to make in a Graphic User Interface application.

As to not knowing what the commands are,\
nobody knows them at first, you just write them down, and eventually memorize them.

---

In Closing,\
I will speed up one of my songs to let you hear the difference.

Here is the original speed,\
(audio plays)

And here is the version, that is sped up to 125% tempo.\
(audio plays)

The overall lesson to take from all this, is that command line is not scary, but it will take a Linux, and some notes to get used to it.\
and if you are ever bicycling among angry birds, bring an emergency hat.
