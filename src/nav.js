import element from './element';
import logo from './images/myLogo.png';
import cart from './images/myCart.png';

const theNavBar = () => {
  const theNav = element.create(
    //Header
    'div',
    { class: 'content__header' },
    element.create(
      'header',
      {},
      element.create(
        'div',
        { class: 'header__nav' },
        //Logo
        element.create(
          'div',
          { class: 'nav__logo' },
          element.create(
            'a',
            { class: 'a--logo', href: '' },
            element.create('img', { class: 'img--logo', src: logo })
          )
        ),
        //Nav Bar
        element.create(
          'div',
          { class: 'nav__bar' },
          element.create(
            'div',
            { class: 'nav__list' },
            element.create(
              'ul',
              { class: 'ul__list' },
              element.create(
                'li',
                { class: 'li--home' },
                element.create(
                  'a',
                  { class: 'a--home', ['data-page']: 'home' },
                  'Home'
                )
              ),
              element.create(
                'li',
                { class: 'li--menu' },
                element.create(
                  'a',
                  { class: 'a--menu', ['data-page']: 'menu' },
                  'Menu'
                )
              ),
              element.create(
                'li',
                { class: 'li--about' },
                element.create(
                  'a',
                  { class: 'a--about', ['data-page']: 'about' },
                  'About Us'
                )
              ),
              element.create(
                'li',
                { class: 'li--contact' },
                element.create(
                  'a',
                  { class: 'a--contact', ['data-page']: 'contact' },
                  'Contact'
                )
              )
            )
          ),
          element.create(
            'div',
            { class: 'nav__button' },
            element.create(
              'button',
              { class: 'button--cart' },
              element.create('img', { class: 'img--cart', src: cart })
            ),
            element.create('button', { class: 'button--up' }, 'Sign Up')
          )
        )
      )
    )
  );

  return theNav;
};

export default theNavBar;
