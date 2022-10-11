const menuIcon = document.querySelector('.fa-bars');
const mobileMenuList = document.querySelector('.mobile-menu-pane');
const mobileHeader = document.querySelector('.flexbox');

menuIcon.addEventListener('click', () => {
  mobileHeader.classList.toggle('header-bg');
  menuIcon.classList.toggle('fa-xmark');
  mobileMenuList.classList.toggle('opened');
});
const portfolio = document.querySelector('#portfolio');
const about = document.querySelector('.#about');
const contact = document.querySelector('.#contact');

const close = () => {
  mobileHeader.classList.toggle('header-bg');
  menuIcon.classList.toggle('fa-xmark');
  mobileMenuList.classList.toggle('opened');
}
portfolio.addEventListener('click', () => {
  close();
});

about.addEventListener('click', () => {
  close();
});

contact.addEventListener('click', () => {
  close();
});
