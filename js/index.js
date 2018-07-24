$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        dots: true,
        autoHeight: true
    });
});
console.log("Testando: " + $($("#testando")).offset().top)

$("a.menu").click(function () {
    var elemento = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(elemento).offset().top
    }, 500);
});

let bool = true;
$(document).scroll(() => {
    if ((window.scrollY > $(".numeros").offset().top - window.innerHeight / 1.25) && bool) {
        $('.counter1').animateNumber({ number: 455 }, 1200);
        $('.counter2').animateNumber({ number: 1909100 }, 800);
        $('.counter3').animateNumber({ number: 3599 }, 1000);
        bool = false;
    }
});


