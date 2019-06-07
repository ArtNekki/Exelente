import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import togglePickPlace from './modules/pick-place';

$(document).ready(function () {
    svg4everybody({});
    console.log('togle', togglePickPlace());
});
