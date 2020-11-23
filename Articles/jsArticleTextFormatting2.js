/***********************************************************
 * This takes the raw text that I put in the html file and converts it to my formatting.
 * I manually put in tags like TDC_ArticleStart, and TDC_ArticleStop
 * And this program adds classes etcetera.
 * 
 * Huh, apparently there's a fairly convenient global find/replace.
 */

function formatArticleText(){
    /* Well goy, this is a pretty big change we've got to the article template now, that's going to break all the previous pages.
        The new article template just has:

        <!DOCTYPE html>
        <html lang="en">
            <head>
            </head>
            <body onload="formatArticleText()">
                <div class = content>
                    Title: Real News - Hundreds of Canadian Nazi Groups
                    Date: November 12th, 2020
                    Content: ...
                </div>
                <script src="jsArticleTextFormatting.js"></script>
            </body>
        </html>

        And what we need to do is shove the correct html in the head, which should always be the same, as well as do massive formatting for the html where the article is.
    */

    var headID = document.getElementById("tdcHead");
    var headStringContent = '<title id="pageTitle">News Article Title Goes Here</title>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <link href="template.css" rel="stylesheet" type="text/css">';
    
    headID.innerHTML = headStringContent;

    var bodyID = document.getElementById("tdcBody");
    var topAndNavbarStringContent = '<a href="../index.html">\
        <div class = "header">\
            <h1>BC Goy News</h1>\
            <p>British Columbia\'s No 1 trusted news source.</p>\
        </div>\
    </a>\
    <div class = "navbar">\
        <a href="../index.html"> News </a>\
        <a href="../index.html"> Events </a>\
    </div>'

    var bodyContent = '<div class="mainWrapper">\
        <div class="mainContent">\
            <h1 id="articleTitle">Article Title Goes Here</h1>\
            <h2 id="date">DATE</h2>\
\
            <div class="articleContent">\
                Content goes here.\
            </div>\
        </div>\
    </div>'
    
    // now we need to add in the part where the actual article is.
    var contentCurContent = document.getElementsByClassName("content")[0].innerHTML;
    console.log(contentCurContent);
    
    bodyID.innerHTML = topAndNavbarStringContent;
    // var articleContent = document.getElementsByClassName("articleContent");
    // var articleRawTextString = articleContent[0].innerHTML;
    // articleRawTextString = articleRawTextString.replace(/\n/g, "<br><br>");
    // articleRawTextString = articleRawTextString.replace(/<br><br><br><br>/g, "<br><br>");
    // // console.log(articleRawTextString);

    // // using the global find replace now.
    // articleRawTextString = articleRawTextString.replace(/TDC_ARTICLE_START/g, "<div class=\"articleSnippet\">");
    // articleRawTextString = articleRawTextString.replace(/TDC_ARTICLE_STOP/g, "</div>");
  
    // articleContent[0].innerHTML = articleRawTextString; 
    
    // // have to make the page title (on the tab) the same as the article title.
    // var articlePageTitleText = document.getElementById("pageTitle");
    // var articleTitleText = document.getElementById("articleTitle");
    // articlePageTitleText.innerHTML = articleTitleText.innerHTML;
}


