// SLICK слайдер

// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		adaptiveHeight: false,
// 		autoplay: true,
// 		autoplaySpeed: 3000,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
// 		nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					dots: true,
// 					arrows: false
// 				}
// 			}
// 		]
// 	});
// });

// !!!!!   Tiny Slider   !!!!!
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	responsive: {
		640: {
		edgePadding: 20,
		gutter: 20,
		items: 1,
		},
		700: {
		gutter: 1
		},
		900: {
		items: 1,
		}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});
