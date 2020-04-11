$(window).on('scroll',function() {
  var hT2 = $('.codelanguage').offset().top,
    hH2 = $('.codelanguage').outerHeight(),
    wH2 = $(window).height(),
    wS2 = $(this).scrollTop();
    if (wS2 > (hT2+hH2-wH2) && (hT2 > wS2) && (wS2+wH2 > hT2+hH2)){
      $(".circleChart#8").circleChart({
        size: 50,
        value: 80,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });

      $(".circleChart#9").circleChart({
        size: 50,
        value: 75,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });
    }
});
