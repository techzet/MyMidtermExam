$(document).ready(function () {

/*this is the function for submenus if main menu is hovered*/
	$(".menu2").hover(function(){
		$(this).find('ul').stop(true, true).slideToggle('medium');
	});
	
	$(".menu3").hover(function(){
		$(this).find('ul').stop(true, true).slideToggle('medium');
	});
	
	$(".menu4").hover(function(){
		$(this).find('ul').stop(true, true).slideToggle('medium');
	});

/* this will bring out the login in menu	*/
	$("#login").hide();
	$("#signin").click(function(){
		$("#login").show();
	})
});


