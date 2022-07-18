$(document).ready(function(){
   $("#burger").click(function(){
      $("#menu").slideToggle("slow");
   });
});

$(window).scroll(function(){
	if($(window).scrollTop()>100){
		$('#to-toc').fadeIn(250);
	}
	else {
		$('#to-toc').fadeOut(250);
	};
});
