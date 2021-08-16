import theNavBar from './nav';
import theBanner from './banner';

const build = () => {
  //Build DOM
  const content = document.querySelector('.content');
  content.appendChild(theNavBar());
  content.appendChild(theBanner());
};

export default build;
