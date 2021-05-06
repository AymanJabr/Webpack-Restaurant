import {createNavigation} from './nav-creator'
import { createContactPage } from './contact-creator'
import { createMenuPage } from './menu-creator'

function createMainPage() {
    let content = document.getElementById('content')

    content.innerHTML = ''

    createNavigation()

    let restaurantTitle = '<h1>Restaurant name</h1>'
    let restaurantImage = '<img src="" alt="image of Restaurant">'
    let restaurantDescription = '<p>This is one of the best Restaurant that I had the privilege of eating in</p>'


    content.innerHTML += restaurantTitle
    content.innerHTML += restaurantImage
    content.innerHTML += restaurantDescription
}

export { createMainPage }