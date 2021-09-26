'use strict';
// FAQ-accordion

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

'use strict';
var header = document.querySelector('.page-header__wrapper');
var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__nav-toggle');

header.classList.remove('page-header__wrapper--nojs');

if (navToggle) {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('page-header__nav--closed')) {
      navMain.classList.remove('page-header__nav--closed');
      navMain.classList.add('page-header__nav--opened');
      header.classList.add('page-header__wrapper--active');
      document.body.classList.add('no-scroll');
    } else {
      navMain.classList.add('page-header__nav--closed');
      navMain.classList.remove('page-header__nav--opened');
      header.classList.remove('page-header__wrapper--active');
      document.body.classList.remove('no-scroll');
    }
  });
}

new Swiper('.swiper', {
  mousewheel: true,
  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-button-custom-prev',
    nextEl: '.swiper-button-custom-next',
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  breakpoints: {
    1024: {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class=" ${className} "> ${index + 1} </span>`;
        },
      },
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return `${current} of ${total}`;
        },
      },
    },
  },
});
