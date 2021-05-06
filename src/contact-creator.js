import { createNavigation } from './nav-creator'
import { createMainPage } from './main-page'
import { createMenuPage } from './menu-creator'

function createContactPage() {

    let content = document.getElementById('content')

    content.innerHTML = ''

    createNavigation()

    let restaurantTitle = '<h1>Restaurant Contact Page</h1>'
    let restaurantImage = '<img src="" alt="image of Restaurant Contact Us">'
    let restaurantDescription = '<p>This is the contact-us page of the best restaurant in town</p>'


    content.innerHTML += restaurantTitle
    content.innerHTML += restaurantImage
    content.innerHTML += restaurantDescription
}

export { createContactPage }