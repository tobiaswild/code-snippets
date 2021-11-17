$(document).ready(function () {

    var url = window.location.href;
    var parts = url.split("/");
    var crumbsText = "";
    var backText = "";
    var backLength = parts.length-1-3;

    for (var k = 0; k < backLength; i++) {
        backText += "../"
    }

    for (var i = 3; i < parts.length-1; i++) {
        console.log(parts[i]);
        console.log(backText);
        crumbsText +=  " > " + '<a href="../' + backText + parts[i] + '/">' + parts[i] + '</a>';
        $("#crumbs").html(crumbsText);
        backText = backText - "../";
    }

})