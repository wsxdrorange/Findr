var index = 0;

var defaultURLs = ["https://github.com/", "https://www.youtube.com/user/", "https://twitter.com/", "https://www.instagram.com/", "http://.tumblr.com/"];
var statusBubbleSelectors = ["gitStatus", "youtubeStatus", "twitterStatus", "instaStatus", "tumblrStatus"];
var currentUser;
var urls = [];

function editURLs(username) { //adds username to each default url into array urls
    var i;
    for (i = 0; i < 4; i++) {
        urls.push(defaultURLs[i] + username);
    }
    urls[4] = "http://" + username + ".tumblr.com/";
}

function editStatusBubbles() {
    var i;
    for (i = 0; i < urls.length; i++) {
        document.getElementById(statusBubbleSelectors[i]).href = urls[i];
        if (UrlExists(urls[i])) {
            document.getElementById(statusBubbleSelectors[i]).style.background = '#26a69a';
        }
    }
}

function UrlExists(url) {
    var request;
    if (window.XMLHttpRequest)
        request = new XMLHttpRequest();
    else
        request = new ActiveXObject("Microsoft.XMLHTTP");
    request.open('GET', url, false);
    request.send(); // there will be a 'pause' here until the response to come.
    // the object request will be actually modified
    console.log(request.status);
    if (request.status === 404) {
        return false;
    }
    return true;
}

window.onload = function () {
    document.getElementById("user").onkeydown = function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();


            currentUser = document.getElementById("user").value;
            editURLs(currentUser);
            for (var i = 0; i < urls.length; i++) {
                console.log(urls[i]);
            }
            editStatusBubbles();

            $('html, body').animate({ //smooth scroll down
                scrollTop: $("#loadout").offset().top
            }, 1000);
        }
    }

    document.getElementById("return").onclick = function (){
        $('html, body').animate({ //smooth scroll up to search
                scrollTop: $(".video-container").offset().top
            }, 1000);
    }

    document.getElementById("myInfo").onclick = function (){
        $('html, body').animate({
                scrollTop: $("#loadout").offset().top
            }, 1000);
        editURLs("wsxdrorange");
        editStatusBubbles();
    }
};