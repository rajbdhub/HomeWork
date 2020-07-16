$(function () {
    var hasFormError = true;

    $('.user_span').hide();
    $('.password_span').hide();
    $('.password2_span').hide();
    $('.email_span').hide();


    $('.username').focusout(function () {
        focusUser();
    });
    $('.password1').focusout(function () {
        focusPassword();
    });
    $('.password2').focusout(function () {
        focusPasswordValue();
    });
    $('.email').focusout(function () {
        emailVerify();
    });


    function focusUser() {
    var userFun = $('.username').val().length;
    if (userFun < 6 || userFun > 15) {
        $('.user_span').html('<i class="far fa-times-circle"></i> Atleast 6 characters!').css('color' , 'red').show(100);
        $('.username').css('background-color' , '#ff6b81');
        username = true;
         hasFormError = 'Enter your usrname';

    } else {
        $('.user_span').hide();
        hasFormError = false;
    }
    };


    function focusPassword() {
        var userPass = $('.password1').val().length;
        if (userPass < 8 || userPass > 10) {
            $('.password_span').html('<i class="far fa-times-circle"></i> Atleast 8 characters!').css('color' , 'red').show(100);
            $('.password1').css('background-color' , '#ff6b81');
            password1 = true;
            hasFormError = true;
        } else {
            $('.password_span').hide();
            hasFormError = false;

        }
    };


    function focusPasswordValue() {
        var userPassValue = $('.password1').val();
        var userPasswordTwo =   $('.password2').val();
        if (userPassValue != userPasswordTwo) {
            $('.password2_span').html('<i class="far fa-times-circle"></i> Not Matched!').css('color' , 'red').show(100);
            $('.password2').css('background-color' , '#ff6b81');
            password2 = true;
            hasFormError = true;


        } else {
            $('.password2_span').hide();
            hasFormError = false;

        }
    };


    function emailVerify() {
        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (pattern.test($('.email').val())) {
            $('.email_span').hide();
            email = true;
            hasFormError = false;

        } else {
            hasFormError = true;
            $('.email_span').html('<i class="far fa-times-circle"></i> Invalid Email!').css('color' , 'red').show(100);
            $('.email').css('background-color' , '#ff6b81');

        }
    };


    $(document).on('submit', 'form.myform', function(){
        if(hasFormError){
            alert(hasFormError);
            return false;
        }
    });

    // this
    // append, prepend
    // find
    // closest
    // child
    // parent
    // AJAX
    // for each
    var contents;
    contents = 'My Name is';
    contents += 'John';

    // need data form server
    // then(){
        // ki hgobe 
    // }

    alert('ok');




});