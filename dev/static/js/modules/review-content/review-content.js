const renderReview = (data) => {
  return `
    <div class='review-content'>
      <div class="review-content__header">
        <i class='review-content__lang review-content__lang--${data.lang}'></i>
        <h3 class='review-content__name'>${data.name}</h3>
        <span class='review-content__location'>${data.location}</span>
        <span class="review-content__close" data-review-details-hide></span>
      </div>
      <div class="review-content__description">
        ${data.text.join(' ')}
      </div>
    </div>
  `
};

export default renderReview;
