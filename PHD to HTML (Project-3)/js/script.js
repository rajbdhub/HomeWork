$(function () {

    //water effect- ripples

    $('.header').ripples({
        dropRadius: 50,
        perturbance: 800
    });

    //navbar hide and show

    $('.navbar-toggler-icon').click(function () {
    $('.menu').slideToggle();
    return false;
    });

    $('.menu').hide();


    // Toggle

    $('.toggle').hide();


    $('.toggle').click(function () {

        $('html').animate({'scrollTop': '0'}, 500);
        return false;

    });



    $(window).scroll(function () {
        let top = $(window).scrollTop();
        if (top > 145) {
            $('.toggle').show();
        } else {
            $('.toggle').hide();
        }
    });


});