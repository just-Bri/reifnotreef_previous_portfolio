// Testing
// Github API
var apiUrl = "https://api.github.com/users/reifnotreef/repos"
var reposList = []
var i = 0

$(document).ready(function(){
    $.getJSON(apiUrl, function (data) {
    for (i = 0; i < data.length; i++) {
        var repoName = data[i].name;
        var repoDescription = data[i].description;
        var repoUrl = data[i].html_url;
        document.getElementById("gitHubRepos").innerHTML += 
        "<div class='repoCard'>" + "<h3>" + repoName + "</h3>" + 
        "<p>" + repoDescription + "</p>" + 
        "</br" +
        "<p><a href='" + repoUrl + "' alt='Repo URL'>Link to Github</a></p>" + 
        "</div>"
    }
    })
});