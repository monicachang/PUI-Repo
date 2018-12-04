$(document).ready(function(){

    // animate home page on scroll
    $(window).scroll(function() {
        if ($("body").scrollTop() > 100 || $("#welcome-statement1").scrollTop() > 100) {
            $('#welcome-statement1').removeClass("fadeInRight");        
            $('#welcome-statement1').addClass("fadeOut");
        } else {
            $('#welcome-statement1').removeClass("fadeOut");        
            $('#welcome-statement1').addClass("fadeIn");
        }

        if ($('#welcome-statement1').hasClass("fadeOut")) {
            $('#welcome-statement2').css("visibility", "visible"); 
            $('#welcome-statement2').attr("class", "animated fadeIn slow");
            // also fade in explore button
            $('#explore-button').css("visibility", "visible"); 
            $('#explore-button').attr("class", "animated fadeIn slow");
        } else {
            $('#welcome-statement2').attr("class", "animated fadeOut slow");
        }
    });

    // if the category was expanded or active, slide it down
    $(".active-category").next().slideDown();
    $(".open-dropdown").slideDown();
            

    // shrink navigation
    $("#work-nav").click(function(){
        $('#sidebar-wrapper').toggleClass('col-md-4 col-md-3');
        $('#content-wrapper').toggleClass('col-md-8 col-md-9');
    });

    $(".sidebar-dropdown-item").click(function(){
        $('#sidebar-wrapper').toggleClass('col-md-4 col-md-3');
        $('#content-wrapper').toggleClass('col-md-8 col-md-9');
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