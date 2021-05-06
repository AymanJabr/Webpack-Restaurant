import { createNavigation, addAllEventListeners } from './nav-creator';

function createMenuPage() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  createNavigation();

  const restaurantTitle = '<h1>Menu of resturant</h1>';
  const restaurantImage = '<img src="" alt="image of Restaurant Menu">';
  const restaurantDescription = '<p>This is the menu of the best Restaurant in town</p>';

  content.innerHTML += restaurantTitle;
  content.innerHTML += restaurantImage;
  content.innerHTML += restaurantDescription;

  addAllEventListeners();
}

export { createMenuPage };