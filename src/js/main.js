// FAQs
const FAQ_DATA = [
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
    a:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex."
  },
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipisicing?",
    a:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta maxime officiis libero eaque ex."
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur?",
    a:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur?",
    a:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."
  },
  {
    q: "Lorem ipsum dolor sit?",
    a:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."
  },
  {
    q: "Lorem ipsum dolor sit?",
    a:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur?",
    a:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur?",
    a:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate praesentium voluptatem debitis nesciunt officiis ullam animi. Optio."
  },
  {
    q: "Lorem, ipsum dolor?",
    a:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quidem."
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
  new organizer(
    "Kartik Soni",
    "Chair",
    "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-0/p160x160/66580013_151910975978322_1622938506160504832_n.jpg?_nc_cat=104&_nc_ohc=J4OuEGDhpuEAX_T_xKl&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=516fe782202871c95ae7da0a120e0eba&oe=5EBF89F2"
  ),
  new organizer(
    "Subham Awasthi",
    "Vice Chair Technical",
    "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-0/p160x160/66580013_151910975978322_1622938506160504832_n.jpg?_nc_cat=104&_nc_ohc=J4OuEGDhpuEAX_T_xKl&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=516fe782202871c95ae7da0a120e0eba&oe=5EBF89F2"
  ),
  new organizer(
    "Nimisha Bhatia",
    "Management",
    "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-0/p160x160/66580013_151910975978322_1622938506160504832_n.jpg?_nc_cat=104&_nc_ohc=J4OuEGDhpuEAX_T_xKl&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=516fe782202871c95ae7da0a120e0eba&oe=5EBF89F2"
  ),
  new organizer(
    "Fiza rasool",
    "General Secretary",
    "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-0/p160x160/66580013_151910975978322_1622938506160504832_n.jpg?_nc_cat=104&_nc_ohc=J4OuEGDhpuEAX_T_xKl&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=516fe782202871c95ae7da0a120e0eba&oe=5EBF89F2"
  ),
  new organizer(
    "Aditya Srivatsa",
    "Web Master",
    "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-0/p160x160/66580013_151910975978322_1622938506160504832_n.jpg?_nc_cat=104&_nc_ohc=J4OuEGDhpuEAX_T_xKl&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=516fe782202871c95ae7da0a120e0eba&oe=5EBF89F2"
  ),
  new organizer(
    "Sarthak Dandotiya",
    "UI UX Lead",
    "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-0/p160x160/66580013_151910975978322_1622938506160504832_n.jpg?_nc_cat=104&_nc_ohc=J4OuEGDhpuEAX_T_xKl&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=516fe782202871c95ae7da0a120e0eba&oe=5EBF89F2"
  )
];

let docFrag = document.createDocumentFragment();

window.onload = () => {
  // Collapsible
  FAQ_DATA.map((qGroup) => {
    const tempNode = document
      .querySelector("div[data-type='collapsible-template']")
      .cloneNode(true);
    tempNode.querySelector(".question").textContent = qGroup.q;
    tempNode.querySelector(".collapsible-content p").textContent = qGroup.a;
    tempNode.style.display = "block";
    docFrag.appendChild(tempNode);
  });
  document
    .querySelector(".faq-grid")
    .insertBefore(docFrag, document.querySelector(".code-of-conduct"));
  docFrag = null;

  // Collapsible actions
  document.querySelectorAll(".collapsible-header").forEach((btn) =>
    btn.addEventListener("click", () => {
      const collapsibleContent = btn.nextElementSibling;
      btn.classList.toggle("active");

      if (btn.classList.contains("active")) {
        collapsibleContent.style.maxHeight =
          collapsibleContent.scrollHeight + "rem";
      } else {
        collapsibleContent.style.maxHeight = 0;
      }
    })
  );

  let orgDisplay = document.querySelector(".organizers main");
  let templateMain = "";
  ORGANIZER_DATA.map((org) => {
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
    orgDisplay.innerHTML = templateMain;
  });
};
