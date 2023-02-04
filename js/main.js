(function($){
	'use strict'
	// menu fixed:
	$(window).scroll( function(){
		var durotto = $(window).scrollTop();
		if (durotto > 120) {
			$('.header').addClass('.fixed')
			$('.menu ul li a').addClass('.menu')
			$('.logo span').css({
				color: "#FFF"
			})
			

		} else{
			$('.header').removeClass('.fixed')
			$('.menu ul li a').removeClass('.menu')
			$('.logo span').css({
				color: "#e2494b",
			})
		}
	});

	// The Mobile menu:
	$('.mobile-bar').on('click', function(){
		$('.food-menu-icon').fadeIn({});
	});
	$('.bar-icon-close').on('click', function(){
		$('.food-menu-icon').fadeOut({});
	});

	// Resize the menu:
	$(window).resize(function(){
		var screenSize = $(window).width();
		if (screenSize > 991) {
			$('.food-menu-icon').css({
				display:'none'
			});
		}
	});

}) (jQuery);