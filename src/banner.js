import element from './element';
import bread from './images/bread.png';

const theBanner = () => {
  const banner = element.create(
    'div',
    { class: 'content__banner' },
    element.create(
      'div',
      { class: 'banner__information' },
      element.create(
        'h1',
        { class: 'information__text' },
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
      ),
      element.create('button', { class: 'button--banner' }, 'Order Now')
    ),
    element.create('img', { class: 'img--banner', src: bread })
  );
  return banner;
};

export default theBanner;
