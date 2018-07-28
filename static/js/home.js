var index = 0;
function scrollTo(element, to, duration) {
    var start = element.scrollTop,change = to - start,currentTime = 0,increment = 20;
    function animateScroll()
    {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {setTimeout(animateScroll, increment);}
    };
    animateScroll();
}
function runSearch(e)
{
    if(e.keyCode = 13){
        
    }
    scrollTo(document.body, screen.height -90, 1250);
}