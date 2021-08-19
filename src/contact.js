import element from './element';
import aMenu from './images/aMenu.png';
import fMenu from './images/fMenu.png';

const theContact = () => {
  //Contact
  const contact = element.create(
    'div',
    { class: 'content__contact' },
    element.create(
      'div',
      { class: 'contact__title' },
      element.create('h1', { class: 'title__main' }, 'theContact')
    ),
    //Form
    element.create(
      'div',
      { class: 'contact__body' },
      element.create(
        'div',
        { class: 'body__form' },
        element.create(
          'div',
          { class: 'form__title' },
          element.create(
            'h1',
            { class: 'title__main' },
            'Quisque in nibh elementum,'
          ),
          element.create(
            'h2',
            { class: 'title__sub' },
            ' Suspendisse ultrices erat ligula, non fringilla urna vulputate non; auris, aliquet, mi nec posuere pharetra, lorem massa tristique elit, id molestie urna arcu scelerisque ipsum.'
          )
        ),
        element.create(
          'div',
          { class: 'form__body' },
          element.create(
            'div',
            { class: 'body__input' },
            element.create(
              'label',
              { class: 'label--name' },
              element.create('span', { class: 'name__text' }, 'Name'),
              element.create('input', { class: 'input--name', type: 'text' })
            ),
            element.create(
              'label',
              { class: 'label--email' },
              element.create('span', { class: 'email__text' }, 'Email'),
              element.create('input', { class: 'input--email', type: 'email' })
            ),
            element.create(
              'label',
              { class: 'label--message' },
              element.create('span', { class: 'message__text' }, 'Message'),
              element.create('textarea', {
                class: 'textarea--message',
              })
            ),
            element.create(
              'div',
              { class: 'input__button' },
              element.create('button', { class: 'button--input' }, 'Submit')
            )
          )
        )
      ),
      element.create(
        'div',
        { class: 'body__img' },
        element.create('img', { class: 'img--body', src: aMenu }),
        element.create('img', { class: 'img--body', src: fMenu })
      )
    )
  );

  return contact;
};

export default theContact;
