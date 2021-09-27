'use strict';
// FAQ-accordion

(function () {
  var accordionElements = document.querySelectorAll('.questions__item');

  if (accordionElements) {
    accordionElements.forEach(function (elem) {
      elem.addEventListener('click', function () {
        elem.classList.toggle('questions__item--active');
      });
    });
  }
})();
