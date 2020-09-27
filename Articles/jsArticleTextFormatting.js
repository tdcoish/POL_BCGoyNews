/***********************************************************
 * This takes the raw text that I put in the html file and converts it to my formatting.
 * I manually put in tags like TDC_ArticleStart, and TDC_ArticleStop
 * And this program adds classes etcetera.
 * 
 * Huh, apparently there's a fairly convenient global find/replace.
 */


function formatArticleText(){
    var articleContent = document.getElementsByClassName("articleContent");
    var articleRawTextString = articleContent[0].innerHTML;

    articleRawTextString = articleRawTextString.replace(/\n/g, "<br><br>");

    // using the global find replace now.
    articleRawTextString = articleRawTextString.replace(/TDC_ARTICLE_START/g, "<div class=\"articleSnippet\">");
    articleRawTextString = articleRawTextString.replace(/TDC_ARTICLE_STOP/g, "</div>");

    articleContent[0].innerHTML = articleRawTextString;
}


