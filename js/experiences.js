$(window).scroll(function(){
  var shouldBeVisible0 = $(window).scrollTop()>450;
  if (shouldBeVisible0 ) {
      $('.content0').css({visibility:'visible'}).show({fadeIn:'1500'});
  }else if (!shouldBeVisible0) {
    $('.content0').hide();
  }
});

$(window).scroll(function(){
  var shouldBeVisible1 = $(window).scrollTop()>800;
  if (shouldBeVisible1 ) {
      $('.content1').css({visibility:'visible'}).show({fadeIn:'1500'});
  }else if (!shouldBeVisible1) {
    $('.content1').hide();
  }
});

$(window).scroll(function(){
  var shouldBeVisible2 = $(window).scrollTop()>1150;
  if (shouldBeVisible2 ) {
      $('.content2').css({visibility:'visible'}).show({fadeIn:'1500'});
  }else if (!shouldBeVisible2) {
    $('.content2').hide();
  }
});

$(window).scroll(function(){
  var shouldBeVisible3 = $(window).scrollTop()>1500;
  if (shouldBeVisible3 ) {
      $('.content3').css({visibility:'visible'}).show({fadeIn:'1500'});
  }else if (!shouldBeVisible3) {
    $('.content3').hide();
  }
});

$(window).scroll(function(){
  var shouldBeVisible4 = $(window).scrollTop()>1850;
  if (shouldBeVisible4 ) {
      $('.content4').css({visibility:'visible'}).show({fadeIn:'1500'});
  }else if (!shouldBeVisible4) {
    $('.content4').hide();
  }
});
