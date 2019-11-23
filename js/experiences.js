
  $(window).scroll(function(){
    var hT4 = $('.info2').offset().top,
    hH4 = $('.info2').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT4+hH4-wH) && (hT4 > wS) && (wS+wH > hT4+hH4)){
      $('.content1').hide().fadeIn(900, function() {
        $(this).css('visibility','visible');
      });
    }
    hT5 = $('.git').offset().top,
    hH5 = $('.git').outerHeight();

    if (wS > (hT5+hH5-wH) && (hT5 > wS) && (wS+wH > hT5+hH5)){
      $('.content2').hide().fadeIn(1500, function() {
        $(this).css('visibility','visible');
      });
    }

    hT6 = $('.collapse').offset().top,
    hH6 = $('.collapse').outerHeight();

    if (wS > (hT6+hH6-wH) && (hT6 > wS) && (wS+wH > hT6+hH6)){
      $('.content3').hide().fadeIn(1950, function() {
        $(this).css('visibility','visible');
      });
    };

    hT7 = $('.codeweb').offset().top,
    hH7 = $('.codeweb').outerHeight();

    if (wS > (hT7+hH7-wH) && (hT7 > wS) && (wS+wH > hT7+hH7)){
      $('.content4').hide().fadeIn(1550, function() {
        $(this).css('visibility','visible');
      });
    };
  });
