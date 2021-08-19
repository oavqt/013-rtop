import element from './element';

const theAbout = () => {
  //About
  const about = element.create(
    'div',
    { class: 'content__about' },
    element.create(
      'div',
      { class: 'about__img' },
      element.create('img', { class: 'img--about' })
    ),
    element.create(
      'div',
      { class: 'about__description' },
      element.create(
        'div',
        { class: 'description__title' },
        element.create('h1', { class: 'title__main' }),
        element.create('h2', { class: 'title__sub' })
      ),
      element.create(
        'div',
        { class: 'description__body' },
        element.create('p', { class: 'body__text' }),
        element.create('quote', { class: 'quote--body' })
      )
    )
  );

  return about;
};

export default theAbout;
