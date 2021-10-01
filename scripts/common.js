$(document).ready(function(){
	
	// :: -- Navbar toggle for potrait mode :: -- //
	$('.navbar-toggle').click(function(e){
		e.preventDefault();
		$('.main-nav').toggleClass('active');
	});


	// :: -- Dark Mode toggle :: -- //
	var currentTheme = localStorage.getItem('theme');
	if(currentTheme){
		$('html').attr('data-theme',currentTheme);
		
		if(currentTheme == "dark"){
			$("input[name=theme]").prop("checked",true);
		}
	}
	
	$("input[name=theme]").click(function(){
		if($(this).prop("checked") == true){
  			$("html").attr("data-theme","dark");
			$('html').addClass('transition');
			setTimeout(function() {
				$('html').removeClass('transition');
			}, 500);
			localStorage.setItem('theme','dark');
		}
		else if($(this).prop("checked") == false){
			$('html').addClass('transition');
			$("html").attr("data-theme","light");
			setTimeout(function() {
				$('html').removeClass('transition');
			}, 500);
			localStorage.setItem('theme','light');
		}
	});

});
