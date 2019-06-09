import $ from 'jquery';

export default function toggleMobileMenu() {
  return $('[data-mobile-menu-trigger]').on('click', function() {
    $('.page').toggleClass('page--mobile-menu-opened');
  })
}
