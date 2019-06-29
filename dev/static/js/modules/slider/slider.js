import Swiper from 'swiper';

const breakpoint = window.matchMedia('(min-width: 768px)');

let swiper;

const breakpointChecker = function() {
      console.log(breakpoint.matches)

   if ( breakpoint.matches === true && swiper !== undefined ) {
      swiper.destroy( true, true );
      return;

   } else if ( breakpoint.matches === false ) {
      return enableSwiper();
   }
};

const enableSwiper = function () {
  swiper = new Swiper('#countrySlider', {
    navigation: {
      nextEl: '.slider--countries .slider__btn--next',
      prevEl: '.slider--countries .slider__btn--prev',
   }
 });
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();
