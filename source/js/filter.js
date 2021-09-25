'use strict';
// Filter-accordion

(function () {
  var accordionButtons = document.querySelectorAll('.filter h3');
  var accordionElements = document.querySelectorAll('.filter__el');

  accordionElements.forEach(function (element) {
    element.classList.remove('filter__el--nojs');
  });
  if (accordionButtons) {
    accordionButtons.forEach(function (button) {
      button.addEventListener('click', function (evt) {
        evt.target.parentNode.classList.toggle('filter__el--active');
      });
    });
  }
})();
