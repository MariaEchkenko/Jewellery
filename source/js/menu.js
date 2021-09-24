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
