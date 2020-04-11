$(window).scroll(function(){
    var shouldBeVisible = $(window).scrollTop()>250;
    if (shouldBeVisible) {
        $('.top').css({visibility:'visible'}).show({fadeIn:'500'});
    } else if (!shouldBeVisible) {
        $('.top').hide();
    }
});
