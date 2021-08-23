import theNavBar from './nav';
import theBanner from './banner';
import theDescription from './description';
import theFooter from './footer';

//Build DOM
const build = {
  home: () => {
    build.append('home');
  },

  menu: async () => {
    const { default: theMenu } = await import(
      /*webpackChunkName: 'theMenu'*/ './menu'
    );

    build.append();

    return { default: theMenu() };
  },

  about: async () => {
    const { default: theAbout } = await import(
      /*webpackChunkName: 'theAbout'*/ './about'
    );

    build.append();

    return { default: theAbout() };
  },

  contact: async () => {
    const { default: theContact } = await import(
      /*webpackChunkName: 'theContact'*/ './contact'
    );

    build.append();

    return { default: theContact() };
  },

  append: (home) => {
    const content = document.querySelector('.content');

    if (home) {
      content.appendChild(theNavBar());
      content.appendChild(theBanner());
      content.appendChild(theDescription());
      content.appendChild(theFooter());
    } else {
      content.appendChild(theNavBar());
      content.appendChild(theFooter());
    }
  },
};

export default build;
