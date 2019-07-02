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


// document.querySelectorAll('.slider--posts .slider__container').forEach(function (element, index) {
//
//   const postSlider = new Swiper(element, {
//     navigation: {
//       nextEl: element.parentNode.querySelector('.slider__btn--next'),
//       prevEl: element.parentNode.querySelector('.slider__btn--prev'),
//    }
//  });
//
//  console.log('swiper', element.parentNode.querySelector('.slider__btn--next'));
// })
