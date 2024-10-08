---
id: poem-0573
guid: b64fdff4-1e45-4544-babf-854c69297f79
title: Computers And Color Theory, A Little Programming Tutorial
description: null
tags:
  - furkies-purrkies
date: '2021-09-25T02:55:59.738Z'
lastmod: null
weight: 57300
audio: poetry-0573.mp3
image: poetry-0573-illustration.jpg
images: null
artwork:
  - https://unsplash.com/photos/H8nxvtKbzdA
resources: null
features: {}
draft: false
chapter: 3
---

My first thought this morning was:\
explain how programmers make colors with numbers.

But then, when I woke up a little bit more,\
and I though the idea was ridiculous because it is too abstract to explain in text.

And when I finally got out of bed,\
I snapped my fingers and said: “Challenge Accepted”.

By the time I returned from the gym,\
I was grumbling that this is not going to work.

Here it is, if you visit <https://editor.p5js.org/catpea/sketches/>\
and click on triad-theory you will see a very simple piece of art in 50 lines of code.\
(you may need to temporary enable third party cookies on p5js)

Computers have different function or mini-programs that can be used to invent a color,\
but we want to focus on just one the [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV), or Hue, Saturation, Luminosity (sometimes called lightness or brightness).

Hue, comes from physics,\
you see it in a prism, our eyes pick up colors between red and violet.

Saturation is how much of the color there is,\
and luminosity is the brightness.

That is what the HSL algorithm aims for,\
and there is not much more to it.

---

The best way to use the H, S and L,\
is when you already picked a color.

If you have a red that is too overwhelming,\
you lower the saturation.

If it is too dark, and you need it to stand out more,\
you increase the luminosity.

---

Just to give you an idea, the most popular function is [RGB](https://en.wikipedia.org/wiki/RGB),\
where you mix red, green and blue, web developers tend to use that.

HSL, is better for artists,\
because an artist may wish to stay within luminosity of 80.

And RGB was not made to use a concept as fancy as luminosity,\
meaning switching from green to red, will not preserve luminosity at all.

There is another color function worth mentioning and it is [CMYK](https://en.wikipedia.org/wiki/CMYK_color_model),\
but this function is made for printing, for companies that actually have Cyan, Magenta, Yellow and Black ink, in stock, for printing on fabric or paper.

---

In terms of generative art,\
RGB is a horrible mistake, and HSL gives you colors that hardly ever disappoint, as you can easily reason about brightness and saturation.

But there is more,\
because while you reason about brightness and saturation in terms of percents.

The hue, is round, it is a cylinder,\
from 0 to 360 degrees.

This is another reason why RGB is a bad choice for computer art,\
that function doesn’t do circles.

---

Circles are extremely important for art,\
in color theory colors that oppose on a circle go well together, but the same goes for a triad (three colors), and a tetrad (four colors), and five colors, and probably six, and so on.

So if you have a cylinder of colors,\
and you are looking for a complimentary color, or the opposite color... you just add 180 to get it.

For a triad, your starting color is the first color,\
add 120 to get the second, and 240, to get the third one.

For four colors that go well together,\
you just go around the cylinder in 90 degree increments.

---

In the little program I created,\
I first select a random number between 0 and 360, and that is my main color.

Then I add 120, and 240,\
to get the full triad of colors.

And then I create three rectangles to fill the screen,\
I add two randomly positioned semi-transparent circles, a big one and a small one, that feature the first and second color.

I created the space between shapes,\
by giving them very thick outlines, this is a neat shortcut, not really what outlines are intended for.

I did not want to use functions or loops,\
to keep the program simple, to help with learning programming.

Each time the play button is clicked,\
a new triad is chosen, and the circles change position.

Right clicking on the art,\
allows for saving it.

And I created the screenWidth and screenHeight variables to allow changing the resolution of the generated image, so it is possible to create a desktop background or even something that can be printed out as a poster.

---

I consider this to be an example of how to teach addition, subtraction, division and degrees,\
at the end of the class students would be able to parade some fancy infinite artwork.

It is possible to sell such little creations,\
something like this makes a perfect background for a poster, and saves someone five minutes of work - it would probably sell twice a year for a dollar.

When I was creating this arrangement, I was imagining five or ten paintings,\
on the otherwise empty walls of a gallery.

At which point, one could have an noteworthy photo-shoot for an art or design portfolio,

---

In closing, color theory is very simple,\
and computers do all the calculations.

As always, the infinite canvas of Generative Art,\
serve as a fun invitation to learn computer programming, and fill a gallery.
