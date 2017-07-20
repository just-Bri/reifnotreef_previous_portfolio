// Github API
// Took me a while to figure out which specific request to use, and how to use the filters/query correctly.
// But it's working as intended now!
var apiUrl = "https://api.github.com/search/repositories?q=user:reifnotreef+fork:false"
// search repos by username, filter toonly recieve non-forked repos!
var reposList = []
var i = 0

$(document).ready(function(){
    $.getJSON(apiUrl, function (data) {
        for (i = 0; i < data.items.length; i++) {
            var repoName = data.items[i].name;
            var repoDescription = data.items[i].description;
            var repoUrl = data.items[i].html_url;
            console.log(data.items[i]);
            document.getElementById("gitHubRepos").innerHTML += 
            "<div class='repoCard'>" + "<h3>" + repoName + "</h3>" + 
            "<p>" + repoDescription + "</p>" + 
            "</br" +
            "<p><a href='" + repoUrl + "' alt='Repo URL'>Link to Github</a></p>" + 
            "</div>"
        }
    })
});
