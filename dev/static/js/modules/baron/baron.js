import ready from '../../utils/documentReady';
import baron from 'baron';

ready(function(){
  baron({
    root: '#baron-pick-place',
    scroller: '.baron__scroller',
    bar: '.baron__bar',
    scrollingCls: 'baron--scrolling',
    draggingCls: 'baron--dragging',
    barOnCls: 'baron--scrollbar',
    impact: 'scroller'
  }).controls({
      // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
      // track: '.baron__track',
      forward: '.baron__control--down',
      backward: '.baron__control--up'
    });
});

export default {};
