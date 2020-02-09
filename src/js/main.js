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
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw1pDEfN8r6I-Pe4967zLzRD&ust=1581333437301000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDA0qCsxOcCFQAAAAAdAAAAABAD"
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
};
