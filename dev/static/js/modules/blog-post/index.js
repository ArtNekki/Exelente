import { MediaQuery, ready } from '../../utils/utils';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

const settings =  {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpointsInverse: true,
  breakpoints: {
    [MediaQuery.SM]: {
      slidesPerView: 2,
      spaceBetween: 14
    },
    [MediaQuery.LG]: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
}

ready(function() {
  const tabs = new Tabs({ target: '#blogPost' });

  tabs.onChange = function(activeTab, activePane) {
    new Slider({ target: activePane.querySelector('.swiper-container'), settings, turnOffOnBreakPoint: MediaQuery.LG })
  }

  new Slider({ target: tabs.getActivePane().querySelector('.swiper-container'), settings, turnOffOnBreakPoint: MediaQuery.LG })
});
