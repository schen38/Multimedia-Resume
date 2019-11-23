  $(window).scroll(function(){
  var hT = $('.skill').offset().top,
    hH = $('.skill').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if ((wS+wH) > (hT+hH)){
        $(".skill").addClass("run");
    }
});