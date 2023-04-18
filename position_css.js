hello everybody welcome back to web dev
simplified in today's video I'm going to
be teaching you everything you need to
know about CSS positioning so by the
time that this video is over you're
going to be positioning elements like a
CSS God let's get started now to
demonstrate all five of the different
CSS properties for position I have a
simple example set up we have a parent
element as well as three child's inside
of that parent element and right now
there's absolutely no position styles
being applied to them only these default
styles for coloring it and if we come in
here and we want to inspect one of these
elements to figure out how the position
is being applied by default we can go to
the computed tab we can search for
position and if we see right here our
position property is set to static by
default and static is the default
position that all of your HTML elements
will have when they enter onto the page
and essentially all static visitors
Union does is this says that it should
follow the other elements in the
document flow so whatever comes first in
our HTML for example child number one
will be above child number two and so on
so static positioning is just like how
your HTML works when you type it out and
it's what you're most used to the next
CSS position that we want to cover is
relative position and this works almost
exactly the same as static positioning
so if we go in here and we want to
change our green child here child number
one to be positioned relative and we
save that and you'll notice absolutely
nothing over here has changed and that's
because relative position acts exactly
like static positioning but it allows
you to do four specific things that
static positioning does not and that is
that you can change the top left right
and bottom of this element so let me
just show you an example of that we can
come in here and we can change the left
for example to 10 pixels if we save that
you see the element moves itself over 10
pixels it even overflows its parent by
10 pixels on the right side and that's
because relative allows you to actually
change the position of the element
relative to where it normally would be
in the document flow if it was
statically positioned so as you can see
normally this one would take up this
space here inside of the parent but
because a little left 10 it's moved over
10 pixels and for example if we put top
here to be 10 and save it you see that
it actually overflows the elements below
it because relative position when you
apply top left
and bottom it actually takes that
element out of the document flow and
moves it down or left or right or up
those 10 pixels that you specified and
the reason that this element 2 & 3 are
not actually being pushed down when this
top element is being pushed down is
because like I said it was removed from
the document flow so it no longer works
just like a statically positioned
element if you can see here that the
position where one normally would be is
taken up and that is reserved for where
one is and the actual element 1 is just
moved by these top left right and bottom
elements that we applied to it in
general you're almost never going to be
using top left right and bottom on a
position:relative element because all
that does is move your element out of
the document flow and it becomes really
difficult to style things around it
since as you can see our element 2 is
now no longer in line with 1 so we would
have to also position the relative
number 2 exactly the same and then we'd
have to do the exact same thing with
number 3 and so on and it gets really
confusing when you start using that so
in general position relative is not
actually used for using top left right
and bottom the next element that we want
to talk about for position is absolute
and that one most definitely gets used
with top left right and bottom so let's
put an absolute on here remove our top
save everything and you can see that
already things have changed drastically
from before when we had no position this
is with no position and then position
absolute and as you can see the document
actually completely ignores this one
element right here it just pretends like
it was completely deleted and for
example if we go into our index.html
here and we delete this one element and
save it all of the rest of our elements
work exactly the same as before we add
it back in you see nothing else moves
except for that one element and that's
because position absolute completely
removes the element from the document
flow and everything else renders as if
that absolute element didn't even exist
at all and that is a crucially important
this makes position absolute really
useful for when you want to stick
something in a specific position but you
don't want anything else to move around
it and as I mentioned position absolute
allows you to do top left right and
bottom to it and you'll notice if we put
a top on here of let's just say 10
pixels something really weird is gonna
happen if we save that you see that this
element is actually 10 pixels from the
very top of our screen if we set this to
0 and save you can really see that it's
just
the very top of the screen but why is
that shouldn't it be down here zero
pixels from itself and that is incorrect
because that's what relative position
does absolute position absolutely
positions an element inside of some
parent container that it can reference
so you would think it would reference
this parent but this parent is
positioned static which means it can't
have anything else positioned absolutely
or relatively to it in order to change
an element so that you can position
something absolutely or relatively to it
you need to use one of the other
positioning elements of either relative
absolute sticky or fixed in order to
make an element position absolutely
inside of it so if we change parent here
to position relative which this is the
most common use case for position
relative you'll see now our absolute
position element is relative to the
position relative parent and this is
where relative is really useful it's
when you want to absolutely position
something inside of it you need to make
sure that element has positioned
relative otherwise that element will
just fall back to the next relatively
position parent or all the way back to
the HTML element itself so this is where
relative and absolute play really nicely
together
so just to reiterate the positions we've
gone over already static is the default
relative is exactly the same as static
but you can relatively position it to
its self using top left bottom and right
and then absolute is just like relative
in the fact that you can position it
relative using top left right and bottom
but it completely removes it from the
document flow so that all the other
elements ignore it completely and
relative and absolute play together
nicely because any element that is
relatively positioned can have
absolutely position elements inside of
it
that'll be relative to that relative
position element and that works for
every position not just relative we
could change this here to be absolute as
well and you can see still that one
element is relative to the parent
because the parent has some other
position than static and that's really
important anytime you have a position
other than static absolute elements
we'll use that as its parent that it's
absolutely positioned inside of so let's
remove that because we don't actually
want this we can keep it as relative and
now we can move on to the next type of
positioning which is fixed positioning
which is very similar to absolute
positioning but there's
some caveats regarding it so let's
change this to be position fixed here
and save it and you see immediately it
completely ignores this relative
position parent and moves all the way to
the top and that's because fixed
position elements are always fixed
positioned based on the entire HTML
element it has nothing to do with
parents also something really unique
about fixed position elements is they
stay in the same place when you scroll
so let's make our page very large we're
going to change this I hate here to 200
view heights so it'll be able to scroll
and if we save that we can scroll down
you see that this one element still
sticks to the very top of our page
because it's got top of zero for example
if we put the right to zero as well and
say that you can see it sticks now to
the top right no matter how far we
scroll but absolute does not work that
way if we change this to absolute you
can see it's in the top right here but
if we scroll you can see it stays there
it doesn't actually move when you scroll
and that's the big difference between
fixed and absolute fixed moves with the
page as you scroll and is always in the
same exact position on the page and also
it positioned itself based on the entire
HTML page and not just the parent that
has the correct positioning relative
absolute etc on it and those are the
real big differences between absolute
and fixed and now the last position that
we need to cover is position sticky and
I'm not going to go super in-depth in
position sticky because I have an entire
video covering it so if you want to
check that out make sure you check the
description and the cards for this video
to find that sticky position video but
essentially sticky position is a
combination of both relative position
and fixed position into one so let's go
down here to our child one we're gonna
make this sticky position I'll get rid
of the right we'll just have top here
and if we say that you'll see it looks
just normal just like it was relatively
positioned but as we scroll down as soon
as this element hits the top of our page
since we have our top set to zero it'll
become fixed position now and as you can
see as we scroll it stays fixed to the
top of our page with that top of zero
and that's really with power of sticky
position is by default it's relative but
as soon as it Scrolls outside of the
page it becomes fixed position and
that's it position in CSS is really that
easy you have the default static
position you have the relative position
which works just like static but you can
move it based on itself absolute which
works just
like relative but it's moved based on
its parent element that is using
position relative absolute sticky are
fixed and we also have sticky position
works works just like fixed and relative
and lastly fixed position which allows
you to put an element on the page and
it'll stay there no matter where the
user moves to with the scroll wheel so I
really hope you guys enjoyed this video
and have a little bit more understanding
of the different positions inside of CSS
if you enjoyed the video make sure to
subscribe and leave a comment down below
letting me know what other videos you
want me to make in the future thank you
very much for watching and have a good
day

