/* eslint-disable import/no-cycle */
import createMainPage from './main-page';
import createContactPage from './contact-creator';
import createMenuPage from './menu-creator';
/* eslint-enable import/no-cycle */

const createNavigation = () => {
  const content = document.getElementById('content');

  const linkMain = document.createElement('a');
  linkMain.innerText = 'Go To Main Page ';
  linkMain.href = '#';
  linkMain.classList.add('main');
  content.appendChild(linkMain);

  const linkMenu = document.createElement('a');
  linkMenu.innerText = 'Go To Menu Page ';
  linkMenu.href = '#';
  linkMenu.classList.add('menu');
  content.appendChild(linkMenu);

  const linkContact = document.createElement('a');
  linkContact.innerText = 'Go To Contact Page ';
  linkContact.href = '#';
  linkContact.classList.add('contact');
  content.appendChild(linkContact);
};

const addAllEventListeners = () => {
  document.querySelectorAll('.main').forEach((item) => item.addEventListener('click', () => {
    createMainPage();
  }));
  document.querySelectorAll('.menu').forEach((item) => item.addEventListener('click', () => {
    createMenuPage();
  }));
  document.querySelectorAll('.contact').forEach((item) => item.addEventListener('click', () => {
    createContactPage();
  }));
};

export { createNavigation, addAllEventListeners };