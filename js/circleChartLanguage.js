$(window).on('scroll',function() {
  var hT1 = $('.skill1').offset().top,
    hH1 = $('.skill1').outerHeight(),
    wH1 = $(window).height(),
    wS1 = $(this).scrollTop();
    if (wS1 > (hT1+hH1-wH1) && (hT1 > wS1) && (wS1+wH1 > hT1+hH1)){      
      $(".circleChart#4").circleChart({
        size: 50,
        value: 75,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });

      $(".circleChart#5").circleChart({
        size: 50,
        value: 70,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });
      $(".circleChart#6").circleChart({
        size: 50,
        value: 80,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });

      $(".circleChart#7").circleChart({
        size: 50,
        value: 50,
        text: 0,
        onDraw: function(el, circle) {
          circle.text(Math.round(circle.value) + "...%");
        }
      });
    }
});