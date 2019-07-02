import Swiper from 'swiper';
import ready from '../../utils/documentReady';

const initPostSlider = function(tab) {
  const index = tab.id.split('-')[1];
  const activePane = tab.parentNode.querySelectorAll('.tabs__pane')[index];
  const container = activePane.querySelector('.swiper-container');

  const postSlider = new Swiper(container, {
    navigation: {
      nextEl: container.parentNode.querySelector('.slider__btn--next'),
      prevEl: container.parentNode.querySelector('.slider__btn--prev'),
    }
  })
}

ready(function() {
  const tabs = document.querySelectorAll('input[name="blog-post"]');

  const activeTab = Array.from(tabs).filter((tab) => {
    return tab.checked;
  })[0];

  initPostSlider(activeTab);

  tabs.forEach((tab) => {
    tab.addEventListener('change', function() {
      initPostSlider(this);
    })
  });
});
