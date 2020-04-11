$(window).on('scroll',function() {
    var hT = $('.git').offset().top,
    hH = $('.git').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $(".circleChart#0").circleChart({
        size: 50,
        value: 85,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });

      $(".circleChart#1").circleChart({
        size: 50,
        value: 80,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });

      $(".circleChart#2").circleChart({
        size: 50,
        value: 80,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });

      $(".circleChart#3").circleChart({
        size: 50,
        value: 60,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });
    }
});
