import $ from 'jquery';

export default function togglePickPlace() {
  return $('[data-pick-place-trigger]').on('click', function() {
    $('.header').toggleClass('header--pick-place-opened');
  })
}
