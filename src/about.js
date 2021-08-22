import element from './element';
import about from './images/about.png';

const theAbout = () => {
  //About
  const history = element.create(
    'div',
    { class: 'content__about' },
    element.create(
      'div',
      { class: 'about__title' },
      element.create('h1', { class: 'title__main' }, 'theAbout')
    ),
    element.create(
      'div',
      { class: 'about__img' },
      element.create('img', { class: 'img--about', src: about })
    ),
    element.create(
      'div',
      { class: 'about__description' },
      element.create(
        'div',
        { class: 'description__title' },
        element.create(
          'h1',
          { class: 'title__main' },
          'Sed vehicula diam vel odio eleifend, vitae mollis metus dictum.'
        ),
        element.create(
          'h2',
          { class: 'title__sub' },
          'Sed et enim diam. Phasellus mattis nulla eros. Vestibulum faucibus lectus in risus suscipit dapibus.'
        )
      ),
      element.create(
        'div',
        { class: 'description__body' },
        element.create(
          'p',
          { class: 'body__text' },
          'In hac habitasse platea dictumst. Praesent varius enim sit amet magna scelerisque, eu feugiat elit bibendum. Aliquam erat volutpat. Phasellus ut eros lacinia, vulputate nisl in, scelerisque metus. Cras varius ipsum quis est maximus interdum. Suspendisse quis tristique felis, et consectetur turpis. Donec ac libero vel lectus vulputate mollis a sodales velit. Morbi sit amet ligula vel magna dapibus volutpat. Quisque ut mattis enim. Sed suscipit purus lectus. Nulla placerat porttitor lacinia. Aliquam sagittis sem eu justo tristique, porttitor faucibus est faucibus. Sed turpis odio, viverra vel consectetur in, ornare a orci. Mauris sit amet enim hendrerit, commodo arcu faucibus, interdum nulla.'
        ),
        element.create(
          'q',
          { class: 'q--body' },
          'Aenean porta, ligula at vulputate sollicitudin, odio orci mattis libero, in aliquet lorem lacus ut odio'
        )
      )
    )
  );

  return history;
};

export default theAbout;
