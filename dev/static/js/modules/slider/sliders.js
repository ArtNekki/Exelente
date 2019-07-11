import Slider from './slider.js';
import ready from '../../utils/documentReady';

ready(function() {
  new Slider({ target: '#countrySlider', turnOffOnBreakPoint: '768px' });

  new Slider({ target: '#programSlider', turnOffOnBreakPoint: '1280px', settings: {
    slidesPerView: 1,
    spaceBetween: 20
  }});

  new Slider({ target: '#partnerSlider', settings: {
    slidesPerView: 1,
    spaceBetween: 1
  }});
});
