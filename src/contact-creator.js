/* eslint-disable import/no-cycle */
import { createNavigation, addAllEventListeners } from './nav-creator';
/* eslint-enable import/no-cycle */

const createContactPage = () => {
  const content = document.getElementById('content');

  content.innerHTML = '';

  createNavigation();

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.innerText = 'Restaurant Contact Page';
  content.appendChild(restaurantTitle);

  const restaurantImage = document.createElement('img');
  restaurantImage.alt = 'image of Restaurant Contact Us';
  content.appendChild(restaurantImage);

  const restaurantDescription = document.createElement('p');
  restaurantDescription.innerText = 'This is the contact-us page of the best restaurant in town';
  content.appendChild(restaurantDescription);

  addAllEventListeners();
};

export default createContactPage;