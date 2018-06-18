

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        dots: true,
        autoHeight: true
    });
});


$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
