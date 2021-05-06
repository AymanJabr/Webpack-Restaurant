/* eslint-disable import/no-cycle */
import { createNavigation, addAllEventListeners } from './nav-creator';
/* eslint-enable import/no-cycle */

const createMenuPage = () => {
  const content = document.getElementById('content');

  content.innerHTML = '';

  createNavigation();

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.innerText = 'Menu of restaurant';
  content.appendChild(restaurantTitle);

  const restaurantImage = document.createElement('img');
  restaurantImage.alt = 'image of Restaurant Menu';
  content.appendChild(restaurantImage);

  const restaurantDescription = document.createElement('p');
  restaurantDescription.innerText = 'This is the menu of the best Restaurant in town';
  content.appendChild(restaurantDescription);

  addAllEventListeners();
};

export default createMenuPage;