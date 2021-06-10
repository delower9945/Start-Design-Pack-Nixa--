$(function () {

    "use strict";


    // Menu slider

    $('.meeeenu').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 8,
    });   
    // Banner slider

    $('.banner_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    $('.banner_text_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1500,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



//    $("#register_modal").modal()

    // Closes responsive menu when a scroll link is clicked

    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // Wow js

    new WOW().init();



});
