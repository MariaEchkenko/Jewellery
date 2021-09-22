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

'use strict';
var header = document.querySelector('.page-header__wrapper');
var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__nav-toggle');

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

'use strict';

if (document.querySelector('.new-items')) {
  var slider = new Swiper('.swiper', {
    navigation: {
      nextEl: '.new-items__navigation-button--next',
      prevEl: '.new-items__navigation-button--prev'
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4
      },
    },
  });
}
