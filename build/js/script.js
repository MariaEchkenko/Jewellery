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

'use strict'

if (document.querySelector('.new-items')) {
  var slider = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
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
