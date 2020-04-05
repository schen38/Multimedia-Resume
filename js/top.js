var isVisible = false;
$(window).scroll(function(){
    var shouldBeVisible = $(window).scrollTop()>250;
    if (shouldBeVisible && !isVisible) {
        isVisible = true;
        $('.top').css('visibility','visible');
        $('.top').fadeIn(350);
    } else if (isVisible && !shouldBeVisible) {
        isVisible = false;
        $('.top').hide();
    }
});