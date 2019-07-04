import Slider from '../slider/slider';
import Tabs from '../tabs/tabs.js';
import { MediaQuery } from '../../utils/utils.js';
import ready from '../../utils/documentReady';

ready(function() {
  const tabs = new Tabs({ target: '#blogPost' });

  tabs.onChange = function(activeTab, activePane) {
    const slider = new Slider({ target: activePane.querySelector('.swiper-container'), turnOffOnBreakPoint: '1280px' })
  }

  const slider = new Slider({ target: tabs.getActivePane().querySelector('.swiper-container'), turnOffOnBreakPoint: '1280px' })
});
