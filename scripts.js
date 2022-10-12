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
const projectInfo4 = new Project('Uber Navigation', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.', 'img/portfolio2.png', ['UBER', 'Backend Dev', '2015'], ['HTML', 'CSS', 'Javascript'], '#', '#');

function showDemo() {
  document.getElementById('overlay-project').style.display = 'block';
}

function closeDemo() {
  document.getElementById('overlay-project').style.display = 'none';
}

function prepareProject(projects) {
  let worksection = document.querySelector('.grid-container');
  for (let i = 0; i < projects.length; i++) {
    let con = document.createElement('div');
    console.log(i);
    if (i === 1) {
      console.log(i);
      con.classList.toggle('works-flex-container', 'flex-flip');
      let img = document.createElement('img');
      img.src = 'hi';
      img.alt = 'hi';
      img.classList.toggle('portfolio-item-img');
      let contdetails = document.createElement('div');
      let title = document.createElement('h2');
      title.classList.add('portfolio-title');
      let history1 = document.createElement('p');
      history1.classList.add('history');
      history1.setAttribute('id', 'bold-history');
      let history2 = document.createElement('p');
      history2.classList.add('history');
      let history3 = document.createElement('p');
      history3.classList.add('history');
      let span = history2.appendChild(document.createElement('span'));
      let span2 = history3.appendChild(document.createElement('span'));
      let i1 = document.createElement('i');
      i1.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
      span.appendChild(i1);
      let i2 = document.createElement('i');
      i2.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
      span2.appendChild(i2);
      let projDesc = document.createElement('p');
      projDesc.classList.add('project-desc');
      let ul = document.createElement('ul');
      ul.setAttribute('id', 'portfolio-technologies');
      let li1 = document.createElement('li');
      let li2 = document.createElement('li');
      let li3 = document.createElement('li');
      ul.appendChild(li1);
      let button = document.createElement('button');
      button.classList.add('see-demo-btn');
      button.setAttribute('onclick', 'showDemo()');
      button.textContent = 'See Project';
      // set values for Elements
      img.src = projects[i].img;
      title.innerHTML = projects[i].title;
      history1.innerHTML = projects[i].cat[0];
      history2.innerHTML = projects[i].cat[1];
      history3.innerHTML = projects[i].cat[2];
      projDesc.innerHTML = projects[i].desc;
      li1.innerHTML = projects[i].lang[0]
      li2.innerHTML = projects[i].lang[1]
      li3.innerHTML = projects[i].lang[2]
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
    else {
      con.classList.toggle('works-flex-container');
    let img = document.createElement('img');
    img.src = 'hi';
    img.alt = 'hi';
    img.classList.toggle('portfolio-item-img');
    let contdetails = document.createElement('div');
    let title = document.createElement('h2');
    title.classList.add('portfolio-title');
    let history1 = document.createElement('p');
    history1.classList.add('history');
    history1.setAttribute('id', 'bold-history');
    let history2 = document.createElement('p');
    history2.classList.add('history');
    let history3 = document.createElement('p');
    history3.classList.add('history');
    let span = history2.appendChild(document.createElement('span'));
    let span2 = history3.appendChild(document.createElement('span'));
    let i1 = document.createElement('i');
    i1.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
    span.appendChild(i1);
    let i2 = document.createElement('i');
    i2.classList.add('fa-solid', 'fa-circle', 'fa-2xs');
    span2.appendChild(i2);
    let projDesc = document.createElement('p');
    projDesc.classList.add('project-desc');
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'portfolio-technologies');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    ul.appendChild(li1);
    let button = document.createElement('button');
    button.classList.add('see-demo-btn');
    button.setAttribute('onclick', 'showDemo()');
    button.textContent = 'See Project';
    // set values for Elements
    img.src = projects[i].img;
    title.innerHTML = projects[i].title;
    history1.innerHTML = projects[i].cat[0];
    history2.innerHTML = projects[i].cat[1];
    history3.innerHTML = projects[i].cat[2];
    projDesc.innerHTML = projects[i].desc;
    li1.innerHTML = projects[i].lang[0]
    li2.innerHTML = projects[i].lang[1]
    li3.innerHTML = projects[i].lang[2]
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

function displayWorks() {
  projects = [projectInfo1, projectInfo2, projectInfo3];
  prepareProject(projects);
}