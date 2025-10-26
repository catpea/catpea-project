One of the strangest things you have to worry about is Hackers,
taking advantage of problems the computer programs you write.

For many this is such a great fear,
that they never launch.

Without getting into details, allow me show you a way,
to dance around this problem.

---

Inside your program sits the internal API,
a collection of functions named signIn, signUp, addProduct, etc.

You are only allowed to give them a singe category,
signIn and signUp stuff gets accounts, addProduct, buyProduct, gets sales.

So you always have a singe category that groups related functions,
you never nest things, and you never just keep them mixed up.

This categorization will bring you order,
but also keep things flat and simple.

---

Now, a core function, an internal API function,
is so important that it requires extra stuff around it.

User permissions, which is whether the group that user is in,
contains a permission, that the given function will ask for.

So when you are programming the part of the system where a user is added,
make sure the user can belong to a series of groups.

And then make a list of groups,
and give them a list of plain words like canBuy, canDeleteAccount.

Later you can expand that with a hierarchy of groups,
as in superuser, inherits administrator permissions, which inherits user permission.

But the simpler your internal politics the better,
just because it is possible to make something more efficient it does not mean that the added complexity is a good idea.

And then make a rule system, where every rule is an input validating function,
such as StrongPassword, ValidProductID, or even UserAccountActive, an UnderRateLimit.

And now layer that over your internal API functions,
so the buyProduct funcion will have canBuy permission…

and  ValidProductID and  UserAccountActive,
validation rules.

---

Here you can see, how just having a buyProduct function,
is small potatoes!

You need active countermeasures against hackers,
a user permission and function input validation wrappers.

But to get the full picture, and actually see all of this working,
you now need to create some unusual user interfaces…

That aren’t normally associated with internal API development,
but they will absolutely prove to you that your system is safe.

The first user interface, is a firewall like display of all your internal API functions,
row by row, eveything that can get executed is listed right in front of you.

And yes, along with category and name, you have to list,
user permissions, and function input validation rules.

Here, by just reading the table line by line,
you will be able to see where potential security problems can creep in.

And create new validation rules,
or user permissions.

---

But that is not all, because to really see your system,
you need a live display, of all the functions being executed.

So when a buyProduct funcion is executed,
you want it to blink on your screen, add a red or green tick to a little line chart,
(depending if access was granted or denied).

And, finally, you add the Hacking Dashboard,
or the Red Team User Interface.

An internal tool that will help you learn about hacking,
by going over the top attacks as listed by [OWASP][1].

Here you will learn about the threats you face,
while creating small test program that run simulated attacks and light up your live dashboard red.

One of the reasons why computer programming is such a superpower,
is because it is a tool that lets you learn by creating other tools.

You will discover, that the act of creating tools,
is often like taking a microscope to you code.

Aside from giving you the ability to analyze and visualize everything,
the world of programming is an unstoppable torrent of knowledge.

If you aren’t sure if you should learn programming, or don’t know where to start,
try [p5.js][2], [Svelte][3], [SvelteKit][4], and [node.js][5].

The world of programming has no limits, and if you let it,
it will help your imagination flourish, and your brilliance shine.

[1]: https://www.youtube.com/results?search_query=OWASP+10
[2]: https://www.youtube.com/results?search_query=p5.js+tutorial
[3]: https://www.youtube.com/results?search_query=Svelte+tutorial
[4]: https://www.youtube.com/results?search_query=SvelteKit+tutorial
[5]: https://www.youtube.com/results?search_query=node.js+course+tutorial
