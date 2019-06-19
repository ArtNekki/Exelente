import $ from 'jquery';

$(document).ready(function() {
  $('[data-pick-place-trigger]').on('click', function() {
    $('.header').toggleClass('header--pick-place-opened');
  })
})

export default {};
