const achievements = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    date: "Dec 2024",
    image:
      "https://i.pinimg.com/1200x/0b/67/25/0b67255a1d95953bae8c4ffae4433b62.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Academic"
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor",
    date: "June 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Creative"
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor",
    date: "March 2024",
    image:
      "https://i.pinimg.com/736x/b8/23/fb/b823fb582349d3bbbfd189d6323e1b7b.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Co-Curricular"
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolor",
    date: "Jan 2024",
    image:
      "https://i.pinimg.com/736x/a8/34/0a/a8340abeae97026d7f611768329892f3.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Academic"
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolor",
    date: "Nov 2023",
    image:
      "https://i.pinimg.com/736x/1d/f7/93/1df79363e9bda25a91d00abff1d425ef.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Creative"
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolor",
    date: "Sept 2023",
    image:
      "https://i.pinimg.com/736x/74/3f/a4/743fa43d1cc20977d8eedec193549ad0.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Co-Curricular"
  },
  {
    id: 7,
    title: "Lorem Ipsum Dolor",
    date: "Aug 2023",
    image:
      "https://i.pinimg.com/736x/d6/15/8f/d6158f1287b75404eff5b492ba0a953e.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Academic"
  },
  {
    id: 8,
    title: "Lorem Ipsum Dolor",
    date: "July 2023",
    image:
      "https://i.pinimg.com/1200x/65/4b/4b/654b4bcd897f6d320e91544f56b950f3.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Creative"
  },
  {
    id: 9,
    title: "Lorem Ipsum Dolor",
    date: "May 2023",
    image:
      "https://i.pinimg.com/736x/88/f4/fc/88f4fcae1a2653bc5ea1797e2f419b70.jpg",
    description:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: "Co-Curricular"
  }
];

let activeIndex = 0;
const total = achievements.length;
const stage = document.getElementById("carousel-stage");
const dotsContainer = document.getElementById("pagination-dots");

// 1. Initial Render (Run Once)
function init() {
  achievements.forEach((item, index) => {
    // Create the card
    const card = document.createElement("div");
    card.className = "carousel-card";
    card.id = `card-${index}`;
    card.onclick = () => {
      activeIndex = index;
      update();
    };

    card.innerHTML = `
      <div class="card-image" style="background-image: url('${item.image}')">
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3>${item.title}</h3>
          <span class="tag-pill">${item.tag}</span>
        </div>
        <p>${item.description}</p>
        <div class="card-footer"><small>${item.date}</small></div>
      </div>
    `;
    stage.appendChild(card);

    // Create the dot
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.id = `dot-${index}`;
    dot.onclick = () => {
      activeIndex = index;
      update();
    };
    dotsContainer.appendChild(dot);
  });

  update(); // First placement
}

// 2. The "Update" function (Triggers the smooth transition)
function update() {
  achievements.forEach((_, index) => {
    const card = document.getElementById(`card-${index}`);
    const dot = document.getElementById(`dot-${index}`);

    // Circular Offset Math
    let offset = index - activeIndex;
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    // Apply classes based on offset
    let positionClass = "hidden";
    if (offset === 0) positionClass = "active";
    else if (offset === -1) positionClass = "left";
    else if (offset === 1) positionClass = "right";
    else if (offset < -1) positionClass = "far-left";
    else if (offset > 1) positionClass = "far-right";

    card.className = `carousel-card ${positionClass}`;
    dot.className = `dot ${index === activeIndex ? "active" : ""}`;
  });
}

// Navigation
const next = () => {
  activeIndex = (activeIndex + 1) % total;
  update();
};
const prev = () => {
  activeIndex = (activeIndex - 1 + total) % total;
  update();
};

document.getElementById("next-btn").onclick = next;
document.getElementById("prev-btn").onclick = prev;

// Keyboard Support
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

init();
