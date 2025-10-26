Every use case has its quirks,
so we will not get too deeply into examples.

We will simply solve the problem of data synchronization,
and let you apply it, to whatever you need.

This type of synchronization is called eventual consistency,
as it assumes that all things will eventually get all the data.

---

It relies on a revision number, that must me incremented,
each time you make a change.

Each time you update a file, move a window to a new position,
or change the user profile where ever it may live.

---

But two users, or even two browser windows,
can in the complexity of our world end up with the same revision.

But different changes... Alice and Bob,
can each submit a new and unique version of some data.

Whose original revision was 2, and now they both submit revision 3,
and both of these documents are different.

---

To solve this problem, there is a second number,
this time, the number is completely random, cryptographically random.

When we get two revisions each marked 3,
we save them both to database…

But pick the one with a larger random number,
as a winner, marking the loser(s) as conflicts.

We effectively select a winner at random,
and as long at all participants eventually get all the revisions.

They will all select the same winning random number,
the biggest one of the bunch.

---

Now, sometimes, you need to make a user interface,
where your users can go in and review the conflicts.

Other times, you just treat the winner as supreme,
and destroy the conflicts.

Position of a window is a good example,
you don’t care who the losers are, so as long as all participating desktops agree.

---

On the file system, you make a directory named after the filename,
and save data as revision hyphen random number, or uuid.

This way, all the data is always saved and never over written.
it is a neat way to make a WikiWiki.

---

In object oriented programming,
[and lets use Signals as example][1].

During normal use you just assign a .value,
and that increments the revision, and changes the random number.

But when remote data comes in,
you first compare versions and check the random number winner.

---

If you have a central database, a single source of truth,
call it up, and ensure you grab the latest data .

And check again, when the user hits the save button,
if you detect a conflict, interrupt the user and have them resolve it.

Finally, in summary, just the revision number alone is not enough,
you need a random number to go along with it.

This way, you are guaranteed eventual consistency,
and completely eliminate data loss issues.

If you have a master server, check for conflicts before a write,
if not, the highest revision and random numbers win.

It is a cruel world when you are a piece of data,
but the highest numbers often mean the most work.

So they deserve to go first,
and the rest, the rest is pure luck.

This way, when all hell breaks loose on a Friday afternoon,
all you need to do, is make sure everyone gets all the data eventually, and go home.

[1]: https://github.com/catpea/odious/blob/72fba2caf958e955947146e61ebe010e6963666a/src/modules/settings/memory/synchronizable/Synchronizable.js#L1
