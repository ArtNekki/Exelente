import Slider from '../slider/slider';
import utils from '../../utils/utils';
import ready from '../../utils/documentReady'
import reviewsData from '../../utils/reviewData';
import renderReview from '../review-content/review-content';

const sliderSettings = {
  init: false,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  loop: true,
  spaceBetween: 28,
  slideActiveClass: 'main-reviews-slide--active',
  slideDuplicateActiveClass: 'main-reviews-slide--active',
};

class MainReviews {
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
    sliderAPI.on('init', this._loadReviewContent.bind(sliderAPI, this));
    sliderAPI.init();
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
      self._aside.innerHTML = renderReview(currentReviewData);
      self._truncateReviewDescription(self._aside.querySelector('.main-reviews__description'));
    }
  }

  _truncateReviewDescription(description) {
    const textLimit = 365;

    if (description.textContent.length >= textLimit) {
      const descriptionPreview = description.cloneNode(true);

      description.classList.add('main-reviews__description--full');
      descriptionPreview.classList.add('main-reviews__description--truncated');
      utils.truncate(descriptionPreview, textLimit, '...');

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

ready(function() {
  const mainReviews = new MainReviews({ target: '#mainReviews' });
});
