I have just some really basic html and css. I have a parent and a child div. And as you can see, the parent is outside the child. So the child is inside the parent div. All I'm doing is transforming and I'm moving it all the way to the right side of the parent.
.parent:hover .child {
    transform: translateX(100%);
}
And back again depending on, if it's hovered or not we want to talk about animations. Because, right now, this is really jerky. There's no smooth animation between these different states. And in css, there's two different ways to animate. You can use the transition property which is simple and works great for doing simple animations. And then there's the full on animation property which is a bit more complex but is great for making more complex multi-step animations.

In this case, Transition property, in this case, we're going to get started with transition. And then move on to animation because this can be done by just a simple transition. So how do you go about writing a transition? Well, all you need to use is the transition property in css. And the first mistake most people make is that they put the transition on the hover or the place where the transition is happening. But in our case, when we're hovering over the parent the transition will be applied. But as soon as we unhover the parent, the transition will be removed. So where you need to actually put it is on the child itself. And i'll show you why once we get the transition written. So in order to write a transition, you can just write out the word transition. As you can see, there's multiple transition properties. There's timing function property, duration, delay and then just the transition keyword itself. This is just like with margin how you have margin left, right, top, bottom and then the margin keyword that has all of them combined into one transition. Just combines all four of these properties into one and it's generally how you're going to write transitions. So by default a transition is going to transition all of the properties on your element.
.child {
    height: 50%;
    width: 50%;
    transition: all;
}
It'll have all written here but we really only want to transform or transition our transform here. So, we're just going to write transform. What this does is tells our css, we're only wanting to animate this one single property and nothing else. So if our color changed, for example, it wouldn't actually be animated and then what we need to do is specify how long this animation will take. You can say 100 milliseconds for example in our case.
.parent:hover .child {
    transform: translateX(100%);
}
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: transform 1s;
}
We're going to say one second and this is all you really need for a transition. If we save this and hover, you'll notice our box moves to the right over one second. We unhover and it moves to the left over one second. If we get rid of transform, here you'll see that it still works because it just defaults to animating all of our properties.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: 1s;
}
So if we were to for example, change our background-color of child in hover of the parent div here to green, you'll now see it transitions slowly from red to green as it goes across the board but inside here.
.parent:hover .child {
    background-color: green;
    transform: translateX(100%);
}
If we just wrote transform, you'll notice that now our color transformation is instantaneous while the actual transform itself is being transitioned back and forth over one second.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: transform 1s;
}
So, this is great for specifying individual things that you want to transition and other things that you don't so. Now I want to show you why the transition isn't put on the hover version. So if we come over here and put transition on the hover just like this and I save.
.parent:hover .child {
    background-color: green;
    transform: translateX(100%);
}
When I hover over this object, you're going to notice it transitions really smoothly and that's because I'm currently hovered. So I have a transition being applied. When I unhover, you'll notice it instantly moves the element back. That's because, this transition property is no longer set on the child.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    // transition: transform 1s;
}
.parent:hover .child {
    transform: translateX(100%);
    transition: transform 1s;
}
Because this hover state doesn't exist. It's as if this was not here.
.child {
    background-color: red;
    height: 50%;
    width: 50%;
}
So, there's no transition being applied to the child itself. So it doesn't do that smooth animation. This is why, when you specify transitions, you always want it to be on the base class in our case, this dot child and not the actual modified class of hover. 
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: transform 1s;
}
.parent:hover .child {
    transform: translateX(100%);
}
Now the last two things that we can do with this transition property are specify a delay as well as a timing function. The timing function is essentially determining how your different animation is going to play out. For example, we could put linear as our timing function and this means that there's going to be even spacing between the beginning and end of our animation.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: transform 1s linear;
}
Each of the frames of our animation takes the same amount of time. So our object moves linearly from one side to the other. If we did for example, ease-in-out what this is saying is start out slow and end slow and in the middle be slightly faster.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: transform 1s ease-in-out;
}
So if I save this in hover, you're going to notice the animation starts out slow speeds up in the middle and then slows down at the end and the same thing on the way back. And if you want to really take this and customize it even further than just using these few preset values. What you can do is we can just inspect our element here. We have our child and if you come down here where it says transition. You'll notice it has this little squiggly line next to your ease-in-out click on this. And it'll open up an editor for you where you can actually edit the exact curve and this is the path that your element is taking so. Here this is ease-in-out. This right here is another type and we can kind of cycle through a bunch of different preset ones or what we can do is drag around these handles and create our own. So for example, if we wanted the thing to bounce we could drag this here. So it goes past the top and it's going to bounce back and if you see this ball up here this is essentially what our animation is going to look like. So if we do this it's going to start out slow speed up bounce over top and then come back.
// from the browser styles copy and then paste cubic-bezier(any value).
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    // transition: transform 1s ease-in-out;
    transition: transform 1s cubic-bezier(0.7, 0.04, 0.66, 1.71);
}
We'll just copy this cubic-bezier down here. You almost never write these by hand. These editors built into the browser are perfect. So we copy this and just replace this keyword ease-in-out with that cubic-bezier. Now we save and we hover here. You're going to notice it starts out really slow and then it jumps past our ending value as you can see it jumps past the end and then comes back to the final resting position. This is how we can write these custom cubic-bezier curves in order to further take our animation to the next step with these really cool timing functions. And then the last thing we can do with these transforms is specify a delay. So, let's just say we wanted to delay for three seconds.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: transform 1s cubic-bezier(0.7, 0.04, 0.66, 1.71) 3s;
}
Now when I hover over this, it's going to take three seconds before the animation actually occurs and then it's going to move same thing. When I release it gonna take three seconds and then it's going to start the actual animation itself. Animation property now unfortunately that's pretty much all that we can do with transition.

