$(function(){

	//jquery here!
	//console.log($);

	//select with any valid css selector
	//selects one element
	var menu_button = $( ".mobile_buttons" );

	//selects an array of 3 elements
	//var nav_buttons = $( ".main_nav li");


	var nav_list = $(".mobile_buttons ul");

	var menu_visible = false;
	nav_list.hide();

	//http://api.jquery.com/  for all jQuery functions
	//menu_button.addClass("newClass");

	menu_button.on("mousedown", function(e){
		
		if(menu_visible){

			nav_list.slideUp("slow");
			menu_visible = false;
		}
		else{
			nav_list.slideDown("slow");
			menu_visible = true;

		}

		//console.log(e);
	});