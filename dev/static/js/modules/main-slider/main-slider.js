import Swiper from 'swiper';

function formatFraction(number) {
  return number < 10 ? '0 ' + number : number;
}

var swiper = new Swiper('.swiper-container', {
     slidesPerView: 'auto',
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     pagination: {
        el: '.main-slider__pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="main-slider__pagination-num ' + currentClass + '"></span>' +
                   '<span class="main-slider__pagination-num ' + totalClass + '"></span>';
        },
        formatFractionCurrent: formatFraction,
        formatFractionTotal: formatFraction
      },

   });