We can't get any more complex for example, if I wanted to take this cube and move it from the top-left to the bottom-left to the bottom-right to the top-right in kind of a circular motion, I couldn't do that with transition because it requires multiple different steps which is where animations come in. So what I'm going to do is show you how to take this current transition. We're just going to simplify this a little bit. We're going to change this to ease-in for example, just so we have a little bit of a simpler transition.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    transition: transform 1s ease-in;
}
I'm going to show you how to take this transition and convert it over to the animation syntax and then how we can take that a step further and make this circle around our cube here. So to convert a transition to an animation, all we need to do is write out the word animation and with animations you write it in the place where you want it to happen in our case here on our hover. So, we write out animation as you can see animation has a bunch more properties than the transition does. You can see it has all these different properties and then the animation keyword which combines all of them together. And generally you'll just write everything in the animation keyword. Because it's much easier and the first thing an animation needs is a name. This can be anything that you want. It's just a custom name. So you know what this animation is.
.parent:hover .child {
    transform: translateX(100%);
    animation: left-to-right 1s ease-in;
}
We're going to call this left to right because that's what it does. It moves from the left to the right then just like with our transition we can specify our duration in our case one second. We can specify a timing function in our case ease-in. We could even specify a delay if we wanted that 1s second delay. This right here is all the code for our animation complete. But how do we actually write out our animation we gave it a name. But where do we define that name. Well that is where keyframes come in. So if we just come down here type in at and then keyframes.
@keyframe left-to-right {
    // code goes...
}
This is just like if you did a media query you put the at symbol and then the word keyframes. And this has to be outside of any selector. It's on its own then we put the name in our case left-to-right again. This can be anything you want it just has to match your animation's name. This is how they get linked together. Then we put a set of curly braces and in here is where we define our keyframes. And keyframes essentially determine what our animation looks like at all of the values between zero-percent and one hundred-percent complete.
@keyframe left-to-right {
    100% {
        transform: translateX(100%);
    }
}
So in our animation at 100. We want to have this transformation we could say 100 and we can just copy in here our transform translate x to 100. This is what our animation looks like at 100. And by default if you don't specify anything for example, zero percent, it'll just default to whatever the values here are for our child itself. So right now, if we save this, we should get the exact same animation. If I hover, you'll notice it moves over to the right. You'll notice something weird as soon as it gets to the right hand side immediately the animation jumps back to the very beginning. Let's try that again. We hover it gets to the right and then immediately it defaults back to where it was at the beginning. The reason for that is that animations, what happens, is they do everything inside of their keyframes in our case all we have is one hundred percent. Because our zero percent is this default up here. And it's saying okay, do all this animation and as soon as the animation is done, it removes all of the properties it added. So it goes back to whatever the default is here inside of child which in our case our translate is not applied which is why it's in the default position. If we wanted to for example, keep this transform and keep this extra translate what we need to do is tell our animation that so what we can do inside of animation is we want to say that this animation is forwards.
.parent:hover .child {
    transform: translateX(100%);
    animation: left-to-right 1s ease-in forwards;
    // animation-fill-mode: forwards;
}
This property is called the animation fill mode. This can either backwards both or forwards and really all this is saying if you specify backwards it says before my animation starts apply all the properties at the zero percent keyframe which we don't even have. If we specify forwards, it says after my animation is done keep all of the properties inside of the 100 keyframe. And finally, if you use both it will essentially combine backwards and forwards together. So now if we save this and hover, it's going to move to the right and it's going to stay there because this forwards keyword is saying I want to keep all the properties in the 100 percent keyframe. So, it's keeping this transform here. Another really important thing about css animations that most people don't think about is performance and it's actually really easy to make poorly performing css animations. So I made an entire video about css animation performance which I'll link in the cards and description down below. So now I want to take this a step further as I said. I want to move it around here in a circle from top-left, bottom-left, bottom-right top-right. So how would we go about doing that? Well, let's just come in here. We're going to write out different keyframes. We're even going to define our zero percent keyframe even though we really don't have to. We're going to say transform translate x and we want this to be zero. This is going to be our default value and a hundred percent. We want this to be in that top right corner. So this is already correct. Now, we need to define our intermediary keyframes. So we're going to have 33 percent and we're going to have 66 percent. So at 33, all we're going to do is take our transform. We're going to translate the y direction 100. This should translate us down 100 and let's just save this and see if this works. If we hover, you'll notice it moved us down that 100 which is what we expected, then at 66 percent, we need to essentially have our transform contain both our translate x of 100 and translate y of 100 that should correspond with the bottom-right hand corner. And now if I save that we should get this box moving in a circle.
.parent:hover .child {
    /* background-color: green; */
    /* transform: translateX(100%); */
    animation: left-to-right 1s ease-in forwards;
}
  @keyframes left-to-right {
    0% {
      transform: translateX(0);
    }
    33% {
      transform: translateY(100%);
    }
    66% {
      transform: translateX(100%) translateY(100%);
    }
    100% {
      transform: translateX(100%);
    }
}
So if I hover, you can see it moves all the way around our square from top-left all the way to the top- right. In order from bottom-top, left-bottom, left-bottom, right and top right, if I remove and go back you, can see that it is doing that full loop again which is exactly what we want. But right, now we've pretty much only taken what we can do with the transition and then slightly improve upon it by adding additional keyframes inside of here we can actually do so much more with animation. And let's just remove this transition up here this hasn't been doing anything but just to be super clear that we're working with just our animation.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    // transition: transform 1s ease-in;
}
There, we go. It's working as expected with animation. We can go a step further than just doing a complex animation we can also tell our animation how many times to repeat the order we want to run the animation.
.parent:hover .child {
    animation: left-to-right 1s ease-in forwards 3;
}
And so, for example, we have something called an animation iteration count. We can say how long we want the animation to be repeating. We can say 3, for example, this is going to cause our animation to occur three different times. So, if I hover, you can see it moved around around and around and right now it's doing this little jarring thing where it's jumps back to the beginning repeats. The animation jumps back repeats the animation if instead of doing that jumping motion we wanted to make it go around and then back and then around. We could specify the direction of our animation and there's a direction called alternate which essentially just says when I get to the end of the animation for the next iteration go backwards.
.parent:hover .child {
    animation: left-to-right 1s ease-in forwards 3 alternate;
}
So if I hover this, you can see that it's moving back and forth and it does that three total times one time forward, the second time goes backwards and the third time goes forward. We could also specify a delay here and as long as we put it after our duration. Doesn't matter. We just come in here. Well, we'll do three seconds. Wo when I hover, there's gonna be a three second delay and then our animation is going to occur.
.parent:hover .child {
    animation: left-to-right 1s ease-in forwards 3 alternate 3s;
}
As you can see, it does it three different times and then it stops. So we can combine a bunch of different stuff with animations. But we can take this a step further. Let's say that we want this animation to occur infinite times with no delay.
.parent:hover .child {
    // animation: left-to-right 1s ease-in forwards 3 infinite alternate;
}
And instead of doing this on hover, we actually want this animation to be permanent. So we'll just put it up here and now when I save, you'll notice that this just does the animation over and over and over again.
.child {
    background-color: red;
    height: 50%;
    widht: 50%;
    animation: left-to-right 1s ease-in forwards 3 infinite alternate;
}
And since we're doing it infinite times, it's never going to stop. We can actually make this animation play and pause based on something called the animation playstate. I believe it's called animation-play-state. And this determines whether the animation is running or paused. We can set it to be paused.
.parent:hover .child {
    animation-play-state: paused;
}
Whenever the hover state is Active, the animation is running. And I hover, it'll immediately pause the animation. Unhover, it'll continue. Hover and it stops. And it'll stop wherever in the animation. Whenever I hover, it stops. Because I'm setting this play state here to paused. Running is just the opposite of paused.
.parent:hover .child {
    animation-play-state: running;
}
It's essentially the default that means the animation is currently occurring the final thing that I want to mention. If we just change this back to paused is that inside of these keyframes you can do.
.parent:hover .child {
    animation-play-state: paused;
}
Whatever, you want, for example, I could change the background color start it out at red and then jump all the way down to 100 and say the background color is green.
@keyframes left-to-right {
    0% {
      background-color: red;  
      transform: translateX(0);
    }
    33% {
      transform: translateY(100%);
    }
    66% {
      transform: translateX(100%) translateY(100%);
    }
    100% {
      background-color: green;  
      transform: translateX(100%);
    }
}
And now if I save, you'll notice throughout the animation it's changing from red to green. And even though I didn't supply a background color in this intermediary state. It's just saying from zero percent start at red and then slowly animate all the way to green at one hundred percent. And if I threw something in the middle here, for example, fifty percent, I could say background color of blue.
@keyframes left-to-right {
    0% {
      background-color: red;  
      transform: translateX(0);
    }
    33% {
      transform: translateY(100%);
    }
    50% {
      background-color: blue;  
    }
    66% {
      transform: translateX(100%) translateY(100%);
    }
    100% {
      background-color: green;  
      transform: translateX(100%);
    }
} 
Now what's going to happen is it's going to animate from red to blue. The blue will be right in the dead middle here. If I hover, you can see it's blue right in the very center. It'll go to green back to blue and red and it'll do that over and over and over again. You can do a lot of really cool things with these keyframes essentially what happens is it just does a transition between each one of these keyframes. 
