import './css/styles.css';
import build from './build';

const thePage = (() => {
  //Functions
  const thePageToggle = function () {
    window.scrollTo(0, 0);

    const thePageCurrent = this.dataset.page;
    const content = document.querySelector('.content');

    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }

    if (thePageCurrent === 'menu') {
      build.menu().then((theMenu) => {
        append(theMenu.default);
        document.querySelector('.a--menu').classList.add('a--active');

        addEvents();
      });
    } else if (thePageCurrent === 'about') {
      build.about().then((theAbout) => {
        append(theAbout.default);
        document.querySelector('.a--about').classList.add('a--active');

        addEvents();
      });
    } else if (thePageCurrent === 'contact') {
      build.contact().then((theContact) => {
        append(theContact.default);
        document.querySelector('.a--contact').classList.add('a--active');

        addEvents();
      });
    } else {
      build.home();
      addEvents();
    }
  };

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

  const append = function (module) {
    const content = document.querySelector('.content');
    const footer = document.querySelector('.content__footer');

    content.insertBefore(module, footer);
  };

  //First Load
  window.onbeforeunload = function () {
    scrollTo(0, 0);
  };
  build.home();
  addEvents();

  return { addEvents };
})();

//Server HMR
if (module.hot) {
  module.hot.accept();

  let content = document.querySelector('.content');

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  build.home();
  thePage.addEvents();
}
