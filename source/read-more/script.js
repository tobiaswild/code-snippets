$(document).ready(function () {

    var origText = $('#test').text();
    var newText = "";
    var shortText = true;

    if ($('#test').text().length > 0) {
        var part = $('#test').text().split(" ");
        for (i = 0; i < 20; i++) {
            newText += part[i];
            newText += " ";
        }
        newText += "..."
        $("#test").text(newText);
        $("#read-more").html("Read more");
    }

    $('#read-more').stop().click(function (e) {
        if (shortText == true) {
            $("#test").text(origText);
            $("#read-more").html("Read less");
            shortText = false;
        } else {
            $("#test").text(newText);
            $("#read-more").html("Read more");
            shortText = true;
        }
    })
});    