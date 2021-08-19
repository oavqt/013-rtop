import element from './element';
import apple from './images/myApple.png';
import play from './images/myPlay.png';
import github from './images/myGithub.png';
import linkedin from './images/myLinkedin.png';
import twitter from './images/myTwitter.png';
import instagram from './images/myInstagram.png';
import facebook from './images/myFacebook.png';

const theFooter = () => {
  //Footer
  const theLinks = element.create(
    'div',
    { class: 'content__footer' },
    element.create(
      'footer',
      {},
      //Download App
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
          { class: 'download__body' },
          element.create(
            'a',
            { class: 'a--apple', href: '' },
            element.create('img', { class: 'img--apple', src: apple })
          ),
          element.create(
            'a',
            { class: 'a--play', href: '' },
            element.create('img', { class: 'img--play', src: play })
          )
        )
      ),
      //Footer Links
      element.create(
        'div',
        { class: 'footer__links' },
        element.create(
          'div',
          { class: 'links__about' },
          element.create(
            'div',
            { class: 'about__us' },
            element.create(
              'a',
              { class: 'a--temp', href: '' },
              'Nutrition & Allergens'
            ),
            element.create('a', { class: 'a--temp', href: '' }, 'Contact Us'),
            element.create('a', { class: 'a--temp', href: '' }, 'Careers'),
            element.create('a', { class: 'a--temp', href: '' }, 'Merchandise'),
            element.create('a', { class: 'a--temp', href: '' }, 'Work With Us')
          ),
          element.create(
            'div',
            { class: 'about__policy' },
            element.create(
              'a',
              { class: 'a--temp', href: '' },
              'Terms and Conditions of Use'
            ),
            element.create(
              'a',
              { class: 'a--temp', href: '' },
              'Privacy Policy'
            ),
            element.create(
              'a',
              { class: 'a--temp', href: '' },
              'Cookie and Internet-Based Advertising Policy'
            ),
            element.create(
              'a',
              { class: 'a--temp', href: '' },
              'Cookie Preference Center'
            ),
            element.create('a', { class: 'a--temp', href: '' }, 'Accessibility')
          ),

          element.create(
            'div',
            { class: 'about__legal' },
            element.create(
              'p',
              { class: 'legal__text' },
              '2021 Oav. All rights reserved'
            )
          )
        ),
        //Social Media
        element.create(
          'div',
          { class: 'links__social' },
          element.create(
            'a',
            { class: 'a--github', href: '' },
            element.create('img', { class: 'img--github', src: github })
          ),
          element.create(
            'a',
            { class: 'a--linkedin', href: '' },
            element.create('img', { class: 'img--linkedin', src: linkedin })
          ),
          element.create(
            'a',
            { class: 'a--twitter', href: '' },
            element.create('img', { class: 'img--twitter', src: twitter })
          ),
          element.create(
            'a',
            { class: 'a--instagram', href: '' },
            element.create('img', { class: 'img--instagram', src: instagram })
          ),
          element.create(
            'a',
            { class: 'a--facebook', href: '' },
            element.create('img', { class: 'img--facebook', src: facebook })
          )
        )
      )
    )
  );

  return theLinks;
};

export default theFooter;
