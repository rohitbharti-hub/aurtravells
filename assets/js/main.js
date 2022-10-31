$().ready(function () {
    $('.slick-carousel').slick({
        arrows: false,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 1,
        infinite: false
    });
});


$(document).ready(function () {
    /* ===================================
     Loading Timeout
     ====================================== */
    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 200);
});

/* =====================================
        Wow
 ====================================== */

if ($(window).width() > 767) {
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

//fixed on scroll
var header = $(".custom-header");
$(window).scroll(function () {
    $(window).scrollTop() >= 150 ? header.addClass("scrolled") : header.removeClass("scrolled")
});



//disable  Right click & F-12
// To disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

// To disable F12 options
document.onkeypress = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onmousedown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}

// To To Disable ctrl+c, ctrl+u

jQuery(document).ready(function($){
$(document).keydown(function(event) {
var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
//alert('Sorry, This Functionality Has Been Disabled!');
//disable key press porcessing
return false;
}
});
});