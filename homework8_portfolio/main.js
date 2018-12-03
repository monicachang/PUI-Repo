// Menu Toggle Script

// $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });
$(document).ready(function(){

    // if the category was expanded or active, slide it down
    $(".active-category").next().slideDown();
    $(".open-dropdown").slideDown();
            

    // shrink navigation
    $("#work-nav").click(function(){

        $('#sidebar-wrapper').toggleClass('col-md-4 col-md-3');
        $('#content-wrapper').toggleClass('col-md-8 col-md-9');

        $('#objective-statement').removeClass("fadeInRight");        
        $('#objective-statement').toggleClass("fadeOut");

    });

    // sidebar dropdown on click
    $(".nav-link").on("click", function() {
        if ($(this).next().hasClass("open-dropdown")) {
            // animate dropdown
            $(this).next().slideUp();
            $(this).next().removeClass("open-dropdown");
            $(this).next().addClass("closed-dropdown");
        } else {
            // animate dropdown
            $(this).next().slideDown();
            $(this).next().removeClass("closed-dropdown");
            $(this).next().addClass("open-dropdown");
        }
    });


});