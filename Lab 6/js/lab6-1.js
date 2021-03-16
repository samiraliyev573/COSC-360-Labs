/* jQuery and JavaScript code here for lab6-1.html */
$(document).ready(function () {
    // Question 5
    $("#pageTitle").text("Lab 6 - DOM Manipulation with jQuery");
    //Question 6
    var className = $("#msgArea").attr("class");
    $("#msgArea").text("My class is " + className);

    //Question 7
    var color = $(".btn-primary").css("background-color");

    $(".btn-primary").css("background-color", "red");

    //Question 8
    $("body").css("background-color", "ivory");

    //Question 9

    $(".center-icons").addClass('selected');
    // Question 10,11 a,b
    $(".panel")
        .on("click", function () {
            $("#message").html("You clicked this panel");
        })
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + "y=" + e.pageY);
        })
        .on("mouseleave", function () {
            $("#message").html("The mouse has left");
        });

    //Question 12

    var image = $('<img src = "images/art/thumbs/13030.jpg"/>');
    $("#panel-2").append(image);




    //Question 13

    $("#stories img")
        .on("mouseover", function () {
            // construct preview filename based on existing img
            var alt = $(this).attr('alt');
            var src = $(this).attr('src');
            var newsrc = src.replace("small", "medium");

            // make dynamic element with larger preview image and caption
            var preview = $('<div id="preview"></div>');
            var image = $('<img src="' + newsrc + '">');
            var caption = $('<p>' + alt + '</p>');

            preview.append(image);
            preview.append(caption);
            $("#stories").after(preview);
            $(preview).fadeIn(1000);
            $(this).addClass("gray");
        })
        .on("mouseleave", function () {
            $(this).removeClass("gray");
            $("#preview").fadeOut(1000);
            console.log(this);
        });







});
