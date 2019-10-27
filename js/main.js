$ (function () {
	
if (screen.width > '1200') {
	$('.partners__content').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1500,
	});
}


if (screen.width < '1200') {
	$('.partners__content').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1500,
	});
}

if (screen.width < '320') {
	$('.partners__content').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1500,
	});
}


})

