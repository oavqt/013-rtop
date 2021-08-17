import element from './element';

const theFooter = () => {
  const the = element.create(
    'div',
    { class: 'content__footer' },
    element.create(
      'footer',
      {},
      element.create(
        'div',
        { class: 'footer__download' },
        element.create(
          'div',
          { class: 'download__title' },
          element.create('h1', { class: 'title__main' }, 'Sequi?'),
          element.create(
            'h2',
            { class: 'title__sub' },
            'Consequatur libero dicta qui, ipsa beatae tenetur. Consectetur!'
          )
        ),

        element.create(
          'div',
          { class: 'download__mobile' },
          element.create('div', { class: 'mobile__apple' }),
          element.create('div', { class: 'mobile__play' })
        )
      ),
      element.create('div', { class: 'footer__about' })
    )
  );

  return the;
};

export default theFooter;
