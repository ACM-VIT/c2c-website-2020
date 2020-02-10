// FAQs
class faq {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

const FAQ_DATA = [
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
];

// Organizers
class organizer {
  constructor(name, designation, image) {
    this.name = name;
    this.image = image;
    this.designation = designation;
  }
}

const ORGANIZER_DATA = [
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
  new organizer('Fiza rasool', 'General Secretary', './images/fizaRasool.png'),
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
  new organizer('Sventansu Singh', 'Treasurer', './images/sventansuSingh.png'),
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
];

// Sponsors
class sponsor {
  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
  }
}
const SPONSOR_DATA = [
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

window.onload = () => {
  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.querySelector('#hamburger-12').classList.toggle('is-active');
  });

  // Landing Arrow
  const goBelow = document.querySelector('#go-below');
  console.log(goBelow);
  goBelow.addEventListener('click', () =>
    document.querySelector('#about').scrollIntoView(true)
  );

  // Collapsible
  let templateMain = '';
  const faqGrid = document.querySelector('.faqPage .faq-grid');
  FAQ_DATA.map(qGroup => {
    const item = `<div
      class="collapsible" >
    <button class="collapsible-header">
      <div class="question-group">
        <span class="question">${qGroup.question}</span>
        <span class="arrow">
          <img src="./vectors/arrow-green.svg" alt="FAQ Expand" />
        </span>
      </div>
    </button>
    <div class="collapsible-content">
      <p>${qGroup.answer}</p>
    </div>
  </div>`;
    templateMain += item;
  });
  templateMain += `<div class="code-of-conduct">
    <button class="c-of-c-text">
      <div class="c-of-c-collection">
        <span class="text">Code of Conduct</span>
        <span class="arrow">
          <img src="./vectors/arrow-green.svg" alt="Code of Conduct" />
        </span>
      </div>
    </button >
  </div >`;
  faqGrid.innerHTML = templateMain;

  const colGrp = document.querySelectorAll('.collapsible');

  colGrp.forEach((collapsible, indexClick) => {
    const children = collapsible.children;
    //chlidren 0 is the button at the top
    //chldren 1 is the collapisible at the button
    children[0].addEventListener('click', () => {
      children[0].classList.toggle('active');
      collapsible.setAttribute('data-active', 'yes');
      //re-render faqs
      colGrp.forEach((collInner, indexChild) => {
        collInner.style.gridColumn = 'span 2';
      });
      if (children[0].classList.contains('active')) {
        children[1].style.maxHeight = children[1].scrollHeight + 'rem';
      } else {
        children[1].style.maxHeight = 0;
      }
    });
  });

  // Organizers
  const orgDisplay = document.querySelector('.organizers main');
  templateMain = '';
  ORGANIZER_DATA.map(org => {
    const singleItem = `<div>
        <img
          src=${org.image}
          alt="check"
        />
        <p>
          <span> ${org.name}</span><br />
          ${org.designation}
        </p>
      </div>`;
    templateMain += singleItem;
  });
  orgDisplay.innerHTML = templateMain;

  // Sponsors
  const sponDisplay = document.querySelector('.sponsors main');
  templateMain = '';
  SPONSOR_DATA.map(sponsor => {
    const singleItem = `<div class="grid-element"></div>`;
    templateMain += singleItem;
  });
  sponDisplay.innerHTML = templateMain;
};
