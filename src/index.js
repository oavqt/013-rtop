import './css/styles.css';
import build from './build';

build();

if (module.hot) {
  module.hot.accept('./build', () => {
    let content = document.querySelector('.content');
    content.remove();
    console.log('yo');

    let refresh = document.createElement('div');
    refresh.classList.add('content');
    document.body.appendChild(refresh);
    build();
  });
}
