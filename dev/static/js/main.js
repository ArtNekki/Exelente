import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import togglePickPlace from './modules/pick-place';
import toggleMobileMenu from './modules/mobile-menu';

$(document).ready(function () {
    svg4everybody({});
    togglePickPlace();
    toggleMobileMenu();
});
