jQuery(function ($) {
	'use strict';




	$(document).ready(function () {

		//запускаем слайдер
		$('.bottom-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.top-slider',
			infinite: false,
			responsive: [
				{
					breakpoint: 740,
					settings: 'unslick'
				}
			]
		});
		$('.top-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.bottom-slider',
			arrows: true,
			dots: false,
			focusOnSelect: true,
			infinite: false,
			adaptiveHeight: true,
			nextArrow: $('.slick-next-custom'),
			prevArrow: $('.slick-prev-custom'),
			responsive: [
				{
					breakpoint: 740,
					settings: 'unslick'
				}
			]
		});


		//Включаем мобильный слайдер
		if ($(window).width() >= 0 && $(window).width() <= 739) {
			$('.bottom-slider').slick({
				nextArrow: $('.slick-next-custom'),
				prevArrow: $('.slick-prev-custom'),
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				infinite: false
			});
			$('.bottom-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
				var currentNum = currentSlide + 1; // индекс текущего слайда
				$('.slider-num__current').text(currentNum);


			});
		};


		//вставляем данные в счетчик слайдов
		//1.общее количество
		var all = $('.bottom-slider__item');
		$('.slider-num__all').text(all.length);

		//2.текущий слайд
		if ($(window).width() >= 740) {

			$('.top-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
				var currentNum = currentSlide + 1; // индекс текущего слайда
				$('.slider-num__current').text(currentNum);


			});
		}



	});


});
