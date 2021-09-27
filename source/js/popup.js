'use strict';

(function () {
  var popupButton = document.querySelector('.page-header__link--login');
  var popup = document.querySelector('.popup');
  var popupWrapper = document.querySelector('.popup__wrapper');
  // var popupSendButton = document.querySelector('.popup__button');
  var popupCloseButton = document.querySelector('.popup__button-close');
  var userMail = document.querySelector('#user-mail');

  popupButton.addEventListener('click', function () {
    popup.classList.remove('hidden');
    document.body.classList.add('no-scroll');

    userMail.focus();

    localStorage.setItem('mail', userMail.value);

    popupCloseButton.addEventListener('click', closePopup);

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        closePopupHandler();
      }
    });

    popup.addEventListener('click', function (evt) {
      if (evt.target !== popupWrapper) {
        closePopupHandler();
      }
    });

  });

  popupWrapper.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });

  function closePopup() {
    popup.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }

  function closePopupHandler() {
    closePopup();
    window.removeEventListener('keydown', closePopupHandler);
    popupCloseButton.removeEventListener('click', closePopupHandler);
    popupButton.removeEventListener('click', closePopupHandler);
  }

  /* Ловушка фокуса */

  function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), input[type="email"]:not([disabled]), input[type="password"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }

  if (popup) {
    trapFocus(popup);
  }

})();
