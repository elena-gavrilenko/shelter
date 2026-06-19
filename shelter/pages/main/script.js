const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active');
  nav.classList.toggle('header__menu_open');
  body.classList.toggle('scroll');
});

function classChange() {
  burger.classList.remove('header__burger_active');
  nav.classList.remove('header__menu_open');
  body.classList.remove('scroll');
}
const navItems = document.querySelectorAll('.header__menu-item');
navItems.forEach((elem) => elem.addEventListener('click', classChange));
