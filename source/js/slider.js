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
