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
  // Navbar Scrolling
  window.onscroll = () => {
    if (
      document.body.scrollTop >= 0 ||
      document.documentElement.scrollTop >= 0
    ) {
      document.querySelector('nav').classList.add('scrolled');
    }
    if (
      document.body.scrollTop === 0 &&
      document.documentElement.scrollTop === 0
    ) {
      document.querySelector('nav').classList.remove('scrolled');
    }

    // Active Navbar Links
    const position = document.documentElement.scrollTop;
    const pos = document.body.scrollTop;
    const navHeight =
      document.querySelector('.landingPage nav').offsetHeight + 100;
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.indicator');
    pages.forEach((page, index) => {
      if (page.offsetTop === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
      } else {
        if (
          position + navHeight >= pages[index].offsetTop ||
          pos + navHeight >= pages[index].offsetTop
        ) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index - 1].classList.add('active');
        }
      }
    });
  };

  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.querySelector('.icon').classList.toggle('is-active');
  });

  // Landing Arrow
  const goBelow = document.querySelector('#go-below');
  goBelow.addEventListener('click', () =>
    document.querySelector('#about').scrollIntoView(true)
  );

  // Collapsible
  let templateMain = '';
  const faqGrid = document.querySelector('.faq-grid');
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

  // FAQ Section
  const colGrp = document.querySelectorAll('.collapsible');
  colGrp.forEach((collapsible, index) => {
    const children = collapsible.children;
    let firstNode;
    //chlidren 0 is the button
    //chldren 1 is the content
    children[0].addEventListener('click', () => {
      firstNode = document.querySelector('.collapsible');
      children[0].classList.toggle('active');
      if (
        window
          .getComputedStyle(faqGrid)
          .getPropertyValue('grid-template-columns')
          .split(' ').length > 1
      ) {
        children[1].parentElement.classList.toggle('active');
      }
      if (children[0].classList.contains('active')) {
        swapNodes(firstNode, colGrp[index]);
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
  SPONSOR_DATA.map(() => {
    const singleItem = `<div class="grid-element"></div>`;
    templateMain += singleItem;
  });
  sponDisplay.innerHTML = templateMain;

  // Functions
  const swapNodes = (node1, node2) => {
    node2.nextSibling === node1
      ? node1.parentElement.insertBefore(node2, node1.nextSibling)
      : node1.parentElement.insertBefore(node2, node1);
  };
};
