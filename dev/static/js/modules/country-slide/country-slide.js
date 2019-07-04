import Slider from '../slider/slider';
import ready from '../../utils/documentReady';

ready(function() {
  new Slider({ target: '#countrySlider', turnOffOnBreakPoint: '768px' });
});
