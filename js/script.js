$num = $('.example-card__item').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
	$('.example-card__item:nth-child(' + $even + ')').addClass('active');
	$('.example-card__item:nth-child(' + $even + ')').prev().addClass('prev');
	$('.example-card__item:nth-child(' + $even + ')').next().addClass('next');
} else {
	$('.example-card__item:nth-child(' + $odd + ')').addClass('active');
	$('.example-card__item:nth-child(' + $odd + ')').prev().addClass('prev');
	$('.example-card__item:nth-child(' + $odd + ')').next().addClass('next');
}

$('.example-card__item').click(function() {
	$slide = $('.active').width();
	console.log($('.active').position().left);

	if ($(this).hasClass('next')) {
	$('.example-card').stop(false, true).animate({left: '-=' + $slide});
	} else if ($(this).hasClass('prev')) {
	$('.example-card').stop(false, true).animate({left: '+=' + $slide});
	}

	$(this).removeClass('prev next');
	$(this).siblings().removeClass('prev active next');

	$(this).addClass('active');
	$(this).prev().addClass('prev');
	$(this).next().addClass('next');
});

// Keyboard nav
$('html body').keydown(function(e) {
	if (e.keyCode == 37) { // left
		$('.active').prev().trigger('click');
	}
	else if (e.keyCode == 39) { // right
	$('.active').next().trigger('click');
	}
});

$('.examples__button-left').click(function(){
	$('.example-card__item.active').prev().trigger('click');
});

$('.examples__button-right').click(function(){
	$('.example-card__item.active').next().trigger('click');
});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		 items:1,
		 margin:40,
		 loop: true,
		 dots: true
	});
 });

 $('.menu-button').click(function() {
	$(this).toggleClass('active');
	$('.menu').toggleClass('menu-hidden');
	$('.menu').toggleClass('menu-show');
	$('.menu-button__toggler').toggleClass('toggled');
});