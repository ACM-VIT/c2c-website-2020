// FAQs
const FAQ_DATA = [
  {
    q: 'Lorem ipsum dolor sit amet, consectetur adipisicing?',
    a:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex.'
  },
  {
    q: 'Lorem ipsum dolor sit amet, consectetur adipisicing?',
    a:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex.'
  },
  {
    q: 'Lorem ipsum dolor sit amet consectetur?',
    a:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
  },
  {
    q: 'Lorem ipsum dolor sit amet consectetur?',
    a:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
  },
  {
    q: 'Lorem ipsum dolor sit?',
    a:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem.'
  },
  {
    q: 'Lorem ipsum dolor sit?',
    a:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem.'
  },
  {
    q: 'Lorem ipsum dolor sit amet consectetur?',
    a:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
  },
  {
    q: 'Lorem ipsum dolor sit amet consectetur?',
    a:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio.'
  },
  {
    q: 'Lorem, ipsum dolor?',
    a:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem.'
  }
];

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

let docFrag = document.createDocumentFragment();

window.onload = () => {
  // Collapsible
  FAQ_DATA.map(qGroup => {
    const tempNode = document
      .querySelector("div[data-type='collapsible-template']")
      .cloneNode(true);
    tempNode.querySelector('.question').textContent = qGroup.q;
    tempNode.querySelector('.collapsible-content p').textContent = qGroup.a;
    tempNode.style.display = 'block';
    docFrag.appendChild(tempNode);
  });
  document
    .querySelector('.faq-grid')
    .insertBefore(docFrag, document.querySelector('.code-of-conduct'));
  docFrag = null;

  // Collapsible actions
  document.querySelectorAll('.collapsible-header').forEach(btn =>
    btn.addEventListener('click', () => {
      const collapsibleContent = btn.nextElementSibling;
      btn.classList.toggle('active');

      if (btn.classList.contains('active')) {
        collapsibleContent.style.maxHeight =
          collapsibleContent.scrollHeight + 'rem';
      } else {
        collapsibleContent.style.maxHeight = 0;
      }
    })
  );

  // Organizers
  let orgDisplay = document.querySelector('.organizers main');
  let templateMain = '';
  ORGANIZER_DATA.map(org => {
    let singleItem = `<div>
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
};
