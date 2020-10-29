/***********************************************************
 * Right now all I want this to do is figure out how many article blurbs there are, and only display 10 of them at a time.
 * Or maybe even just count them all up and output that.
 */


function formatIndexPage(){
    return;

    var articleBlurbStringArray = [""];

    var blurbsContent = document.getElementsByClassName("mainWrapper");
    for(var i=0; i<blurbsContent.length; i++)
    {
        articleBlurbStringArray.push(blurbsContent[i].innerHTML);
    }
    console.log("Num blurbs: " + blurbsContent.length);

    // okay, now what we want is to only show the top 10?
    for(var i=2; i<blurbsContent.length; i++)
    {
        blurbsContent[i].innerHTML = "";
    }

    blurbsContent[15].innerHTML = articleBlurbStringArray[15];
}

// Okay, here we respond to the user pressing the buttons at the bottom of the screen, where we return 
// this is the hard part. I need to load in the blurbs from an SQL database. There's no getting around this now.
function respondToButtonPress(clickedLeft, curNum)
{
    if(clickedLeft)
    {
        curNum--;

    }
}
