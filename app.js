const hamburger = document.querySelector('.menu-icon');
const closeX = document.querySelector('.closeIcon');
const dropdown = document.querySelector('.menu-wrapper');
const menuItems = document.querySelectorAll('.menu-item');

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