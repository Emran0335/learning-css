CSS is still actively evolving the last few years and there has been an amazing time for CSS and front-end web developers. We got blessed with some amazing CSS features like media queries, animations, text effects, filter effects, gradients, multi-columns, transforms just to name a few. And recently the layout innovations like flexbox and CSS grid as CSS is still evolving. I want to show you five new exciting CSS features that I think you need to know. Number one is container queries. Container queries are used as an alternative to media query for adding responsiveness to your website. But unlike media queries where it's checking the size of the pages viewport. A container query is checking the size of the container. This small difference allows us to add responsiveness at the component level. Take, for example, this article component I've created two identical responsive versions of it- one with container queries and the second with media queries. The container query 1 is waiting for the container which is outlined by the spring border to have a width of 736px to apply the styles. While the second with the media query is waiting for the width of the entire browser page to be at a 736px before applying the styles. The result is the same on this example. Because the width of the container and the width of the page are identical. But we can see the true power of container queries when looking at a more complex example. In this example, we have a main section with articles and on the right we have in the site section again with articles. All the articles including the articles on the aside should make use of one component. We used a bunch of times. But unfortunately before container queries, this was not possible. If we try to do this with one component only and with media queries, the component in our aside would break. And the only solution to this would be to create a new component specifically for the aside section. But the problem with this is that now you have two different components. Container queries solves this. With container queries both our main section and our aside section share the same component. And this works because now the responsiveness of our component isn't based on the size of the page but instead on the size of the container itself. To use container queries, first you need to have a container on your components.
<div class="container">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
</div>
Then in your CSS file, you add a property called container-type to the container. You have two options here. Do you want to check for the width of the container or do you want to check for both the width and the height of the container?
.container {
    container-type: inline-size;
}
When resizing, if you want to check for the width only, then use the inline-size value. If you want to check for both the width and the height, then use the size value.
.container {
    container-type: size;
}
But in 99 percent of cases, you're only going to want to check for the width of the container. So, in most cases, you're going to set the container-type to inline-size. You also need to provide a name to your container with the container-name property. This can be whatever you want. I'll call it card.
.container {
    container-type: inline-size;
    container-name: card;
}
Lastly we need to add the container query. The Syntax for this is very similar to a media query. Add @container() and curly braces in between them, add container name and the parentheses goes the name of the container. I named it card. So, here I type card inside the parentheses goes your breakpoint.
@container card(max-width: 800px) {
    .card {
        // goes styles here.
    }
}
So, like, for example, we can put max-width of whatever like 800px or min-width of 800px for mobile first. And lastly inside the curly braces goes the style changes you want to make for your components.

// 2. has-selector(relational pseudo class)
Has-Selector has relational pseudo class also known as the hash selector. It is a new CSS feature that allows us to conditionally check if a specific element exists within a parent. The easiest way to explain it is as a parent selector. But the truth is that the has-selector opens up a lot of interesting conditional possibilities once thought impossible with CSS only. Take, for example, these two card components. They're the same card but the top one has an image while the bottom one has no image. And also has a top black border. Everything else is the same. Both components share the same HTML code except that the one without the image has the div with the background removed. They also share the class of card. But for the component without the image, I had to give it a second class of card__no_image. All this class does is adds the top black border to the component. Now here lies the problem.
// first card
<section class="card">
    <div class="bg"></div>
    <div class="wrapper">
        <h2 class="heading">Hello, World!</h2>
        <p class="description">
            I am the first card with an image in the left side of me and there are heading and description in the left side of me. There is a button in the bottom of me.
        </p>
        <button class="btn-bg">Learn more</button>
    </div>
</section>
// second card
<section class="card card__no_img">
    // Missing background image 
    <div class="wrapper">
        <h2 class="heading">Hello, World!</h2>
        <p class="description">
            I am the second card with an image in the left side of me and there are heading and description in the left side of me. There is a button in the bottom of me.
        </p>
        <button class="btn-bg">Learn more</button>
    </div>
</section>
I had to add a second class on the component that has no image so that I could apply styles to it. But it would be much more convenient to have a way to conditionally do this without a variation class. This is where the has-selector comes in. First we can remove the card__no_image class in both the HTML and the CSS. We can also remove the flexbox properties in the card class. Removing these broke both our card components. The first card has a stacked layout and the second card is missing the top black border. To fix them, we select the card class and apply the has-pseudo class to it.
.card {
    padding: 1em;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 14px 28px rgba(0,0,0,2.5), 0 10px 10px rgba(0,0,0,0.22)
}
.card:has(.bg) {
    display: flex;
    align-items: center;
    gap: 1em;
}
We want to check whether there's an image nested somewhere inside the card component. The element that renders the image is a div with a class of bg. So inside the parentheses goes .bg and inside the curly braces, we can apply the flexbox styles removed earlier. This is almost like an if statement in JavaScript. This CSS line is asking if card has an element with a class of .bg apply these styles. We can even add a condition for if the card does not have an element with a class of .bg by adding the not pseudo class before the has-selector.
.card:not(:has()) {
    border-top: 10px solid var(--clr-dark);
}
Now looking at our cards, we see they are styled like they were before. But now we aren't burdened with the extra variation class that we had on our second card component.

