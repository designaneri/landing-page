$(document).ready(function() {
    // AOS Init
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });

    // Key Differentiators description
    if ($(window).width() < 1440) {
        $(".key-description").attr('colspan', 4);
    }else
        $(".key-description").attr('colspan', 3);
        
    $(window).resize(function() {
        if ($(window).width() < 1440) {
            $(".key-description").attr('colspan', 4);
        }else
        	$(".key-description").attr('colspan', 3);
    })
});