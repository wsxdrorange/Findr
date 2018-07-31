var index = 0;

function scrollTo(element, to, duration) {
    var start = element.scrollTop,change = to - start,currentTime = 0,increment = 20;
    function animateScroll()
    {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {setTimeout(animateScroll, increment);}
    }
    animateScroll();
}
window.onload = function () {
    document.getElementById("user").onkeydown = function(event) {
        if(event.keyCode === 13) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $("#loadout").offset().top
            }, 1000);
        }
    }
};