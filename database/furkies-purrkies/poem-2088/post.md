This weekend marked the biggest Artificial Intelligence experiment thus far,
the AI passed, I did not write any code to create a precious computer program.

Some people would be willing to pay up to $20 per month for its use,
though I think a fair price is $6, or $9 at most.

---

Some programmers say that they end up fixing bugs,
that the AI is not that good, but the opposite is the truth.

The first thing that came to my mind when I begun,
is to use the MDN code conventions.

That just means,
write in the style of programmers that teach and understand web technologies.

---

There is something I did that maybe unusual,
and I want to explain what it is.

---

The program is an image slicer,
it cuts images that contain a border motif like picture frames.

It divides them into a 3x3 grid, leaving the corners alone,
but stretching and repeating the middle tiles.

This allows me to slice a picture frame,
and then resize it, without too much distortion or streching.

This is a program made for pixel art,
this is the mosaic style, jagged edges, of old computer games.

To make my cuts precise I have to zoom in, and that also means panning,
or moving side to side and up and down.

---

And please understand, we are not about to talk code,
we will not be programming.

---

I tackled pan and zoom first, it is a well know pattern,
and I told the AI to follow industry solution patters.

But to keep it lightweight,
and make it into a standard reusable web component.

The buttons you often see on a website,
are standard components.

---

This is a bit of an odd request,
because most people would not make this division.

They would just tell the AI to create a single application,
where they can slice images, and pan and zoom.

That is not fair for the AI, we wouldn't ask that of programmers,
we would want clear divisions and reusable components.

Not a pile,
of spaghetti code.

I specifically told the AI, I want to take any web page in the world,
wrap it into pan-zoom element and gain the ability to pan around and zoom.

I did not clearly explain where we were headed with this,
instead I told it to monitor for mousemove and emit a panzoommousemove.

If there is something dragable in the web page,
it can’t move by a single pixel anymore.

That pixel has to be multiplied by pan-zooms’s scale,
set by the zoom feature.

The thing that I kept from AI, is an Event Interception framework,
a large scale re-write of all things that calculate pixels.

So that they *ALL* take scale and often x and y offset of pan,
under consideration.

It is almost like changing the guts of a web page,
nothing will know it is under pan and zoom.

As events are altered,
to reflect the valid offset and scale values.

This is a brutal request for humans,
and a fantastic little task for AI.

Because it has a skeleton to work with,
a scaffold of existing events and measurement functions.

Depressing for humans, as in: “why should we be re-implementing all this?”,
happy for AI, because in its powerful brain, it knows where pixels need updates.

---

With pan and zoom taken care of, in a wonderfully generic fashion,
I moved onto the image slicer.

I said, I will bring in a pixel art user interface,
and I need to slice it multiple places.

And then I told it, something that scared me,
made me very uncomfortable.

Create a widget that is a re-sizable draggable rectangle,
that selects an area for slicing.

And then insert an inner rectangle, that is also re-sizable and draggable.
but only within the confines of the outer rectangle.

I didn’t need to say much more than this,
the AI understood that the center square is used to calculate the 3x3 grid.

I felt like I was not in control,
like the whole world was not just ours anymore.

The results had very simple mistakes,
AI had trouble calculating borders.

In a leading graphics application,
we select everything inside the rectangular outline.

I did not make that clear, because I did not think that far ahead,
the AI bravely, stopped blindly programming.

And re-wrote that portion of the program,
to pull out all the numbers, give them names…

And treat border width integers with special care,
it worked.

It took me time to understand everything and test it,
there were no mistakes, a single stray border outside of the math threw us off.

But once I created a precise test image,
and started testing every border in a web page, I found the bug fast.

---

Te AI took care of details like turning off anti-aliasing to rid of the blur,
creating cute little drag handles, that make the app look neat.

And it worked tirelessly,
until the quota monitor on the server told us to take a flipping chill pill.

And I slept for eight hours, worked out for three,
and then sat down to write this text.

---

What have we learned from all this,
choose a programming style or convention.

MDN is great, tell the AI to create web components,
as that creates a layer of separation.

And if you can divide your project like I did with pan-zoom and slicer,
you must, you can’t just ask the AI to build a slicer with zoom.

You have to divide,
so that your AI can conqueor.

[preview](files/preview.jpg)
[message](files/message.md)
