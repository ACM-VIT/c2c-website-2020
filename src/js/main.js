// FAQs
class faq {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

const FAQ_DATA = [
  new faq(
    'Who all can register?',
    'Students from all over the country are eligible to participate in Code2Create. Everybody is welcome to make a difference.'
  ),
  new faq(
    'How do I choose my track?',
    'The tracks will be announced soon. Please stay tuned and excited for the big reveal.'
  ),
  new faq(
    'What will the hackathon cost me?',
    "Nothing, it's absolutely free. You cannot put a price on groundbreaking ideas."
  ),
  new faq(
    'Can I start working on my hack before the hackathon?',
    'No, you are not permitted to work on pre-existing projects in the hackathon. To maintain fair standards of judgment you will begin working on your hack after reporting to the venue.'
  ),
  new faq(
    'Can I implement my idea in hardware?',
    "Sure! There's no bias between sofware and hardware. But you'll have to bring your own hardware."
  ),
  new faq(
    'What is the qualification criterion for the pitching round?',
    'There will be a technical inspection on Day 2 of the hackathon. After the inspection, we will shortlist 120 participants. These 120 participants will get a chance to present their respective hacks in the expo for evaluation.'
  ),
  new faq(
    'What kind of a hackathon is Code2Create?',
    'Code2Create is a tech-based hackathon.'
  ),
  new faq(
    'Is the hackathon only about technology?',
    'We are tech enthusiasts but we believe ‘All work and no play makes Jack a dull boy.’ We have numerous fun activities planned for you.'
  ),
  new faq(
    'How many members can constitute a team?',
    'You can have up to 4 members in a team.'
  ),
  new faq(
    'Who will be on the Judging Panel?',
    'There will be 6 judges forming 3 panels of 2 judges each.'
  ),
  new faq(
    'What if I get hungry or need internet connection?',
    'Code2Create is a place for innovators to create and make a difference. You will get an opportunity to interact with ingenious minds. In addition, we have cash prizes, licenses, schwags, cloud credits and goodies for the winner. The best app built using the Hasura GraphQL Engine will win an Rs.5000 gift card from Flipkart. Apart from this, we have something special in store for all the participants.'
  ),
  new faq(
    'How will I benefit from attending this hackathon?',
    'Code2Create is a place for innovators to create and make a difference. You will get an opportunity to interact with ingenious minds. In addition, we have cash prizes, licenses, schwags, cloud credits and goodies for the winner. The best app built using the Hasura GraphQL Engine will win an Rs.5000 gift card from Flipkart. Apart from this, we have something special in store for all the participants.'
  ),
  new faq(
    'Will there be accommodation for external participants?',
    'We will not be providing any accommodation. We expect our participants to stay at the venue for the entire duration of the hackathon.'
  ),
  new faq(
    'Will there be travel reimbursements provided?',
    'We do not provide reimbursements for external participants for travel expenses.'
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
  new organizer('Kartik Soni', 'Chair', './images/organizer/kartik.jpg'),
  new organizer(
    'Shubham Awasthi',
    'Vice Chair - Technical',
    './images/organizer/shubham.jpg'
  ),
  new organizer(
    'Nimisha Bhatia',
    'Vice Chair - Management',
    './images/organizer/nimisha.jpg'
  ),
  new organizer(
    'Fiza Rasool',
    'General Secretary',
    './images/organizer/fiza.jpg'
  ),
  new organizer(
    'Aditya Srivastava',
    'Web Master',
    './images/organizer/aditya.png'
  ),
  new organizer(
    'Sarthak Dandotiya',
    'UI UX Lead',
    './images/organizer/sarthak.jpg'
  ),
  new organizer(
    'Svetansu Singh',
    'Treasurer',
    './images/organizer/svetansu.jpg'
  ),
  new organizer(
    'Rajat Gupta',
    'Competitive Lead',
    './images/organizer/rajat.jpg'
  ),
  new organizer(
    'Subhaditya Mukherjee',
    'Research Lead',
    './images/organizer/subhaditya.jpg'
  ),
  new organizer(
    'Sparsh Srivastava',
    'App Lead',
    './images/organizer/sparsh.jpg'
  ),
  new organizer(
    'Shrey Sindher',
    'Projects Lead - App',
    './images/organizer/shrey.jpg'
  ),
  new organizer(
    'Shivank Sahai',
    'Projects Lead - Web',
    './images/organizer/shivank.jpg'
  ),
  new organizer(
    'Bhumij Gupta',
    'Creative Head',
    './images/organizer/bhumij.jpg'
  ),
  new organizer(
    'Madhur Dixit',
    'Projects Lead - Research',
    './images/organizer/madhur.jpg'
  ),
  new organizer(
    'Prof. Balakrushna Tripathy',
    'Dean School of Information Technology & Engineering',
    './images/organizer/dean_site.jpg'
  ),
  new organizer(
    'Dr. Aswani Kumar Cherukuri',
    'Faculty Coordinator ACM VIT Student Chapter',
    './images/organizer/fc1.png'
  ),
  new organizer(
    'Prof. H.R. Vishwakarma',
    'Faculty Coordinator ACM VIT Student Chapter',
    './images/organizer/fc2.png'
  ),
  new organizer(
    'Dr. Divya Udayan J',
    'Faculty Coordinator ACM VIT Student Chapter',
    './images/organizer/fc3.jpeg'
  )
];

// Sponsors
class sponsor {
  constructor(logo, link) {
    this.logo = logo;
    this.link = link;
  }
}
const SPONSOR_DATA = [
  new sponsor('./images/sponsors/github.png', 'https://www.github.com/'),
  new sponsor('./images/sponsors/jetbrains.png', 'https://www.jetbrains.com/'),
  new sponsor('./images/sponsors/devfolio.png', 'https://devfolio.co/'),
  new sponsor('./images/sponsors/fold.png', 'https://fold.money/'),
  new sponsor('./images/sponsors/matic.png', 'https://matic.network/'),
  new sponsor('./images/sponsors/dottech.png', 'https://get.tech/'),
  new sponsor('./images/sponsors/SlangLabs.png', 'https://slanglabs.in/'),
  new sponsor(
    './images/sponsors/indriya.png',
    'https://www.linkedin.com/company/indriya-constructions-company'
  ),
  new sponsor('./images/sponsors/SlangLabs.png', 'https://slanglabs.in/'),
  new sponsor('./images/sponsors/bala.png', 'https://balsamiq.com/'),
  new sponsor('./images/sponsors/ibm.png', 'https://www.ibm.com/in-en'),
  new sponsor(
    './images/sponsors/wolfram.png',
    'https://www.wolfram.com/language/'
  ),
  new sponsor(
    './images/sponsors/digitalocean.png',
    'https://www.digitalocean.com/'
  ),
  new sponsor('./images/sponsors/acm_int.png', 'https://www.acm.org/'),
  new sponsor('./images/sponsors/tim.png', 'https://www.creative-tim.com/'),
  new sponsor(
    './images/sponsors/stickermule.png',
    'https://www.stickermule.com/'
  ),
  new sponsor('./images/sponsors/sketch.png', 'https://www.sketch.com/'),
  new sponsor('./images/sponsors/invision.png', 'https://www.invisionapp.com/'),
  new sponsor('./images/sponsors/anitaborg.jpeg', 'https://anitab.org/'),
  new sponsor('./images/sponsors/bgse.png', 'https://www.bugsee.com/'),
  new sponsor('./images/sponsors/taskade.png', 'https://www.taskade.com/'),
  new sponsor(
    './images/sponsors/hackereath.png',
    'https://www.hackerearth.com/'
  ),
  new sponsor('./images/sponsors/custombaba.png', 'https://custombaba.com/'),
  new sponsor('./images/sponsors/maxtherm.png', '#'),
  new sponsor('./images/sponsors/foxmula.jpg', 'https://foxmula.com/'),
  new sponsor('./images/sponsors/shift.png', 'https://tryshift.com/'),
  new sponsor('./images/sponsors/axure.png', 'https://www.axure.com/'),
  new sponsor('./images/sponsors/cblogo.png', 'https://codingblocks.com/'),
  new sponsor('./images/sponsors/rsn.png', 'https://rosenfeldmedia.com/'),
  new sponsor('./images/sponsors/cldsplt.png', 'https://cloudsploit.com/'),
  new sponsor('./images/sponsors/hasura.png', 'https://hasura.io/')
];

document.addEventListener('DOMContentLoaded', function() {
  let devfolioOptions = {
    buttonSelector: '#devfolio-apply-now',
    key: 'code2create'
  };

  let script = document.createElement('script');
  script.src = 'https://apply.devfolio.co';
  document.head.append(script);

  script.onload = function() {
    new Devfolio(devfolioOptions);
  };

  script.onerror = function() {
    document
      .querySelector(devfolioOptions.buttonSelector)
      .addEventListener('click', function() {
        window.location.href =
          'https://devfolio.co/external-apply/' + devfolioOptions.key;
      });
  };
});

window.onload = () => {
  document.querySelector('.pre-loader-wrapper').style.display = 'none';

  // Navbar Scrolling
  window.onscroll = () => {
    if (
      document.body.scrollTop >= 0 ||
      document.documentElement.scrollTop >= 0
    ) {
      document.querySelector('header').classList.add('scrolled');
    }
    if (
      document.body.scrollTop === 0 &&
      document.documentElement.scrollTop === 0
    ) {
      document.querySelector('header').classList.remove('scrolled');
    }

    // Active Navbar Links
    if (window.innerWidth >= '768') {
      const position = document.documentElement.scrollTop;
      const pos = document.body.scrollTop;
      const navHeight = document.querySelector('nav').offsetHeight + 100;
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
    }
  };

  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.querySelector('.icon').classList.toggle('is-active');
  });

  // Landing Arrow
  const goBelow = document.querySelector('#go-below');
  goBelow.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView(true);
  });

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
  templateMain += `<a href="pages/code-of-conduct.html">
    <div class="code-of-conduct">
      <button class="c-of-c-text">
        <div class="c-of-c-collection">
          <span class="text">Code of Conduct</span>
          <span class="arrow">
            <img src="./vectors/arrow-green.svg" alt="Code of Conduct" />
          </span>
        </div>
      </button>
    </div >
  </a>`;
  faqGrid.innerHTML = templateMain;

  // FAQ Section
  const colGrp = document.querySelectorAll('.collapsible');
  colGrp.forEach((collapsible, index) => {
    const children = collapsible.children;
    let firstNode;
    //chlidren 0 is the button
    //chldren 1 is the content
    children[0].addEventListener('click', () => {
      document.querySelector('.faqPage').scrollIntoView(true);
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
  SPONSOR_DATA.map(sponsor => {
    const singleItem = ` <div class="grid-element">
      <a href="${sponsor.link}" target="_blank">
        <img src="${sponsor.logo}" alt="Sponsor" />
      </a>
    </div>`;
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
