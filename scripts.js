const menuIcon = document.querySelector('.fa-bars');
const mobileMenuList = document.querySelector('.mobile-menu-pane');
const mobileHeader = document.querySelector('.flexbox');

menuIcon.addEventListener('click', () => {
  mobileHeader.classList.toggle('header-bg');
  menuIcon.classList.toggle('fa-xmark');
  mobileMenuList.classList.toggle('opened');
});