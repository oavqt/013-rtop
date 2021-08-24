import './css/styles.css';
import build from './build';

const thePage = (() => {
  //Mobile
  let theScreenSize = window.matchMedia('(max-width: 959px)');

  //Functions
  const thePageToggle = function () {
    window.scrollTo(0, 0);

    const thePageCurrent = this.dataset.page;
    const content = document.querySelector('.content');
    content.classList.remove('content--active');

    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }

    if (thePageCurrent === 'menu') {
      build.menu().then((theMenu) => {
        append(theMenu.default);
        document.querySelector('.a--menu').classList.add('a--active');

        reattachEvents();
      });
    } else if (thePageCurrent === 'about') {
      build.about().then((theAbout) => {
        append(theAbout.default);
        document.querySelector('.a--about').classList.add('a--active');

        reattachEvents();
      });
    } else if (thePageCurrent === 'contact') {
      build.contact().then((theContact) => {
        append(theContact.default);
        document.querySelector('.a--contact').classList.add('a--active');

        reattachEvents();
      });
    } else {
      build.home();
      reattachEvents();
    }
  };

  const append = function (module) {
    const content = document.querySelector('.content');
    const footer = document.querySelector('.content__footer');

    content.insertBefore(module, footer);
  };

  const reattachEvents = () => {
    theMobileLogo();
    theMobileDropdown();
    addEvents();
  };

  //Mobile
  const theMobileLogo = () => {
    if (theScreenSize.matches) {
      return import(
        /*webpackChunkName: 'theLogo'*/ './images/myLogoMobile.png'
      ).then(({ default: theLogo }) => {
        theNewLogo(theLogo);
      });
    } else {
      return import(/*webpackChunkName: 'theLogo'*/ './images/myLogo.png').then(
        ({ default: theLogo }) => {
          theNewLogo(theLogo);
        }
      );
    }
  };

  const theNewLogo = (theLogo) => {
    const theCurrentLogo = document.querySelector('.img--logo');
    theCurrentLogo.src = theLogo;
  };

  const theDropdownEvent = () => {
    const theNav = document.querySelector('.bar__list');

    if (theNav.classList.contains('bar__list--active')) {
      addRemoveClassList('remove');
      theNav.classList.add('bar__list--inactive');
    } else {
      addRemoveClassList('add');
      theNav.classList.remove('bar__list--inactive');
    }
  };

  const addRemoveClassList = (addRemove) => {
    const content = document.querySelector('.content');
    const theNav = document.querySelector('.bar__list');
    const theBanner = document.querySelector('.content__banner');
    const theImg = document.querySelectorAll('img');
    const theButton = document.querySelectorAll('button');
    const theInput = document.querySelectorAll('input');
    const theTextArea = document.querySelector('textarea');

    content.classList[addRemove]('content--active');
    theNav.classList[addRemove]('bar__list--active');

    if (theBanner) {
      theBanner.classList[addRemove]('content__banner--active');
    }
    if (theInput) {
      theInput.forEach((input) => {
        input.classList[addRemove]('input--active');
      });
    }
    if (theTextArea) {
      theTextArea.classList[addRemove]('textarea--active');
    }

    theImg.forEach((img) => {
      img.classList[addRemove]('img--active');
    });

    theButton.forEach((button) => {
      button.classList[addRemove]('button--active');
    });
  };

  //Events
  const addEvents = function () {
    const theNavAs = [
      ...document.querySelectorAll(
        '.a--home, .a--menu, .a--about, .a--contact'
      ),
    ];

    theNavAs.forEach((as) => {
      as.addEventListener('click', thePageToggle);
    });
  };

  //Mobile
  const theMobileDropdown = () => {
    const theCurrentLogo = document.querySelector('.img--logo');

    if (theScreenSize.matches) {
      theCurrentLogo.addEventListener('click', theDropdownEvent);
    } else {
      theCurrentLogo.removeEventListener('click', theDropdownEvent);
    }
  };

  theScreenSize.addEventListener('change', theMobileLogo);
  theScreenSize.addEventListener('change', theMobileDropdown);

  //First Load
  window.onbeforeunload = function () {
    scrollTo(0, 0);
  };
  build.home();
  reattachEvents();

  return { reattachEvents };
})();

//Server HMR
if (module.hot) {
  module.hot.accept();

  let content = document.querySelector('.content');

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  build.home();
  thePage.reattachEvents();
}
