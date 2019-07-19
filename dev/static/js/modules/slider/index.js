import { ready, MediaQuery } from '../../utils/utils';
import Slider from './slider.js';

ready(function() {
  new Slider({ target: '#countrySlider', turnOffOnBreakPoint: MediaQuery.MD });

  new Slider({ target: '#programSlider', turnOffOnBreakPoint: MediaQuery.XL, settings: {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpointsInverse: true,
    breakpoints: {
      [MediaQuery.MD]: {
        slidesPerView: 2,
        spaceBetween: 14
      }
    }
  }});

  new Slider({ target: '#partnerSlider', settings: {
    slidesPerView: 1,
    spaceBetween: 1
  }});
});
