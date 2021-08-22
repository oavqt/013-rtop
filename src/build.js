import theNavBar from './nav';
import theBanner from './banner';
import theDescription from './description';
import theMenu from './menu';
import theAbout from './about';
import theContact from './contact';
import theFooter from './footer';

//Build DOM
const build = {
  home: () => {
    const content = document.querySelector('.content');

    content.appendChild(theNavBar());
    content.appendChild(theBanner());
    content.appendChild(theDescription());
    content.appendChild(theFooter());
  },

  menu: () => {
    const content = document.querySelector('.content');

    content.appendChild(theNavBar());
    content.appendChild(theMenu());
    content.appendChild(theFooter());

    document.querySelector('.a--menu').classList.add('a--active');
  },

  about: () => {
    const content = document.querySelector('.content');

    content.appendChild(theNavBar());
    content.appendChild(theAbout());
    content.appendChild(theFooter());

    document.querySelector('.a--about').classList.add('a--active');
  },

  contact: () => {
    const content = document.querySelector('.content');

    content.appendChild(theNavBar());
    content.appendChild(theContact());
    content.appendChild(theFooter());

    document.querySelector('.a--contact').classList.add('a--active');
  },
};

export default build;
