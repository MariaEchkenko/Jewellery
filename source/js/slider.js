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
