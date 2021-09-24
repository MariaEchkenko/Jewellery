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
