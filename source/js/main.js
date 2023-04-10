import './accordion.js';
import './show-more.js';
import './scroll.js';
import './modal.js';

import {onEventCalllback} from './tel-mask.js';

window.addEventListener('DOMContentLoaded', () => {

  const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phoneInputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, onEventCalllback);
    }
  }
});
