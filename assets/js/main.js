// Function for Modal button launchFullscreen 

function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.msRequestFullscreen){
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

// Function for Modal button exitFullscreen 

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

// *************************************************************************************************
// gallery buttons
// *************************************************************************************************


$(document).ready(function(){


  // button for launchFullscreen
  $(".btn-fullscreen").click(function () {
    launchFullscreen(document.documentElement);
    $(this).hide();
    $(this).parents(".gallery-button").children(".btn-exitfullscreen").show();
  });

  // button for exitFullscreen
  $(".btn-exitfullscreen").click(function () {
    exitFullscreen();
    $(this).hide();
    $(this).parents(".gallery-button").children(".btn-fullscreen").show();
  });

  // button for right
  $(".btn-right").click(function () {
    $(".gallery-stage").children(".active").fadeOut(0).addClass("inactive temp").removeClass("active");
    if ($(".gallery-stage").children(".temp").next().length >0){
      $(".gallery-stage").children(".temp").next().fadeIn(500).addClass("active").removeClass("inactive");
    } else {
      $(".gallery-stage").children(".gallery-item").first().fadeIn(500).addClass("active").removeClass("inactive");
    }
    $(".gallery-stage").children(".temp").removeClass("temp");
  });

    // button for left
    $(".btn-left").click(function () {
      $(".gallery-stage").children(".active").fadeOut(0).addClass("inactive temp").removeClass("active");
      if ($(".gallery-stage").children(".temp").prev().length >0){
        $(".gallery-stage").children(".temp").prev().fadeIn(500).addClass("active").removeClass("inactive");
      } else {
        $(".gallery-stage").children(".gallery-item").last().fadeIn(500).addClass("active").removeClass("inactive");
      }
      $(".gallery-stage").children(".temp").removeClass("temp");
    });

    // button for item-infomation
    $(".btn-text").click(function () {
      $(".gallery-item").children(".inactive").fadeToggle(1000);
    });

});

// *************************************************************************************************
// button for go to table of content
// *************************************************************************************************

$(window).scroll(function(){

  // Single page button for totoc
  
  if($(window).scrollTop()>300){
      $('#totoc').fadeIn(250);
  }
  else {
      $('#totoc').fadeOut(250);
  };

});