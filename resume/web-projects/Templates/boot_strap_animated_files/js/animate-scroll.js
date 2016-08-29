$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 200) {

            $('#my_kid').addClass('animated flipInX infinite');
        }

    });
});


$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 500) {

            $('#my_jello').addClass('animated jello infinite');
        }
        console.log(verticalScroll);

    });
});