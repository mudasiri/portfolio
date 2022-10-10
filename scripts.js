let menuIcon = document.querySelector('.fa-bars');
let mobileMenuList = document.querySelector('.mobile-menu-pane');
let mobileHeader = document.querySelector('.flexbox');
function toggleMenu(menu){
mobileHeader.classList.toggle('header-bg');
menu.classList.toggle('fa-xmark');
mobileMenuList.classList.toggle('opened');
//alert('hi');
}