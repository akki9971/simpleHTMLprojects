$(document).ready(function () {
    $(window).scroll(function(){
        if($(this).scrollTop() >= 50){
        $('#scrolltotop').fadeIn(100);
    }
    else {
        $('#scrolltotop').fadeOut(100);

    }
});

    $('#scrolltotop').click(function(){
        $('body,html').animate({scrollTop: 0}, 400)
    });

});