import { ready, MediaQuery } from '../../utils/utils';
import Slider from './slider.js';

ready(function() {
  new Slider({ target: '#countrySlider', turnOffOnBreakPoint: '768px' });

  new Slider({ target: '#programSlider', turnOffOnBreakPoint: '1280px', settings: {
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
