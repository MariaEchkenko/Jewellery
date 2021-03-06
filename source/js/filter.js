'use strict';
// Filter-accordion

(function () {
  var accordionButtons = document.querySelectorAll('.filter h3');
  var accordionElements = document.querySelectorAll('.filter__el');

  if (accordionElements) {
    accordionElements.forEach(function (element) {
      element.classList.remove('filter__el--nojs');
    });
  }

  if (accordionButtons) {
    accordionButtons.forEach(function (button) {
      button.addEventListener('click', classToggle);
      button.addEventListener('keydown', onEnterKeydown);
    });
  }

  function classToggle(evt) {
    evt.target.parentNode.classList.toggle('filter__el--active');
  }

  function onEnterKeydown(evt) {
    if (evt.key === 'Enter' || evt.keyCode === 13) {
      document.activeElement.parentNode.classList.toggle('filter__el--active');
    }
  }
})();

// Show filter in tablet

(function () {
  var filter = document.querySelector('.catalog__filter');
  var filterOpenButton = document.querySelector('.filter__open-button');
  var filterCloseButton = document.querySelector('.filter__close-button');
  var overlay = document.querySelector('.overlay');

  if (filterOpenButton) {
    filterOpenButton.addEventListener('click', function () {
      filter.classList.add('catalog__filter--active');
      overlay.classList.remove('hidden');
      filterCloseButton.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    });
  }

  if (filterCloseButton) {
    filterCloseButton.addEventListener('click', function () {
      filter.classList.remove('catalog__filter--active');
      overlay.classList.add('hidden');
      filterCloseButton.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    });
  }
})();
