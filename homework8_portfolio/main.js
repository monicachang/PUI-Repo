// Menu Toggle Script

// $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });
$(document).ready(function(){

    $("#work-nav").click(function(){

        $('#sidebar-wrapper').toggleClass('col-4 col-2');
        $('#content-wrapper').toggleClass('col-8 col-10');

        // if ($("#sidebar-brand").children[0].css("text-align") == "right") {
        //     $("#sidebar-brand").children[0].css("text-align") = "left";
        // }
        // else {
        //     $("#sidebar-brand").children[0].css("text-align") = "right";
        // }


        // var moveWidth = $("#sidebar-wrapper").width();
        // $("#sidebar-wrapper").animate({
        //     width: "-="+moveWidth/3,
        //     opacity: "0.25" 
        // });

        // $("#content-wrapper").animate({
        //     left: "-="+moveWidth/3,
        //     width: "+="+moveWidth/3,
        // });

    });

});