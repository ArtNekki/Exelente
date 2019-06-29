import Swiper from 'swiper';
import utils from '../../utils/utils';
import ready from '../../utils/documentReady'
import reviewsData from '../../utils/reviewData';
import renderReview from '../review-content/review-content';

const truncateReviewDescription = function(container) {
  const textLimit = 365;
  const reviewDescription = container.querySelector('.review-content__description');

  if(reviewDescription.textContent.length >= textLimit) {
    const reviewDescriptionPreview = reviewDescription.cloneNode(true);

    reviewDescription.classList.add('review-content__description--full');
    reviewDescriptionPreview.classList.add('review-content__description--truncated');

    utils.truncate(reviewDescriptionPreview, textLimit, '...');

    const showMoreTrigger = document.createElement('span');
          showMoreTrigger.classList.add('review-content__more');
          showMoreTrigger.dataset.reviewDetailsShow = true;
          showMoreTrigger.textContent = 'еще';

    reviewDescriptionPreview.appendChild(showMoreTrigger);
    reviewDescription.parentNode.insertBefore(reviewDescriptionPreview, reviewDescription);
  }
}

const loadReviewContent = function() {
  const currentSlide = this.slides[this.activeIndex];

  const currentReviewData = reviewsData.filter((data) => {
    return data.id == currentSlide.id;
  })[0];

  if (currentReviewData) {
    const container = this.$el[0].parentNode.querySelector('.slider__extra-block');
    const reviewContent = renderReview(currentReviewData);

    container.innerHTML = reviewContent;
    truncateReviewDescription(container);
  }
}

const enableReviewsSlider = function() {
  const slider = new Swiper('#reviewsSlider', {
      init: false,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      loop: true,
      spaceBetween: 28,
      slideActiveClass: 'review-slide--active',
      slideDuplicateActiveClass: 'review-slide--active',
      navigation: {
        nextEl: '.slider--reviews .slider__btn--next',
        prevEl: '.slider--reviews .slider__btn--prev',
     }
   });

  // slider.on('init', loadReviewContent);
  slider.on('slideChange', loadReviewContent);
  slider.init();

  return slider;
}

ready(function() {
  const reviewsSlider = enableReviewsSlider();
  let container = null;
  let slider = null;

  document.addEventListener('click', function(e) {
    const reviewDetailsShow = e.target.closest('[data-review-details-show]');
    const reviewDetailsHide = e.target.closest('[data-review-details-hide]');

    if (reviewDetailsShow) {
      const activeSlide = reviewsSlider.slides[reviewsSlider.activeIndex];
      container = activeSlide.closest('.slider__container');
      slider = container.closest('.slider--reviews');

      reviewsSlider.detachEvents();

      // container.style.flexBasis = parseInt(activeSlide.style.width, 10) + 'px';
      slider.classList.add('slider--reviews-opened');
    }

    if (container && slider && reviewDetailsHide) {
      container.style.flexBasis = 'auto';
      slider.classList.remove('slider--reviews-opened');

      reviewsSlider.attachEvents();
    }

  });
});
