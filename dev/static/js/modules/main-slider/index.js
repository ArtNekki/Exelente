import { ready } from '../../utils/utils';
import Swiper from 'swiper';

const settings = {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
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
  }
};

function formatFraction(number) {
  return number < 10 ? '0 ' + number : number;
}

ready(function() {
  new Swiper('#mainSlider', settings);
});
