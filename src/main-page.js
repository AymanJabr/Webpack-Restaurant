/* eslint-disable import/no-cycle */
import { createNavigation, addAllEventListeners } from './nav-creator';
/* eslint-enable import/no-cycle */

const createMainPage = () => {
  const content = document.getElementById('content');

  content.innerHTML = '';

  createNavigation();

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.innerText = 'Restaurant name';
  content.appendChild(restaurantTitle);

  const restaurantImage = document.createElement('img');
  restaurantImage.alt = 'image of Restaurant';
  content.appendChild(restaurantImage);

  const restaurantDescription = document.createElement('p');
  restaurantDescription.innerText = 'This is one of the best Restaurant that I had the privilege of eating in';
  content.appendChild(restaurantDescription);

  addAllEventListeners();
};

export default createMainPage;