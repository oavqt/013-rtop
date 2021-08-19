import element from './element';
import bread from './images/bread.png';

const theBanner = () => {
  //Banner
  const banner = element.create(
    'div',
    { class: 'content__banner' },
    element.create(
      'div',
      { class: 'banner__description' },
      element.create(
        'h1',
        { class: 'description__title' },
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
      ),
      element.create('button', { class: 'button--banner' }, 'Order Now')
    ),
    element.create(
      'div',
      { class: 'banner__img' },
      element.create('img', { class: 'img--banner', src: bread })
    )
  );
  return banner;
};

export default theBanner;
