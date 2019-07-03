import Swiper from 'swiper';
import ready from '../../utils/documentReady';

class SliderTabs {
  constructor({ tabToggle, swiperSettings = {}, turnOffOnBreakPoint }) {
    this._tabs = document.querySelectorAll(tabToggle);
    this._swiperSettings = swiperSettings;

    if(turnOffOnBreakPoint) {
      this._breakpoint = window.matchMedia(`(min-width: ${turnOffOnBreakPoint}px)`);
      this._breakpoint.addListener(this._checkBreakpoint.bind(this));
    }

    this._init(this._tabs);
  }

  _init(tabs) {
    this._getCurrentSlider(this._getActiveTab());

    tabs.forEach((tab) => {
      tab.addEventListener('change', (e) => {
        this._getCurrentSlider(e.currentTarget);
      })
    });
  }

  _getCurrentSlider(tab) {
    if (this._breakpoint && this._breakpoint.matches) return;

    const index = tab.id.split('-')[1];
    const activePane = tab.parentNode.querySelectorAll('.tabs__pane')[index];

    return this._initSlider(activePane.querySelector('.swiper-container'));
  }

  _getActiveTab() {
    return Array.from(this._tabs).filter((tab) => {
      return tab.checked;
    })[0];
  }

  _initSlider(slider) {
    this._slider = new Swiper(slider, Object.assign(this._swiperSettings, {
      navigation: {
        nextEl: slider.parentNode.querySelector('.slider__btn--next'),
        prevEl: slider.parentNode.querySelector('.slider__btn--prev'),
      }
    }));
  }

  _checkBreakpoint() {
     if (this._breakpoint && this._breakpoint.matches && this._slider) {
        this._sliderId = this._slider.$el[0].id;
        this._slider.destroy(true, true);
     } else {
        this._sliderId ? this._initSlider(document.getElementById(this._sliderId)) : this._getCurrentSlider(this._getActiveTab());
     }
  };
}

ready(function() {
  new SliderTabs({ tabToggle: 'input[name="blog-post"]', turnOffOnBreakPoint: '1280' });
});
