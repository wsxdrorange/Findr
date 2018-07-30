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

        // if (UrlExists(urls[i])) {
        //     document.getElementById(statusBubbleSelectors[i]).style.background = '#26a69a';
        // }
        UrlExists(urls[i], function(success){
            if (success){
                document.getElementById(statusBubbleSelectors[i]).style.background = '#26a69a';
                console.log(urls[i] + " " + "SUCESS");
            }
        });
    }
}

// // Create the XHR object.
// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
//         // XHR for Chrome/Firefox/Opera/Safari.
//         xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined") {
//         // XDomainRequest for IE.
//         xhr = new XDomainRequest();
//         xhr.open(method, url);
//     } else {
//         // CORS not supported.
//         xhr = null;
//     }
//     return xhr;
// }
//
// // Make the actual CORS request.
// function makeCorsRequest(url) {
//     // This is a sample server that supports CORS
//
//     var xhr = createCORSRequest('GET', url);
//     if (!xhr) {
//         alert('CORS not supported');
//         return;
//     }
//
//     xhr.send();
//
//     return xhr.status;
// }
// function UrlExists(url) {
//     var status = makeCorsRequest(url);
//     console.log(status);
//     if (status === 404) {
//         return false;
//     }
//     return true;
// }

var  UrlExists = function(url, callback){
    $.ajax({
        type: 'HEAD',
        url: url,
        success: function(){
            console.log("Sucess!");
            callback(true);
        },
        error: function() {
            callback(false);
        }
    });
};



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