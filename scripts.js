const menuIcon = document.querySelector('.fa-bars');
const mobileMenuList = document.querySelector('.mobile-menu-pane');
const mobileHeader = document.querySelector('.flexbox');
const bodyS = document.querySelector('.body');

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

// object prototype
function Project(title, desc, img, cat, lang, liveurl, githubsrc) {
  this.title = title;
  this.desc = desc;
  this.img = img;
  this.cat = cat;
  this.lang = lang;
  this.liveurl = liveurl;
  this.githubsrc = githubsrc;
}
// create array to store projects
let projects = [];
const projectInfo1 = new Project('Tonic', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', 'img/Snapshoot Portfolio.png', ['CANOPY', 'Backend Dev', '2015'], ['HTML', 'CSS', 'Javascript'], '#', '#');
const projectInfo2 = new Project('Multi-Post Stories', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', 'img/portfolio4.png', ['CANOPY', 'Backend Dev', '2015'], ['HTML', 'CSS', 'Javascript'], '#', '#');
const projectInfo3 = new Project('Facebook 360', 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', 'img/portfolio4.png', ['FACEBOOK', 'Backend Dev', '2015'], ['HTML', 'CSS', 'Javascript'], '#', '#');
const projectInfo4 = new Project('Uber Navigations', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.', 'img/portfolio2.png', ['UBER', 'Backend Dev', '2015'], ['HTML', 'CSS', 'Javascript'], '#', '#');
projects = [projectInfo1, projectInfo2, projectInfo3];
function showDemo(index) {
  document.getElementById('overlay-project').style.display = 'block';
  bodyS.classList.toggle('stopScroll');
  // change values of pop demo
  document.getElementById('popup-title').innerHTML = projects[index].title;
  document.getElementById('bold-history').innerHTML = projects[index].cat[index];
  document.getElementById('popup-history1').innerHTML = projects[index].cat[0];
  document.getElementById('popup-history2').innerHTML = projects[index].cat[1];
  document.getElementById('popup-img').src = projects[index].img;
  document.getElementById('popup-desc').innerHTML = projects[index].desc;
  document.getElementById('popup-btnlive').setAttribute('onclick', `${projects[index].liveurl}`);
  document.getElementById('popup-btngithub').setAttribute('onclick', `${projects[index].githubsrc}`);
  // get all list items and change values
  const items = document.getElementById('portfolio-technologies').querySelectorAll('.popup-list');
  items[0].innerHTML = projects[index].lang[0];
  items[1].innerHTML = projects[index].lang[1];
  items[2].innerHTML = projects[index].lang[2];
}

function closeDemo() {
  document.getElementById('overlay-project').style.display = 'none';
  bodyS.classList.remove('stopScroll');
}

function prepareProject(projects) {
  const worksection = document.querySelector('.grid-container');
  for (let i = 0; i < projects.length; i += 1) {
    const con = document.createElement('div');
    if (i === 1) {
      con.classList.toggle('works-flex-container', 'flex-flip');
      const img = document.createElement('img');
      img.src = 'hi';
      img.alt = 'hi';
      img.classList.toggle('portfolio-item-img');
      const contdetails = document.createElement('div');
      const title = document.createElement('h2');
      title.classList.add('portfolio-title');
      const history1 = document.createElement('p');
      history1.classList.add('history');
      history1.setAttribute('id', 'bold-history');
      const history2 = document.createElement('p');
      history2.classList.add('history');
      const history3 = document.createElement('p');
      history3.classList.add('history');
      const span = history2.appendChild(document.createElement('span'));
      const span2 = history3.appendChild(document.createElement('span'));
      const i1 = document.createElement('i');
      i1.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
      span.appendChild(i1);
      const i2 = document.createElement('i');
      i2.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
      span2.appendChild(i2);
      const projDesc = document.createElement('p');
      projDesc.classList.add('project-desc');
      const ul = document.createElement('ul');
      ul.setAttribute('id', 'portfolio-technologies');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');
      ul.appendChild(li1);
      const button = document.createElement('button');
      button.classList.add('see-demo-btn');
      button.setAttribute('onclick', `showDemo(${i})`);
      button.textContent = 'See Project';
      // set values for Elements
      img.src = projects[i].img;
      title.innerHTML = projects[i].title;
      history1.innerHTML = projects[i].cat[0];
      history2.innerHTML = projects[i].cat[1];
      history3.innerHTML = projects[i].cat[2];
      projDesc.innerHTML = projects[i].desc;
      li1.innerHTML = projects[i].lang[0];
      li2.innerHTML = projects[i].lang[1];
      li3.innerHTML = projects[i].lang[2];
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      con.appendChild(img);
      contdetails.appendChild(title);
      contdetails.appendChild(history1);
      contdetails.appendChild(history2);
      contdetails.appendChild(history3);
      contdetails.appendChild(projDesc);
      contdetails.appendChild(ul);
      contdetails.appendChild(button);
      con.appendChild(contdetails);
    } else {
      con.classList.toggle('works-flex-container');
      const img = document.createElement('img');
      img.src = 'hi';
      img.alt = 'hi';
      img.classList.toggle('portfolio-item-img');
      const contdetails = document.createElement('div');
      const title = document.createElement('h2');
      title.classList.add('portfolio-title');
      const history1 = document.createElement('p');
      history1.classList.add('history');
      history1.setAttribute('id', 'bold-history');
      const history2 = document.createElement('p');
      history2.classList.add('history');
      const history3 = document.createElement('p');
      history3.classList.add('history');
      const span = history2.appendChild(document.createElement('span'));
      const span2 = history3.appendChild(document.createElement('span'));
      const i1 = document.createElement('i');
      i1.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
      span.appendChild(i1);
      const i2 = document.createElement('i');
      i2.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
      span2.appendChild(i2);
      const projDesc = document.createElement('p');
      projDesc.classList.add('project-desc');
      const ul = document.createElement('ul');
      ul.setAttribute('id', 'portfolio-technologies');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');
      ul.appendChild(li1);
      const button = document.createElement('button');
      button.classList.add('see-demo-btn');
      button.setAttribute('onclick', `showDemo(${i})`);
      button.textContent = 'See Project';
      // set values for Elements
      img.src = projects[i].img;
      title.innerHTML = projects[i].title;
      history1.innerHTML = projects[i].cat[0];
      history2.innerHTML = projects[i].cat[1];
      history3.innerHTML = projects[i].cat[2];
      projDesc.innerHTML = projects[i].desc;
      li1.innerHTML = projects[i].lang[0];
      li2.innerHTML = projects[i].lang[1];
      li3.innerHTML = projects[i].lang[2];
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      con.appendChild(img);
      contdetails.appendChild(title);
      contdetails.appendChild(history1);
      contdetails.appendChild(history2);
      contdetails.appendChild(history3);
      contdetails.appendChild(projDesc);
      contdetails.appendChild(ul);
      contdetails.appendChild(button);
      con.appendChild(contdetails);
    }
    worksection.appendChild(con);
  }
}

// contact validation
const email = document.getElementById('email');
const contactForm = document.querySelector('#contact-form');
const errorMsg = document.querySelector('#error-message');
let emailValue = '';

contactForm.addEventListener('submit', (event) => {
  emailValue = email.value;
  if (emailValue.toLowerCase() !== emailValue) {
    errorMsg.textContent = 'Form NOT SENT, Please use LOWERCASE letters on email, Thanks!';
    errorMsg.style.display = 'block';
    event.preventDefault();
  }
});

function displayWorks() {
  prepareProject(projects);
}