var index = 0;

var defaultURLs = ["https://github.com/", "https://www.youtube.com/user/", "https://twitter.com/", "https://instagram.com/", "http://.tumblr.com/"];
var statusBubbleSelectors = ["gitStatus", "youtubeStatus", "twitterStatus", "instaStatus", "tumblrStatus"];
var currentUser;
var urls = [];

function editURLs(username) { //adds username to each default url into array urls
    urls = [];
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

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

    } else {

        // Otherwise, CORS is not supported by the browser.
        console.log("CORS not supported")
        xhr = null;

    }
    return xhr;
}

function UrlExists(url) {
    // var request;
    // if (window.XMLHttpRequest)
    //     request = new XMLHttpRequest();
    // else
    //     request = new ActiveXObject("Microsoft.XMLHTTP");
    // request.open('GET', url, false);
    // request.withCredentials = true;
    // request.send(); // there will be a 'pause' here until the response to come.
    // // the object request will be actually modified

    var request = createCORSRequest('GET', url);
    if (!request){
        console.log("Cors not supporteD");
    }
    request.setRequestHeader('Access-Control-Allow-Origin','*');
    request.setRequestHeader('Access-Control-Allow-Credentials','true');
    request.setRequestHeader('Access-Control-Allow-Methods', 'OPTIONS,GET');
    request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');
    request.setRequestHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Credentials");
    request.send();
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
    };

    document.getElementById("return").onclick = function () {
        $('html, body').animate({ //smooth scroll up to search
            scrollTop: $(".video-container").offset().top
        }, 1000);
    };

    document.getElementById("myInfo").onclick = function () {
        editURLs("wsxdrorange");
        editStatusBubbles();
        $('html, body').animate({
            scrollTop: $("#loadout").offset().top
        }, 1000);
    };
};