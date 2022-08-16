$(function(){
/*	$('.intro_hero h1').stop().animate({opacity: 1}, 1600, 'easeInOutQuad', function(){
		$('.intro_hero').stop().animate({opacity: 0}, 1000, 'easeInOutQuad', function(){
			$('.intro_hero').css('display','none');
			$('.index_container').stop().animate({opacity: 1}, 1000, 'easeInOutQuad');
		});
	});*/
	$('.fadein').on('inview', function(event, isInView) {
		if (isInView) {
			$(this).stop().animate({opacity: 1}, 500);
		} 
	});
	$('#sp-menu').click(function(){
		$(this).toggleClass('open');
		if($('#sp-menu').hasClass('open')){
			$('#global-nav').css('display','table');
			no_scroll();
		} else {
			$('#global-nav').css('display','none');
			return_scroll();
		};
	});
	var menuHeight = 100;
	var startPos = 0;
	$(window).scroll(function(){
	  var currentPos = $(this).scrollTop();
	  if (currentPos > startPos) {
	    if($(window).scrollTop() >= 50) {
	      $("#header").css({"animation": "fadeout 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards"}); //"top": "-" + menuHeight + "px", 
	    }
	  } else {
	    $("#header").css({"animation": "fadein 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards"});//.css("top", 0 + "px");
	  }
	  startPos = currentPos;
	});

});

function no_scroll(){
	var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	$(document).on(scroll_event,function(e){e.preventDefault();});
	$(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
}
 
function return_scroll(){
	var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	$(document).off(scroll_event);
	$(document).off('.noScroll');
}
