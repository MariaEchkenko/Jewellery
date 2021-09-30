'use strict';
// FAQ-accordion

(function () {
  var accordionElements = document.querySelectorAll('.questions__item');

  if (accordionElements) {
    accordionElements.forEach(function (elem) {
      elem.classList.remove('questions__item--nojs');
      elem.addEventListener('click', function () {
        elem.classList.toggle('questions__item--active');
      });
      elem.addEventListener('keydown', onEnterKeydown);

      function onEnterKeydown() {
        elem.addEventListener('keydown', function (evt) {
          if (evt.key === 'Space' || evt.key === 'Enter') {
            evt.preventDefault();
            elem.classList.toggle('questions__item--active');
          }
        });
      }
    });
  }
})();
