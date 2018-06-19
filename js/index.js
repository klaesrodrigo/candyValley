

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        dots: true,
        autoHeight: true
    });
});


$("a.menu").click(function() {
    var elemento = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(elemento).offset().top
    }, 500);
});
