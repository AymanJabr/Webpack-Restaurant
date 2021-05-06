import { createNavigation } from './nav-creator'
import { createMainPage } from './main-page'
import { createContactPage } from './contact-creator'

function createMenuPage() {
    let content = document.getElementById('content')

    content.innerHTML = ''

    createNavigation()

    let restaurantTitle = '<h1>Menu of resturant</h1>'
    let restaurantImage = '<img src="" alt="image of Restaurant Menu">'
    let restaurantDescription = '<p>This is the menu of the best Restaurant in town</p>'


    content.innerHTML += restaurantTitle
    content.innerHTML += restaurantImage
    content.innerHTML += restaurantDescription
}

export {createMenuPage}