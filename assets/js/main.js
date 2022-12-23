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

$(document).ready(function(){

  // Figure-toggle for enter Modal status

  $(".modal-toggle").click(function () {
    $(this).parents(".modal").children(".modal-container").removeClass("inactive").addClass("active");
  });
  
  // Modal button for Next and Prev
  
  $(".btn-exit").click(function () {
    exitFullscreen();
    $(this).parents(".modal-container").removeClass("active").addClass("inactive");
    $(this).parents(".modal-button").children(".btn-fullscreen").show();
    $(this).parents(".modal-button").children(".btn-exitfullscreen").hide();
  });

  // Modal button for launchFullscreen
  
  $(".btn-fullscreen").click(function () {
    launchFullscreen(document.documentElement);
    $(this).hide();
    $(this).parents(".modal-button").children(".btn-exitfullscreen").show();
  });

  // Modal button for exitFullscreen

  $(".btn-exitfullscreen").click(function () {
    exitFullscreen();
    $(this).hide();
    $(this).parents(".modal-button").children(".btn-fullscreen").show();
  });
  
});

$(window).scroll(function(){

  // Single page button for totoc
  
  if($(window).scrollTop()>300){
      $('#totoc').fadeIn(250);
  }
  else {
      $('#totoc').fadeOut(250);
  };

});