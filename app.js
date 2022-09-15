const speakers = [
  {
    name: 'Yochai Benkler',
    short_description: 'Phasellus semper volutpat',
    long_description: 'Nunc id mauris tortor. In tempor accumsan ligula sed fringilla.',
    image: 'img/Benkler.jpg',
  },
  {
    name: 'Kilnam Chon',
    short_description: 'Phasellus semper volutpat',
    long_description: 'Nunc id mauris tortor. In tempor accumsan ligula sed fringilla.',
    image: 'img/Kilnam.jpg',
  },
  {
    name: 'SohYeong Noh',
    short_description: 'Phasellus semper volutpat',
    long_description: 'Nunc id mauris tortor. In tempor accumsan ligula sed fringilla.',
    image: 'img/Noh.jpg',
  },
  {
    name: 'Julia Leda',
    short_description: 'Phasellus semper volutpat',
    long_description: 'Nunc id mauris tortor. In tempor accumsan ligula sed fringilla.',
    image: 'img/Julia.jpg',
  },
  {
    name: 'Lila Tretikov',
    short_description: 'Phasellus semper volutpat',
    long_description: 'Nunc id mauris tortor. In tempor accumsan ligula sed fringilla.',
    image: 'img/Tretikov.jpg',
  },
  {
    name: 'Ryan Merkley',
    short_description: 'Phasellus semper volutpat',
    long_description: 'Nunc id mauris tortor. In tempor accumsan ligula sed fringilla.',
    image: 'img/Merkley.jpg',
  },
];

const hamburger = document.querySelector('.menu-icon');
const closeX = document.querySelector('.closeIcon');
const dropdown = document.querySelector('.menu-wrapper');
const menuItems = document.querySelectorAll('.menu-item');
const speakerContainer = document.querySelector('.speakers-wrapper');

const toggleMenu = () => {
  dropdown.classList.toggle('slide-in');
  hamburger.classList.toggle('hidden');
  closeX.classList.toggle('hidden');
};

hamburger.addEventListener('click', toggleMenu);
closeX.addEventListener('click', toggleMenu);
menuItems.forEach((e) => {
  e.addEventListener('click', toggleMenu);
});

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.className = 'speaker col-12 col-md-6 mb-4';
  const eachObj = speakers[i];
  speaker.innerHTML = `
  <div class="row">
  <div class="speaker-img col-5">
      <img src="${eachObj.image}" alt="${eachObj.name}" class="img-fluid">
  </div>
  <div class="speaker-text col-7 ms-1">
      <h4 class="fw-bold">${eachObj.name}</h4>
      <p class="speaker-short fst-italic">${eachObj.short_description}</p>
      <hr class="w-25">
      <p class="speaker-long">${eachObj.long_description}</p>
  </div>
  </div>
  `;
  speakerContainer.append(speaker);
}