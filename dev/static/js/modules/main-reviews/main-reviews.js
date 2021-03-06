import { truncate, MediaQuery } from '../../utils/utils';
import Slider from '../slider/slider';
import reviewsData from '../../utils/reviewData';

const sliderSettings = {
  init: false,
  slidesPerView: 'auto',
  spaceBetween: 0,
  slideToClickedSlide: true,
  breakpointsInverse: true,
  loop: true,
  slideActiveClass: 'main-reviews-slide--active',
  slideDuplicateActiveClass: 'main-reviews-slide--active',
  breakpoints: {
    [MediaQuery.MD]: {
      slidesPerView: 'auto',
      spaceBetween: 14
    },
    [MediaQuery.XL]: {
      slidesPerView: 'auto',
      spaceBetween: 28
    }
  }
};

export default class MainReviews {
  constructor({ target }) {
    this._container = document.querySelector(target);
    this._init();
  }

  _init() {
    const slider = new Slider({ target: '#reviewsSlider', settings: sliderSettings });
    const sliderAPI = slider.getAPI();

    this._aside = this._container.querySelector('.main-reviews__aside');
    this._sliderAPI = sliderAPI;
    this._container.addEventListener('click', this._reviewContentToggle.bind(this));

    sliderAPI.on('slideChange', this._loadReviewContent.bind(sliderAPI, this));
    sliderAPI.init();
  }

  _getReviewContentTemplate(data) {
    return `
      <div class='main-reviews__content'>
        <div class='main-reviews__header'>
          <i class='main-reviews__lang main-reviews__lang--${data.lang}'></i>
          <h3 class='main-reviews__content-name'>${data.name}</h3>
          <span class='main-reviews__location'>${data.location}</span>
          <span class="main-reviews__close" data-review-details-hide></span>
        </div>
        <div class="main-reviews__description">
          ${data.text.join(' ')}
        </div>
      </div>
    `
  }

  _reviewContentToggle(e) {
    const show = e.target.closest('[data-review-details-show]');
    const hide = e.target.closest('[data-review-details-hide]');

    if (show) {
      this._sliderAPI.detachEvents();
      this._container.classList.add('main-reviews--opened');
    }

    if (hide) {
      this._sliderAPI.attachEvents();
      this._container.classList.remove('main-reviews--opened');
    }
  }

  _loadReviewContent(self) {
    const currentSlide = this.slides[this.activeIndex];

    const currentReviewData = reviewsData.filter((data) => {
      return data.id == currentSlide.id;
    })[0];

    if (currentReviewData) {
      self._aside.innerHTML = self._getReviewContentTemplate(currentReviewData);
      self._truncateReviewDescription(self._aside.querySelector('.main-reviews__description'));
    }
  }

  _truncateReviewDescription(description) {
    const textLimit = 365;

    if (description.textContent.length >= textLimit) {
      const descriptionPreview = description.cloneNode(true);

      description.classList.add('main-reviews__description--full');
      descriptionPreview.classList.add('main-reviews__description--truncated');
      truncate(descriptionPreview, textLimit, '...');

      const showMoreTrigger = this._createShowMoreTrigger()

      descriptionPreview.appendChild(showMoreTrigger);
      description.parentNode.insertBefore(descriptionPreview, description);
    }
  }

  _createShowMoreTrigger() {
    const trigger = document.createElement('span');

    trigger.classList.add('main-reviews__more');
    trigger.dataset.reviewDetailsShow = true;
    trigger.textContent = 'еще';

    return trigger;
  }
}
