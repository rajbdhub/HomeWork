$(function () {

    /*$('.me').ripples();*/

    // Body dark & light//

    $('.body-color-dark').click(function () {
        $('#features, #ourteam, #works, #testimonials, #download').css({
            'background-color' : 'black',
            'transition' : '1s',
            'color' : 'white'
        });
        $('.body-color-dark').hide();

    });

    $('.body-color-light').click(function () {
        $('#features, #ourteam, #works, #testimonials, #download').css({
            'background-color' : 'white',
            'transition' : '1s',
            'color' : 'black'
        });
        $('.body-color-dark').show();

    });

    // Body dark & light End//

    $('.control-panel').click(function () {
        $('.body-color-maindiv').toggleClass('showpanel');
    })



});