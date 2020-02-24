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
    'What will the hackathon cost me?',
    "Nothing, it's absolutely free. You cannot put a price on groundbreaking ideas."
  ),
  new faq(
    'Can I implement my idea in hardware?',
    "Sure! There's no bias between sofware and hardware. But you'll have to bring your own hardware."
  ),
  new faq(
    'What kind of a hackathon is Code2Create?',
    'Code2Create is a tech-based hackathon.'
  ),
  new faq(
    'How many members can constitute a team?',
    'There should be a minimum of 2 members and can be up to 5 members in a team.'
  ),
  new faq(
    'What if I get hungry or need internet connection?',
    'We will provide you with delicious food and beverages at regular intervals (breakfast, lunch, dinner, and snacks). Also, you will be provided with free access to our beloved internet facility, VOLSBB.'
  ),
  new faq(
    'Will there be accommodation for external participants?',
    'We will not be providing any accommodation. We expect our participants to stay at the venue for the entire duration of the hackathon.'
  ),
  new faq(
    'How do I choose my track?',
    'The tracks will be announced soon. Please stay tuned and excited for the big reveal.'
  ),

  new faq(
    'Can I start working on my hack before the hackathon?',
    'No, you are not permitted to work on pre-existing projects in the hackathon. To maintain fair standards of judgment you will begin working on your hack after reporting to the venue.'
  ),
  new faq(
    'What is the qualification criterion for the pitching round?',
    'There will be two rounds of elimination on Day 2 and Day 3 respectively. The top 6 teams selected after 3rd review on Day 3 will get a chance to present their hack in the expo for final evaluation.'
  ),
  new faq(
    'Is the hackathon only about technology?',
    'We are tech enthusiasts but we believe ‘All work and no play makes Jack a dull boy.’ We have numerous fun activities planned for you.'
  ),
  new faq(
    'What will be the judging criteria?',
    'The judging criteria will be declared after the commencement of the hack.'
  ),
  new faq(
    'How will I benefit from attending this hackathon?',
    'Code2Create is a place for innovators to create and make a difference. You will get an opportunity to interact with ingenious minds. In addition, we have cash prizes, licenses, schwags, cloud credits and goodies for the winner.'
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
  new sponsor('./images/sponsors/slack.png', 'https://slack.com/intl/en-in/'),
  new sponsor('./images/sponsors/devfolio.png', 'https://devfolio.co/'),
  new sponsor('./images/sponsors/fold.png', 'https://fold.money/'),
  new sponsor('./images/sponsors/matic.png', 'https://matic.network/'),
  new sponsor('./images/sponsors/gfg.png', 'https://www.geeksforgeeks.org/'),
  new sponsor('./images/sponsors/cblogo.png', 'https://codingblocks.com/'),
  new sponsor('./images/sponsors/jetbrains.png', 'https://www.jetbrains.com/'),
  new sponsor(
    './images/sponsors/wolfram.png',
    'https://www.wolfram.com/language/'
  ),
  new sponsor(
    './images/sponsors/digitalocean.png',
    'https://www.digitalocean.com/'
  ),
  new sponsor('./images/sponsors/cldsplt.png', 'https://cloudsploit.com/'),
  new sponsor('./images/sponsors/axure.png', 'https://www.axure.com/'),
  new sponsor('./images/sponsors/rsn.png', 'https://rosenfeldmedia.com/'),
  new sponsor(
    './images/sponsors/hackerrank.png',
    'https://www.hackerrank.com/'
  ),
  new sponsor(
    './images/sponsors/orient.png',
    'https://www.orientelectric.com/'
  ),
  new sponsor(
    './images/sponsors/hackereath.png',
    'https://www.hackerearth.com/'
  ),
  new sponsor('./images/sponsors/glamstud.png', 'https://www.glamstudios.in/')
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
      document.querySelector('.icon').style.display = 'none';
      const pos = document.body.scrollTop;
      const position = document.documentElement.scrollTop;
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
  const hamIcon = document.querySelector('.icon');
  hamIcon.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.querySelector('.icon').classList.toggle('is-active');
  });
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
  let templateMain = `<div class="shift-left">`;
  const faqGrid = document.querySelector('.faq-grid');
  const half = FAQ_DATA.length / 2;
  FAQ_DATA.map((qGroup, index) => {
    if (index < half) {
      const item = `<div class="collapsible">
    <button class="collapsible-header">
      <div class="question-group">
        <span class="question">${qGroup.question}</span>
        <span class="arrow">
          <img src="./vectors/arrow-green.svg" alt="FAQ Expand"/>
        </span>
      </div>
    </button>
    <div class="collapsible-content">
      <p>${qGroup.answer}</p>
    </div>
  </div>
  `;
      templateMain += item;
    }
  });
  templateMain += '</div> <div class="shift-right">';
  FAQ_DATA.map((qGroup, index) => {
    if (index >= half) {
      const item = `<div class="collapsible">
    <button class="collapsible-header">
      <div class="question-group">
        <span class="question">${qGroup.question}</span>
        <span class="arrow">
          <img src="./vectors/arrow-green.svg" alt="FAQ Expand"/>
        </span>
      </div>
    </button>
    <div class="collapsible-content">
      <p>${qGroup.answer}</p>
    </div>
  </div>
  `;
      templateMain += item;
    }
  });
  templateMain += `</div>
  <a href="pages/code-of-conduct.html">
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

  var acc = document.getElementsByClassName('collapsible-header');
  var i;
  let prev;
  function expand(ele) {
    ele.classList.add('active');
    var panel = ele.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
  function collapse(ele) {
    ele.classList.remove('active');
    var panel = ele.nextElementSibling;
    panel.style.maxHeight = null;
  }
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      // console.log("hi");
      // this.classList.toggle("active");
      if (this.classList.contains('active')) {
        // console.log("inside if", this.classList.contains("active"))
        collapse(this);
      }
      // else if(prev)
      //   collapse(prev);
      else {
        expand(this);
        if (prev && prev != this) collapse(prev);
      }

      // expand(this);
      // console.log(this);

      prev = this;
    });
  }

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
  const classes = ['title-sponser', 'secondary-sponser', 'secondary-sponser'];
  SPONSOR_DATA.map((sponsor, index) => {
    let itemClass = index < classes.length ? classes[index] : '';
    const singleItem = ` <div class="grid-element ${itemClass}">
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
