grids are two-dimensional I can place things on it horizontally vertically and both simultaneously actually I can position items in any way I want even stacked each number represents a line these lines are row lines and these lines are column lines our grid is made up of cells each square is a cell and finally our grid is also made up of tracks these are the rows and these are the columns creating a grid starts in the HTML we need a container and some items inside of it the container is a div with the class of container and the items are divs with the class of item item 1 2 and 3. in our CSS we give the container the display of grid we see nothing happened but this is because we need to tell grid how many rows and columns we want to find to Define rows and columns we use the grid template rows and grid template columns properties they work by defining a track for each value that you pass it if I give 100 pixels to the columns now I have one column of 100 pixels if I add a second value of 100 pixels now I have two columns of 100 pixels and so on I'll copy the values from my grid template columns and paste them in the grid template rows now I have a grid with six rows and six columns and all of the cells have the same size if I want to position an item I can select it and give it the grid row start grid row and grid column start grid column and properties inside of each we'll go some line numbers let's say I want item 1 to look like this then that means item 1 starts on line 1 of both the rows and the columns we also see that item 1 ends on the third line of the rows and ends on the fifth line of the columns the other two items were pushed because we aren't explicitly defining their position writing these four properties each time you want to position something is a bit much you can instead use these two shorthand properties grid row and grid column like the other properties these also take inline numbers as values the first value is the starting line the second is the ending line and they need to be separated by a slash I want my second item to span two rows and columns I could give it a grid row of one and three and a grid column of 5 and 7 and this works amazingly but an easier way to achieve this is with this pan keyword instead of the values that I currently have I can just use this pan keyword with the number of cells that I want to span basically this pan keyword is saying from wherever you currently are span yourself this number of times this is easy to read and is also why a lot of people love this pan keyword but the main downfall of using this is it doesn't allow you to explicitly Define your starting and ending position and as a consequence our item will be pushed away if I increase the size of a nearby item like item 1. if you don't care about anchoring an item into a specific position then this pan keyword is okay to use using grid row and grid column is good but there's an even faster property grid area takes four values the first is the starting line on the rows the second is the starting line on the columns the third is the ending line on the rows and the fourth is the ending line on the columns if I want item 3 to fill out the rest of the available space I can give it the grid area with the starting row of three the ending column of 1 the ending row of 7 and the ending column of 7. I can also use the negative numbers that we see on our grid so instead of 7 and 7 I could say -1 and -1 and this will work the same this one property does the job of six properties so personally that's the one that I always use before CSS grid layering an item on top of another was painful you had to use an absolute positioning and then try to position the item using the top right bottom and left properties but with CSS grid you just position your item where you want it to be and if that happens to be on top of another item then that creates layering super easy I want item 2 to be right here touching both the item 1 and item 3. to do this I'll remove the grid row and grid column and use the grid area instead the row starts at two the column starts at four the row ends at four and the column ends at six our item needs to be on top all we have to do is give it a z index of one and now item two is layered on top of both item 1 and item 3. now we see our items are filling out all of the available space except maybe for the top right corner I'll make item 1 span all of the columns just to fill everything up so now that all the cells are occupied what would happen if I added another item in our HTML despite not having any room left our grid added a new row for item 4. when items are added outside of the explicitly defined grid this is referred to as an implicit grid notice how item 4 is smaller than the others that's because the implicit grid doesn't inherit the values that we set in the grid template rows and grid template columns properties but what we can do is add the grid Auto rows property on our container what this does is sets the size of the rows on any implicit grid that gets created when I set it to 100 pixels now our implicit grid has a row of 100 pixels by default our implicit grid added a row but we can change this with the grid autoflow property and set it to column now any implicit grid that gets created will be created as a column instead with the columns being the new default for our implicit grids we can use grid Auto columns to define the size of those columns and set it to 100 pixels now let's reset our grid by commenting out almost everything except the grid template rows and grid template columns inside the grid template rows and columns can go more than just pixel units you can use M's Rams percentages Etc but there is one called the fractional unit that you should know about I'm going to give the rows two values of 100 pixels and I'll give the columns three values of one fr the FR unit represents a fractional value of the available space and now we've got three columns each one filling out the available space equally if I set the second FR to 2 or 3 we see the column occupying more of the available space you can also mix the FR units with other units without any issues so for example I can make the first value be 100 pixels in general you can mix and match values without any problems when I resize the page some of the items get Way Too Thin to set a minimum width we can use the min max function inside our grid template columns I'll use the min max function on the second column it takes two arguments the first is the minimum size and the second is the maximum size I'll set the minimum size to 100 pixels and the maximum size to 3fr now our item will stop shrinking whenever it hits 100 pixels another useful function is the repeat notation I'll use this one on my grid template rows the way the repeat notation works is by taking two arguments the first argument is the number of times you want to repeat a value and the second argument is the value you want to have repeated we had two values of 100 pixels so I'll set the first argument to 2 and the second argument to 100 pixels now the rows are just like they were before two rows of 100 pixels but now at least we aren't repeating ourselves we can also add gaps to our grid with the grid Gap property if you assign it one value then it will add gaps equally to both the rows and the columns if you assign it two values the first is the gaps on the rows and the second value is the gaps on the columns I'm going to replace the values in my grid template rows for 100 pixels 300 pixels and 100 pixels I'll also replace the values inside my grid template columns for 1fr and 3fr I'm going to show you another way of positioning items in your grid that doesn't require keeping track of the line numbers in my container I'll add the grid template areas property as a value I'll give it three sets of single quotes stacked on top of one another with a semicolon after the last set of single quotes looking at my grid template rows I see I defined three rows and looking at my grid template columns I see I defined two columns we have three rows and two columns well inside the first set of single quotes I'll say header and header inside the second set of single quotes I'll say Main and aside inside the third set of single quotes I'll say footer and footer the reason I added three sets of single quotes is because I know my grid only has three rows and the reason I added two values inside of each of the single quotes is because I know my grid only has two columns each set of single quotes represents a row and each value inside of them represents a column looking at my grid we see the developer tools added the names we set inside the grid template areas in the appropriate position now all I have to do is give each item the grid area property and assign them the section I want them to occupy I want item 1 to be the header I want item 2 to be the main I want item 3 to be the SI and I want item 4 to be the footer now we see each item is occupying the section we assign them to by the way this was just an example I don't think I'd have one grid for all four sections and a real website I'd probably have multiple different grids across my page for the various sections and components also this way of positioning things is fun but it makes layering items more difficult it can be done though it's just more difficult we're almost done I'll reset my grid by commenting out pretty much everything and set a repeat of four 100 pixels on the rows and a repeat of 4 1fr on the columns our items are currently stretching both on the row axis and the column axis and this is because on our container there's two properties we don't currently have but that in the background have a default of stretch the justify items and the Align items properties both have a default value of stretch I can change them to either start and baseline or Center justify items align items on the row axis so if I change it justify items to anything else like start we see our items are at the start of the row axis but still in the center of the column axis if I change align items to anything else like end now our items are still at the start of the row axis but are now at the end of the column axis these properties are affecting all of the items but if we wanted to align items individually we can use the justify self and the outline self properties on the items themselves so for example if I wanted to overwrite the row alignment of item 1 I could use the adjustify self and set it to anything else like Center and if I wanted to also overwrite the column alignment I would use the Align self property maybe this one I'll set it to stretch justify items and align items where to align our items inside our grid but we can also align the grid itself along the container so for example I'll clean things up by removing everything except this play of grid grid template rows and grid template columns I'll also add a height to the container of 600 pixels I'll say that we have two rows instead of four and also two columns instead of four I'll also replace the 1fr with 100 pixels now we have a smaller Grid in comparison to The Container we can align the grid with justify content and align content they both take the same values start and Center Baseline space between space around and space evenly justify content aligns the grid along the row axis and align content aligns the grid along the column axis the last thing I want to show you is a cool trick for creating a responsive grid that requires zero media queries that's right responsive without media queries once more I'll reset my grid I'll set up a standard grid the grid template rows can have a repeat of four 100 pixels and the grid template columns can have a repeat of four and a min max of 100 pixels and one fr if I resize it it'll eventually break to fix this normally I would add a media query and change things based off the viewport width but instead all I can do is in my grid template columns instead of repeating four times I can replace four with the autofit keyword now when the items reach their minimum size of 100 pixels the autofit keyword will make the items autofit and wrap onto the next row creating a grid that is automatically responsive and there you have it if this video helped you in any way then it achieved its goal also I would be really honored if you considered subscribing to the channel and liking the video I also have a flexbox video if you want to check that out anyways thanks for watching and have a wonderful day

