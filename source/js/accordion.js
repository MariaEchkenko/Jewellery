'use strict';
//FAQ-accordion

(function () {
  var accrodionElements = document.querySelectorAll('.questions__item');

  if (accrodionElements) {
    accrodionElements.forEach(function (elem) {
      elem.addEventListener('click', function () {
        elem.classList.toggle('questions__item--active');
      });
    });
  }
})();
