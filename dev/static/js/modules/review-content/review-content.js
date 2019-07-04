const renderReview = (data) => {
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
};

export default renderReview;