//Cascade Layers
Cascade layers is a new CSS feature that enables developers to have more control over the Cascade logic of their CSS file, solving a lot of the headaches related to CSS specificity. Let's look at a simple example, we have two headings they're both the same except one has a font weight of 700 and the other has a font weight of 400.
<body>
    <h3 class="heading">Hello, World!</h3>
    <div class="regular-heading">
        <h3 class="heading">Hello, World!</h3>
    </div>
</body>
// in css
.heading {
    font-size: 5rem;
    font-weight: 700;
}
.regular-heading > .heading {
    font-weight: 400;
}
I have a utility class called thin for applying a font weight of a hundred to any element I want.
.thin {
    font-weight: 100;
}
When I add it to the first heading, we see the heading changed from being bold to being super thin. But when I added to the second heading it's not working. The reason for this is that in our CSS, we're using a child combinator to select the second heading and by doing so we've increased the specificity of this style rule.
<body>
    <h3 class="heading thin">Hello, World!</h3>
    <div class="regular-heading">
        <h3 class="heading thin">Hello, World!</h3>
    </div>
</body>
// comment all css class and child class
Let's comment everything out and use Cascade layers. To solve our specificity issue, to create a layer, we add add layer and curly braces in between. You can give your layer a name. I'm going to call it base and move everything except the utility class inside it.
@layer base {
    .heading {
        font-size: 5rem;
        font-weight: 700;
    }
    .regular-heading > .heading {
        font-weight: 400;
    }
}
We can also create a second layer called utils and move our utility class inside it.
@layer utils {
    .thin {
        font-weight: 100;
    }
}
Now when we look at our headings we see they both have a super thin font weight of a hundred. The reason, we don't have any specificity issues anymore is because the specificity of our CSS rules are now scoped to the layer that they're in. One thing to note here, though is that you need to organize your layers in the order of least important at the top, to most important at the bottom. Because the utils layer is placed after the base layer. The utils layer has priority. If we were to move the utils layer above the base layer we'd be back to having our original specificity issue where our second heading isn't applying the styles from our utility class.
@layer utils {
    .thin {
        font-weight: 100;
    }
}
@layer base {
    .heading {
        font-size: 5rem;
        font-weight: 700;
    }
    .regular-heading > .heading {
        font-weight: 400;
    }
}
Another way to organize your layers is by ordering them at the top of the page like this.

@layer base, utils;

// Subgrid
When we set display grid only the direct children are able to access the rows and the columns that are defined. And this makes it difficult for nested layouts inside those children to align with their ancestors. Take this grid, for example, it has three columns with a card component. In each, the code for this is very simple in the HTML. We have a container with three direct children inside it.
<body>
    <div className="container">
        <div className="card">
            <h1 class="heading">Hello, World</h1>
            <p class="description">
                I am the first card.
            </p>
            <div className="bg"></div>
       </div>
       <div className="card">
            <h1 class="heading">Hello, World</h1>
            <p class="description">
                I am the second card.
            </p>
            <div className="bg"></div>
       </div>
       <div className="card">
            <h1 class="heading">Hello, World</h1>
            <p class="description">
                I am the third card.
            </p>
            <div className="bg"></div>
       </div>
    </div>
</body>
In the CSS our container has a display of grid, three columns and a gap of 1rem. The children of the container just spans from the first row to the last row.
.container {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.card {
    grid-row: 1 / 4;
}
This is a pretty standard grid. But there's an issue with this layout. The elements nested inside the card aren't benefiting from the grid lines of our container. We can see this problem when I change the text inside the cards to have a different length. Notice, how things aren't aligned anymore. This is because only the direct direct Children of the container are able to access the rows and the columns that are defined not the elements inside those direct children. This is where subgrid comes in. In our CSS, we add a display grid on the card and a grid-template-rows set the subgrid.
.card {
    grid-row: 1 / 4;
    display: grid;
    grid-template-rows: subgrid;
}
when we set grid-template-rows to subgrid on the direct Children of the container, we're giving the elements inside it to access to all the columns, rows lines and gaps that are defined on the container. No longer are elements inside the direct Children of the container without access to the grid rules defined on the container. Now when we look at our cards, we see everything is lined up despite the text on each card having a different line up.

//Comparison Operators
Comparison operators, this is a short one. The media query level 4 specification has introduced new comparison operators used for targeting a range of viewport widths inside media queries. Take this media query, for example, we can replace min-width with width and any of the following operators the less than, greater than, equal less than or equal greater than or equal.
@meadi (width > 736px) {
    .section {
        display: flex;
        flex-direction: column;
        align-items: StaticRange;
        gap: 0;
    }
}

