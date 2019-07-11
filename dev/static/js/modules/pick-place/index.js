import $ from 'jquery';

$(document).ready(function() {
  $('[data-pick-place-trigger]').on('click', function() {
    $('.page-header').toggleClass('page-header--pick-place-opened');
  })
})

export default {};
