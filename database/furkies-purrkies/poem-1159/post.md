As you may know, this whole programming thing is just about three things,
and every programming language has its own way of expressing those things.

The way a language expresses things is referred to with the pretty word syntax,
when you mistype something in your code, you get a SYNTAX ERROR.

Those three things are functions, ifs and loops,
and your programming language both comes with some functions, like exit...

And lets you make your own, that then can call other function,
including functions you made, so you are constantly nesting function calls.

---

To define a function you have to give it a name, such as signIn(),
and to make it useful it should return something, such as 0, or a sting of letters.

---

There are only few languages that are worth the while,
C or C++ are low level, Python just calls C/C++ when it wants to be useful…

...and JavaScript,
and here most programmers grew up laughing at JavaScript.

But as it become the language of the web,
it got so much attention that it beat the crap out of everything else.

This is the language you need to learn,
at first ignore people who will try to force you into Python, go and Rust.

And stay away from C/C++ classes,
and especially from Swift, C#, TypeScript, and Java.

College version of C/C++ will teach you infective programming,
that will prevent you from creating useful things.

And, Java, Swift, C#, and TypeScript, are a way to trick you,
companies behind those languages will eventually charge you money in some way.

JavaScript has bragging rights,
it is a clean, spiritual successor to Perl, which was a beautiful language.

But, it only sat on the server, it had clunky GUI libraries,
and it didn’t run in the browser.

The one thing about language wars is that as passionate as programmers are about their language,
corporations are not passionate about programmers.

Your choice of language must be strategic, it has to be an open language,
ad it has to deliver on all fronts.

If you learn C/C++, Python, Go, or Rust,
you will somewhat comically discover, you still have to learn JavaScript.

But if you start with JavaScript, and find a reason to switch to something else,
JavaScript will wait for you, like a good friend…

And upon your return, it will bring you, really neat,
syntax updates that will make you feel warm and fuzzy.

And say things like,
“Oh wow, the nullish coalescing operator, is really cute”.

---

There is a bit of a problem with getting into programming,
because most languages want you to import stuff.

PHP, Perl’s younger friend, who has been considering retirement,
just comes in a world of functions, it is a [huge, scary and really neat list][0].

in JavaScript you have to ask for extra libraries by name,
because you wouldn't want to load everything into a browser.

In C, a low level language, you have to include even the base language functions,
because if you are not going to use something, you don’t want to put it into a microchip for example.

---

The standard JavaScript language functions are included by default,
but any extra functionality, or libraries, need an import statement.

And JavaScript got consistent import statements, just like now,
so your web code, and serve code, can use the same import syntax.

Overall, imports are a bigger problem when starting in a language like C,
where you have to know where everything is at, from the get go.

Just be aware that, imports are a thing,
and [there are countless JavaScript libraries to pick from][1]

And like with functions, you should make your own,
a library is just a collection of functions that someone wants to share.

I once wrote a function called [oneof][2], that would pick a random item from a list,
and I just published it as a library, it is only like 5 lines of code…

But I [used it at least 12 times][3],
in my other libraries and programs.

---

An if statement, or an if/else statement,
just checks if what a function returns is true.

If true, then it will execute the stuff contained within the if body,
if not, but there is an else present, it will execute the else part.

---

And finally, a loop, just loops over things that are list,
in JavaScript a word hello is actually a list of the letters h, e, l, l, o.

There is a datatype made specifically to serve as a list,
it is called and Array.

---

As you learn some more, you will discover objects,
but those are just groups of functions and variables.

Then HTML is sure to come up as you do web applications,
but that is just clever nested-object notation.

And then CSS, is a way to deliver data into those HTML objects,
it is all pretty neat.

---

Lastly, the beauty of code, is in how you bend the language,
to make it pretty for what yo need.

The title image of this text, shows a nested object,
that you must first log into by offering a user object, as if it was a server.

All these functions have enhanced security and validation,
so that a hacker won’t be able to execute them.

My application is structures in such a way,
that it does not matter that these functions do extra checks and thus are a bit slower.

And instead of just returning, true, false, or some object,
I actually plan to return a list of messages, actions, and execution results…

As I am shipping the function response directly into a browser,
and in some cases into a command line program, and as you can see API documentation as well.

But that is not, really how one should use functions, and nested objects,
it is just an interesting or artistic way of doing it, that will absolutely bite me some weeks down the road.

[0]: https://www.php.net/manual/en/funcref.php
[1]: https://github.com/topics/javascript
[2]: https://github.com/fantasyui-com/oneof/blob/master/index.js
[3]: https://www.npmjs.com/package/oneof?activeTab=dependents
