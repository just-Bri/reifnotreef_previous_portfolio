// Testing
// Github API
var apiUrl = "https://api.github.com/search/repositories?q=user:reifnotreef+fork:false"
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
