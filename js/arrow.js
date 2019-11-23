var info3 = document.getElementById('info3')
  $(".rotate").click(function () {
    $(this).toggleClass("up");
  })
  $(".arrow").click(function(){
    $("collapse").toggle();                 
    if(info3.style.heigh = "10vmax"){
      info3.style.height="100%";
    }
    if(info3.style.height="100%"){  
      info3.style.heigh="10vmax";
    }

  });