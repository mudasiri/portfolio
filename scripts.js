const menuIcon = document.querySelector('.fa-bars');
const mobileMenuList = document.querySelector('.mobile-menu-pane');
const mobileHeader = document.querySelector('.flexbox');
const bodyS = document.querySelector('.body');
const demobtn = document.querySelector('.see-demo-btn');

menuIcon.addEventListener('click', () => {
  mobileHeader.classList.toggle('header-bg');
  menuIcon.classList.toggle('fa-xmark');
  mobileMenuList.classList.toggle('opened');
  bodyS.classList.toggle('stopScroll');
});

function removeStuffs() {
  mobileMenuList.classList.remove('opened');
  menuIcon.classList.remove('fa-xmark');
  mobileHeader.classList.remove('header-bg');
  bodyS.classList.remove('stopScroll');
}

// create array to store projects
// let projectInfo = {};
demobtn.addEventListener('click', () => {
  document.getElementById('overlay-project').style.display = 'block';
});
