import Swiper from 'swiper';

const breakpoint = window.matchMedia('(min-width: 768px)');

let swiper;

const breakpointChecker = function() {
      console.log(breakpoint.matches)

   if ( breakpoint.matches === true && swiper !== undefined ) {
      swiper.destroy( true, false );
      return;

   } else if ( breakpoint.matches === false ) {
      return enableSwiper();
   }
};

const enableSwiper = function () {
  swiper = new Swiper('#countrySlider', {
    // autoHeight: true,
    // slidesPerView: 1,
    // spaceBetween: 0,
    // breakpoints: {
    //   480: {
    //     slidesPerView: 1,
    //     spaceBetween: 0
    //   },
    //   768: {
    //     slidesPerView: 1,
    //     spaceBetween: 0
    //   },
    //   1280: {
    //     slidesPerView: 9,
    //     spaceBetween: 0
    //   }
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
 });
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();
