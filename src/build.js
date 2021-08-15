import theNavBar from './nav';

const build = () => {
  //Build DOM
  const content = document.querySelector('.content');
  content.appendChild(theNavBar());
};

export default build;
