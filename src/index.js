import './css/styles.css';
import build from './build';

const thePage = (() => {
  window.onbeforeunload = function () {
    scrollTo(0, 0);
  };

  build.home();

  const thePageToggle = function () {
    window.scrollTo(0, 0);

    const thePageCurrent = this.dataset.page;
    const content = document.querySelector('.content');

    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }

    if (thePageCurrent === 'menu') {
      build.menu();
    } else if (thePageCurrent === 'about') {
      build.about();
    } else if (thePageCurrent === 'contact') {
      build.contact();
    } else {
      build.home();
    }

    addEvents();
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

  addEvents();

  return { addEvents };
})();

if (module.hot) {
  module.hot.accept();

  let content = document.querySelector('.content');

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  build.home();
  thePage.addEvents();
}
