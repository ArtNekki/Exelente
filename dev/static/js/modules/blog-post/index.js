import { MediaQuery, ready } from '../../utils/utils';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

ready(function() {
  const tabs = new Tabs({ target: '#blogPost' });

  tabs.onChange = function(activeTab, activePane) {
    new Slider({ target: activePane.querySelector('.swiper-container'), turnOffOnBreakPoint: MediaQuery.XL })
  }

  new Slider({ target: tabs.getActivePane().querySelector('.swiper-container'), turnOffOnBreakPoint: MediaQuery.XL })
});
