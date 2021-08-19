import element from './element';
import aMenu from './images/aMenu.png';
import bMenu from './images/bMenu.png';
import cMenu from './images/cMenu.png';
import dMenu from './images/dMenu.png';
import eMenu from './images/eMenu.png';
import fMenu from './images/fMenu.png';
import gMenu from './images/gMenu.png';
import hMenu from './images/hMenu.png';
import iMenu from './images/iMenu.png';
import jMenu from './images/jMenu.png';
import kMenu from './images/kMenu.png';
import lMenu from './images/lMenu.png';
import mMenu from './images/mMenu.png';
import nMenu from './images/nMenu.png';
import oMenu from './images/oMenu.png';
import pMenu from './images/pMenu.png';

const theMenu = () => {
  const theFood = element.create(
    //Menu
    'div',
    { class: 'content__menu' },
    element.create(
      'div',
      { class: 'menu__title' },
      element.create('h1', { class: 'title__main' }, 'theMenu'),
      element.create(
        'h2',
        { class: 'title__sub' },
        'Necessitatibus ratione molestiae eos maxime ea consequatur nostrum consequuntur corporis quas cupiditate. Asperiores, ipsa.'
      )
    ),
    //Menu Cards
    element.create(
      'div',
      { class: 'menu__body' },
      element.create(
        'div',
        { class: 'body__item' },
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: aMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Aliquam in hendrerit tellus, a porta lectus.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Nam lacinia egestas dolor, in convallis magna.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: bMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Donec a massa luctus.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Nulla ac gravida leo, nec convallis urna.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: cMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Sed vestibulum sapien ac quam vulputate.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Nam auctor non nisl sagittis consequat.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        )
      ),
      element.create(
        'div',
        { class: 'body__item' },
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: dMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Sed quis felis tellus.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Ut facilisis tempor neque volutpat semper.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: eMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Mauris sagittis, nulla quis lacinia aliquet.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Praesent faucibus sapien id efficitur finibus. Nunc a elementum enim.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: fMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              ' Nulla porttitor placerat gravida.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Vestibulum ipsum odio, tristique iaculis egestas a, vestibulum sit amet nisi.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        )
      ),
      element.create(
        'div',
        { class: 'body__item' },
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: gMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Donec eu turpis nisi.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Mauris neque diam, efficitur a malesuada eu, suscipit id eros. '
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: hMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Morbi non molestie lacus.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Phasellus vitae iaculis dui, quis semper mauris. '
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: iMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Cras vehicula nisi augue, ac egestas ante.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Donec ornare velit vitae velit vulputate. '
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        )
      ),
      element.create(
        'div',
        { class: 'body__item' },
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: jMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Pellentesque nisi tortor, auctor non nibh vel.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              ' Suspendisse sit amet efficitur risus.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: kMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Suspendisse potenti.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Nunc feugiat orci quis leo bibendum rutrum faucibus sit amet neque.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: lMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Nulla sapien lacus, mattis non convallis ut.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Nam sagittis lectus sed nunc finibus, ut sollicitudin ligula iaculis.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        )
      ),
      element.create(
        'div',
        { class: 'body__item' },
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: mMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Aenean viverra varius nunc.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              ' Ut ullamcorper bibendum efficitur.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: nMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Class aptent taciti sociosqu ad.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Proin at interdum dui, fringilla tincidunt sapien.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        ),
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: oMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Nunc ornare dui eu imperdiet tincidunt.'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              'Pellentesque aliquet nunc ullamcorper elit aliquam rhoncus.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        )
      ),
      element.create(
        'div',
        { class: 'body__item' },
        element.create(
          'div',
          { class: 'item__card' },
          element.create(
            'a',
            { class: 'a--card', href: '' },
            element.create('img', { class: 'img--card', src: pMenu }),
            element.create(
              'h1',
              { class: 'card__title' },
              'Odit quos in eius eveniet'
            ),
            element.create(
              'h2',
              { class: 'card__description' },
              ' Integer congue ultricies risus, vitae mollis nibh ornare sit amet.'
            )
          ),
          element.create('button', { class: 'button--card' }, 'Order Now')
        )
      )
    )
  );

  return theFood;
};

export default theMenu;
