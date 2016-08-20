/**
 * Created by rickz on 8/3/2016.
 */
var myapp = angular.module("myapp",[]);
myapp.controller("mainController",["$scope",function ($scope) {
    $scope.profileHandle = "Search";
    $scope.twitterLink = "https://twitter.com/";
    $scope.youtubeLink = "https://www.youtube.com/user/";
    $scope.githubLink = "https://github.com/";
    $scope.instagramLink = "https://www.instagram.com/";
    $scope.tumblrLink = "http://.tumblr.com/";
    $scope.list = [];
    $scope.submit = function () {
        $scope.list.push($scope.twitterLink + $scope.profileHandle);
        $scope.list.push($scope.youtubeLink + $scope.profileHandle);
        $scope.list.push($scope.githubLink + $scope.profileHandle);
        $scope.list.push($scope.instagramLink + $scope.profileHandle);
        $scope.list.push("http://" + $scope.profileHandle + ".tumblr.com/");
        //check if links are valid using node
        if (document.getElementById("twitterLink") != null){
            //if valid set to green check and unhide
            //else set to red x and unhide
            var parentTwitter = document.getElementById("twitterLink").parentNode;
            var imgTwitter = parentTwitter.innerHTML;
            parentTwitter.innerHTML = '<a target= "_blank" href = ' + $scope.list[0] + '>' + imgTwitter + '</a>';
        }
        if (document.getElementById("youtubeLink") != null){
            var parentYoutube = document.getElementById("youtubeLink").parentNode;
            var imgYoutube =  parentYoutube.innerHTML;
            parentYoutube.innerHTML = '<a target= "_blank" href = ' + $scope.list[1] + '>' + imgYoutube + '</a>';
        }
        if (document.getElementById("githubLink") != null){
            var parentGithub = document.getElementById("githubLink").parentNode;
            var imgGithub = parentGithub.innerHTML;
            parentGithub.innerHTML = '<a target= "_blank" href = ' + $scope.list[2] + '>' + imgGithub + '</a>';
        }
        if (document.getElementById("instaLink") != null){
            var parentInsta = document.getElementById("instaLink").parentNode;
            var imgInsta = parentInsta.innerHTML;
            parentInsta.innerHTML = '<a target= "_blank" href = ' + $scope.list[3] + '>' + imgInsta+ '</a>';
        }
        if (document.getElementById("tumblrLink") != null){
            var parentTumblr = document.getElementById("tumblrLink").parentNode;
            var imgTumblr = parentTumblr.innerHTML;
            parentTumblr.innerHTML = '<a target= "_blank" href = ' + $scope.list[4] + '>' + imgTumblr + '</a>';
        }
    };
    var reset = document.getElementById("arrayReset");
    if (reset){
        reset.addEventListener("keypress",function(event){
            $scope.list = [];
            $scope.twitterLink = "https://twitter.com/";
            $scope.youtubeLink = "https://www.youtube.com/user/";
            $scope.githubLink = "https://github.com/";
            $scope.instagramLink = "https://www.instagram.com/";
            $scope.tumblrLink = "http://.tumblr.com/";
        });
    }
}]);
