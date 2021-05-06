/* eslint-disable import/no-cycle */
import { createNavigation, addAllEventListeners } from './nav-creator';
/* eslint-enable import/no-cycle */

function createMainPage() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  createNavigation();

  const restaurantTitle = '<h1>Restaurant name</h1>';
  const restaurantImage = '<img src="" alt="image of Restaurant">';
  const restaurantDescription = '<p>This is one of the best Restaurant that I had the privilege of eating in</p>';

  content.innerHTML += restaurantTitle;
  content.innerHTML += restaurantImage;
  content.innerHTML += restaurantDescription;

  addAllEventListeners();
}

export default createMainPage;