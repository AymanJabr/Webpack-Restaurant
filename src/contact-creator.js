import { createNavigation, addAllEventListeners } from './nav-creator';

function createContactPage() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  createNavigation();

  const restaurantTitle = '<h1>Restaurant Contact Page</h1>';
  const restaurantImage = '<img src="" alt="image of Restaurant Contact Us">';
  const restaurantDescription = '<p>This is the contact-us page of the best restaurant in town</p>';

  content.innerHTML += restaurantTitle;
  content.innerHTML += restaurantImage;
  content.innerHTML += restaurantDescription;

  addAllEventListeners();
}

export { createContactPage };