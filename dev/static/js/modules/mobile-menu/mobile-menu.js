import $ from 'jquery';

$(document).ready(function() {
  $('[data-mobile-menu-trigger]').on('click', function() {
    $('.page').toggleClass('page--mobile-menu-opened');
  })
})

export default {};
