$('.header-order-btn, .top-btn').click(function() {
    $('.on-pop-up').fadeIn();
    $('.on-pop-up').addClass("pop-up-flex");
});

$('.pop-up-x').click(function() {
    $('.on-pop-up').fadeOut();
});

