import theNavBar from './nav';
import theBanner from './banner';
import theDescription from './description';
import theMenu from './menu';
import theAbout from './about';
import theContact from './contact';
import theFooter from './footer';

const build = () => {
  //Build DOM
  const content = document.querySelector('.content');
  content.appendChild(theNavBar());
  content.appendChild(theBanner());
  content.appendChild(theDescription());
  content.appendChild(theMenu());
  content.appendChild(theAbout());
  content.appendChild(theContact());
  content.appendChild(theFooter());
};

export default build;
