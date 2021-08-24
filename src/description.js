import element from './element';
import order from './images/myOrder.png';
import deliver from './images/myDeliver.png';
import quality from './images/myQuality.png';

const theDescription = () => {
  //Description
  const thePoints = element.create(
    'div',
    { class: 'content__description' },
    element.create(
      'div',
      { class: 'description__title' },
      element.create(
        'h1',
        { class: 'title__main' },
        'Lorem ipsum dolor sit amet.'
      ),
      element.create('h2', { class: 'title__sub' }, 'Lorem, ipsum dolor.')
    ),
    //Description Cards
    element.create(
      'div',
      { class: 'description__body' },

      element.create(
        'div',
        { class: 'body__order' },
        element.create(
          'a',
          { class: 'a--order', href: '' },
          element.create('img', { class: 'img--order', src: order })
        ),
        element.create(
          'div',
          { class: 'order__text' },
          element.create('h2', {}, 'Illum voluptatibus!'),
          element.create(
            'p',
            {},
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis officia facere reiciendis.'
          )
        )
      ),
      element.create(
        'div',
        { class: 'body__deliver' },
        element.create(
          'a',
          { class: 'a--deliver', href: '' },
          element.create('img', { class: 'img--deliver', src: deliver })
        ),
        element.create(
          'div',
          { class: 'deliver__text' },
          element.create('h2', {}, 'Numquam eaque rerum!'),
          element.create(
            'p',
            {},
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora harum minus laudantium.'
          )
        )
      ),
      element.create(
        'div',
        { class: 'body__quality' },
        element.create(
          'a',
          { class: 'a--quality', href: '' },
          element.create('img', { class: 'img--quality', src: quality })
        ),
        element.create(
          'div',
          { class: 'quality__text' },
          element.create('h2', {}, 'Mollitia vero quam.'),
          element.create(
            'p',
            {},
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet laudantium quod?'
          )
        )
      )
    )
  );

  return thePoints;
};

export default theDescription;
