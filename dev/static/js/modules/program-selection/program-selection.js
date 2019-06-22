import ready from '../../utils/documentReady.js';
import Select from '../select/select';

ready(function() {
  const isTouch = document.documentElement.classList.contains('touch');

  if (!isTouch) {
    const selects = Array.from(document.querySelectorAll('[data-custom-select]'));

    selects.forEach((item) => {
      const select = new Select(item);

      document.addEventListener('click', function(e) {
        select.close(e.target);
      })
    })
  }
});
