$(function () {



/*
$("#user_name").keyup(function () {

    var name_ength = $("#user_name").val();
    if (name_ength == "") {
        $("h1").html("Please input your name!");
    } else {
        $("h1").html("Your name is: " + name_ength);
    }
});

    $(".btn").click(function () {
        $(".form").clone().prependTo("h5");

    });

$(document).on('keyup', '#user_name', function () {
    var name_ength = $(this).val();
    if (name_ength == "") {
        $(this).find('.clone h1').html("Please input your name!");
    } else {
        $(this).find('.clone h1').html("Your name is: " + name_ength);
    }


});
*/

    $("#user_name").keyup(function () {

        var name_ength = $("#user_name").val();
        if (name_ength == "") {
            $("h1").html("Please input your name!");
        } else {
            $("h1").html("Your name is: " + name_ength);
        }
    });

    $(document).on('keyup', '#user_name', function(){
        // My Code Here
        var name_ength = $(this).val();
        if (name_ength == "") {
            $(this).closest('tr').find('.output').html('Please input your name!');
        } else {
            $(this).closest('tr').find('.output').html("Your name is: " + name_ength);
        }
    });


    $(".btn").click(function () {
        var mainItem = $(this);

        $(".form").clone().appendTo("h5");
    });






});