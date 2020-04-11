$(window).scroll(function(){
  	var shouldBeVisible5 = $(window).scrollTop()>2200;
  	if (shouldBeVisible5 ) {
        $(".skill").addClass("run");
        $(".skill2").addClass("run");
    }else if (!shouldBeVisible5) {
    	$(".skill").removeClass("run");
        $(".skill2").removeClass("run");
    }
});
