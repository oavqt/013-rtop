import element from './element';

const theContact = () => {
  //Contact
  const contact = element.create(
    'div',
    { class: 'content__contact' },
    //Form
    element.create(
      'div',
      { class: 'contact__form' },
      element.create(
        'div',
        { class: 'form__title' },
        element.create('h1', { class: 'title__main' }),
        element.create('h2', { class: 'title__sub' })
      ),
      element.create(
        'div',
        { class: 'form__body' },
        element.create(
          'label',
          { class: 'body__name' },
          element.create('input', { class: 'input--name', type: 'text' })
        ),
        element.create(
          'label',
          { class: 'body__email' },
          element.create('input', { class: 'input--email', type: 'email' })
        ),
        element.create(
          'label',
          { class: 'body__message' },
          element.create('textarea', { class: 'textarea--message' })
        )
      ),
      element.create(
        'div',
        { class: 'form__button' },
        element.create('button', { class: 'button--form' }, 'Submit')
      )
    ),
    element.create(
      'div',
      { class: 'contact__img' },
      element.create('img', { class: 'img--contact' })
    )
  );

  return contact;
};

export default theContact;
