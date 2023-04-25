 To start using CSS positions, we first need some elements in our HTML. All I have is a div with the class of container and 12 items nested inside of it. Each item is a div with the class of item and item-1, 2, 3 and so on. When I save, we see we actually have a grid. This is because I have some base tiles and a separate CSS file. None of this is relevant to CSS positioning. You don't need a container with 12 items and you don't need a grid to start using the CSS positioning properties. All of this is just for demonstration purposes. In a fresh CSS file, I'll select the first item(item-1) in our grid by its class name and give it the position property. In total there are five position values- absolute, relative, fixed, sticky and static. When I set the position on our item-1 to absolute, we see that item-1 from our grid disappeared.
 /* position properties */
 .item-1 {
    position: absolute;
    top: -50px;
    right: -50px;
    /* bottom: 0px; */
    /* left: 0px; */
} 
 We have one, three, four, five and so on. But we don't see item-2. And this is because it's hidden underneath item-1. To move item-1, we can use the top, right, bottom and left properties. These properties are unlocked. When we assign a position property to an element, if I give the top property the value of 0px, we see now our item-1 is positioned at the top of the page. And also the reason, we're missing an item from our grid. This is because when we set item-1 to have a position of absolute, item-1 got removed from the grid. Actually it got removed from the entire document. Elements that are assigned a position of absolute are removed from the document. No space is created for them and other elements will behave as if that element never existed. If I set left to 0px, now our item-1 is on the top left corner. If I set the bottom to 0px, nothing happens. This is because it doesn't make sense to have both a top and a bottom. I can comment out the top property and now with the bottom of 0px, we see that the element is positioned at the bottom left corner. The same goes for the left and right properties. I use one of them but not both at the same time. I'll comment out the left property and set the right property to 0px. I'll also comment out the bottom property and set the top property to 0px. Now our item-1 is positioned at the top right corner. But what happens if I give our top and red properties some negative numbers. I'll set both to (-50px).
 .item-1 {
    position: absolute;
    top: 0px;
    right: 0px;
    /* bottom: 0px; */
    /* left: 0px; */
} 
 And now our item-1 is half visible. This is pretty cool. But we've got some horizontal scrolling. I can select the body and give it the Overflow X of hidden.
 body {
    overflow-x: hidden;
 }
 And now the horizontal scrolling is gone. Did you notice? Whenever we were defining values on the top, right, bottom and left properties that those values were positioning item-1 relative to the entire page. Minus 50 pixels on the top and right properties places item-1 at the top right corner of the entire page. If I wanted item-1 to position itself relative to its parent, then we need to select the parent and give it a position. Any position value will work except static.
 .container {
    position: relative;
 }
 Because static is the default value. I'll set the position to relative and now we see item-1 is being positioned relative to the parent instead of the entire page. The way this works is over on the HTML. Item-1 is asking the parent whether it has a position property. If not, then it asks the next parent and the next and then next until it finds one with the position property defined and if it doesn't find one, then it defaults to being positioned relative to the HTML element. Now that item-1 is being positioned relative to the container. It's stacking itself above item-5.
 .item-1 {
    position: absolute;
    top: 0px;
    right: 0px;
    /* bottom: 0px; */
    /* left: 0px; */
    z-index: -1;
} 
 If we wanted item-1 to be layered underneath item-5. What we can do is use the Z-index property and set it to -1. Back on my client's website(personal information), I give the planet the position of absolute.
 .bg-planet1 {
    position: absolute;
    z-index: -1;
    opacity: 0.3;
    top: -350px;
    right: -650px;
 }
 The planet is now removed from the document but is stacking above other elements. I use the Z-index property to layer the planet underneath the other elements. Also I give the planet an opacity of 0.3. Because the planet is way too bright. I played around with the top and right properties until I was happy with the position.
 body {
    margin: 0;
    padding: 0;
    line-height: 1.6;
    word-spacing: 1.4px;
    font-family: #465830;
    font-size: 24px;
    background-color: #e5e5e5;
    color: white;
    overflow-x: hidden;
 }
 And I also added an overflow-X of hidden on the body to remove the horizontal scroll bar. And finally I repeated the same process for other images.
 
 // Static
 Now we will talk about Static & Relative. If I select item-1 and give it the position of static, we see nothing happens.
 .item-1 {
    position: static;
    // top: 0px;
    top: 100px;
 }
 If I give it a top property of 0px, nothing happens. If I set it to 1000px, still nothing happens. Nothing is happening because static elements not have access to the top, right, bottom and left properties. Nor do they have access to the Z-index property.
 //Relative
 .item-1 {
    position: relative;
    // top: 0px;
    top: 100px;
    left: 100px;
 }
 On the other hand, if I set item-1 to have a position of relative, we see again nothing happens but unlike the static position relative has access to the top, right, bottom, left and Z-index properties. If I give it a top property of 0px, it doesn't move. However, if I set it to 100px, we see it pushed it 100px away from the Top. If I give it a left property of 100px, we see now it pushed it 100px away from the left. Unlike the position of absolute, elements with the position of relative remain in the normal flow of the document. Use relative when you want to keep your element in the normal flow of the document. And use absolute when you want to remove your element from the normal flow of the document.
 
 .footer-child svg {
    position: relative;
    margin-left: 150px;
 }
 On the footer, I want to push this animation slightly towards the right. Normally I would just use a margin left. But in this case, I can't because I set the width and height with percentages. And if I use margins, the animation would shrink. So what I can do is give the animation the position of relative and use the left property to push it slightly to the right. Without it, it is shrinking.
 
 // Fixed & Sticky
 The two final positions are fixed and sticky. They both stick an element into position. But they do it slightly differently. Fixed actually behaves very similarly to the absolute position. Like absolute, elements with the position of fixed are removed from the document. So when I set item-1 to a position of fixed, we get the same behavior.
 .item-1 {
    position: fixed;
    top: 0px;
    left: 0px;
 }
 As we did when we were working with absolutes. Item-1 was removed from the entire document and is currently layered on top of item-2. Which is why we don't see item-2. However one area where fixed is different from absolute is when we start scrolling we see item-1 is now following us when we're scrolling the page. The second area where fixed differs from absolute is unlike the absolute element a fixed element is always positioned relative to the HTML element. I can set item-1 with a top of 0px and this will stick it to the top of the page.
 .item-1 {
    position: fixed;
    top: 0px;
    left: 0px;
    border-radius: 0;
    width: 100%;
    z-index: 1;
 }
 I'll also give it a left of 0px, a border-radius of 0px, a width of 100% and a z-index of 1. Guess what we now have a header. I can also have it be a bottom Header by replacing top with bottom and now we have a bottom header.
 .item-1 {
    position: fixed;
    bottom: 0px;
    left: 0px;
    border-radius: 0;
    width: 100%;
    z-index: 1;
 }

 // Sticky
 The sticky position works similarly to both relative and fixed. I'll select item-5 and give it the position of sticky. We see nothing happened and also if I scroll the page, nothing is happening. But if I give it a top of 0px and start scrolling now item-5 is scrolling down with us until it hits the end of the container.
 .item-5 {
    position: sticky;
    // top: 0px;
    top: 50px;
 }
 Sticky only works when we define a top property. The value we put in the top property represents the space before the element. We'll start scrolling down with the page. If I set top to 50px, now the space between the element and the top of the viewport needs to be 50px before the element starts sticking to it. The client requested a bottom header indicating that the website is still under development and also requested that the text and the builder section stick to the page when scrolling. To create the heading, I add a div with the class of bottom heading. I give it the position of fixed. The bottom of 0px, the left of 0px, the width of 100%, a background-color, a color and is at z-index of 1. Then for this section to stick, when scrolling, all I have to do is give it the position of sticky and also give it a top property. After all these changes were made, I had a happy client and he left me a nice review on upwork. This is pretty much everything you need to know to start positioning things. 

