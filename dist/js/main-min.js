'use strict';
function _classCallCheck(e, n) {
  if (!(e instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
var faq = function e(n, i) {
    _classCallCheck(this, e), (this.question = n), (this.answer = i);
  },
  FAQ_DATA = [
    new faq(
      'Lorem ipsum dolor sit amet, consectetur adipisicing?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex.'
    ),
    new faq(
      'Lorem ipsum dolor sit amet, consectetur adipisicing?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex.'
    ),
    new faq(
      'Lorem ipsum dolor sit amet consectetur?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
    ),
    new faq(
      'Lorem ipsum dolor sit amet consectetur?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
    ),
    new faq(
      'Lorem ipsum dolor sit?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem.'
    ),
    new faq(
      'Lorem ipsum dolor sit?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem.'
    ),
    new faq(
      'Lorem ipsum dolor sit amet consectetur?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
    ),
    new faq(
      'Lorem ipsum dolor sit amet consectetur?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
    ),
    new faq(
      'Lorem, ipsum dolor?',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem.'
    )
  ],
  organizer = function e(n, i, a) {
    _classCallCheck(this, e),
      (this.name = n),
      (this.image = a),
      (this.designation = i);
  },
  ORGANIZER_DATA = [
    new organizer('Kartik Soni', 'Chair', './images/kartikSoni.png'),
    new organizer(
      'Shubham Awasthi',
      'Vice Chair - Technical',
      './images/shubhamAwasthi.png'
    ),
    new organizer(
      'Nimisha Bhatia',
      'Vice Chair - Management',
      './images/nimishaBhatia.png'
    ),
    new organizer(
      'Fiza rasool',
      'General Secretary',
      './images/fizaRasool.png'
    ),
    new organizer(
      'Aditya Srivastava',
      'Web Master',
      './images/adityaSrivastava.png'
    ),
    new organizer(
      'Sarthak Dandotiya',
      'UI UX Lead',
      './images/sarthakDandotiya.png'
    ),
    new organizer(
      'Sventansu Singh',
      'Treasurer',
      './images/sventansuSingh.png'
    ),
    new organizer('Rajat Gupta', 'Competitive Lead', './images/rajatGupta.png'),
    new organizer(
      'Subhaditya Mukherjee',
      'Research Lead',
      './images/subhadityaMukherjee.png'
    ),
    new organizer(
      'Sparsh Srivastava',
      'App Lead',
      './images/sparshSrivastava.png'
    ),
    new organizer(
      'Shrey Sindher',
      'Projects Lead - App',
      './images/shreySindher.png'
    ),
    new organizer(
      'Shivank Sahai',
      'Projects Lead - Web',
      './images/shivankSahai.png'
    ),
    new organizer('Bhumij Gupta', 'Creative Head', './images/bhumijGupta.png'),
    new organizer(
      'Madhur Dixit',
      'Projects Lead - Research',
      './images/madhurDixit.png'
    ),
    new organizer(
      'Hari Ram Vishvakarma',
      'Faculty Organiser',
      './images/white.png'
    ),
    new organizer('Divya Udayan', 'Faculty Organiser', './images/white.png'),
    new organizer('Some Name', 'Faculty Organiser', './images/white.png'),
    new organizer('Some Name', 'Faculty Organiser', './images/white.png')
  ],
  sponsor = function e(n, i) {
    _classCallCheck(this, e), (this.name = n), (this.logo = i);
  },
  SPONSOR_DATA = [
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', ''),
    new sponsor('', '')
  ];
window.onload = function() {
  var e = document.querySelector('#go-below');
  console.log(e),
    e.addEventListener('click', function() {
      return document.querySelector('#about').scrollIntoView(!0);
    });
  var n = '',
    i = document.querySelector('.faqPage .faq-grid');
  FAQ_DATA.map(function(e) {
    var i = '<div\n      class="collapsible"\n      data-type="collapsible-template"\n    >\n    <button class="collapsible-header">\n      <div class="question-group">\n        <span class="question">'
      .concat(
        e.question,
        '</span>\n        <span class="arrow">\n          <img src="./vectors/arrow-green.svg" alt="FAQ Expand" />\n        </span>\n      </div>\n    </button>\n    <div class="collapsible-content">\n      <p>'
      )
      .concat(e.answer, '</p>\n    </div>\n  </div>');
    n += i;
  }),
    (n +=
      '<div class="code-of-conduct">\n    <button class="c-of-c-text">\n      <div class="c-of-c-collection">\n        <span class="text">Code of Conduct</span>\n        <span class="arrow">\n          <img src="./vectors/arrow-green.svg" alt="Code of Conduct" />\n        </span>\n      </div>\n    </button >\n  </div >'),
    (i.innerHTML = n),
    document.querySelectorAll('.collapsible-header').forEach(function(e) {
      return e.addEventListener('click', function() {
        var n = e.nextElementSibling;
        e.classList.toggle('active'),
          e.classList.contains('active')
            ? (n.style.maxHeight = n.scrollHeight + 'rem')
            : (n.style.maxHeight = 0);
      });
    });
  var a = document.querySelector('.organizers main');
  (n = ''),
    ORGANIZER_DATA.map(function(e) {
      var i = '<div>\n        <img\n          src='
        .concat(
          e.image,
          '\n          alt="check"\n        />\n        <p>\n          <span> '
        )
        .concat(e.name, '</span><br />\n          ')
        .concat(e.designation, '\n        </p>\n      </div>');
      n += i;
    }),
    (a.innerHTML = n);
  var s = document.querySelector('.sponsors main');
  (n = ''),
    SPONSOR_DATA.map(function(e) {
      n += '<div class="grid-element"></div>';
    }),
    (s.innerHTML = n);
};
