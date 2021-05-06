import { createMainPage } from './main-page'
import { createContactPage } from './contact-creator'
import { createMenuPage } from './menu-creator'

function createNavigation() {
    let content = document.getElementById('content')

    let linkMain = '<a href="#" class="main">Go to Main Page</a>'
    let linkMenu = '<a href="#" class="menu">Go to Menu Page</a>'
    let linkContact = '<a href="#" class="contact">Go to Contacts Page</a>'
    


    content.innerHTML += linkMain
    content.innerHTML += linkMenu
    content.innerHTML += linkContact
}

function addAllEventListeners() {
    document.querySelectorAll('.main').forEach(item => item.addEventListener('click', () => {
        createMainPage()
    }))
    document.querySelectorAll('.menu').forEach(item => item.addEventListener('click', () => {
        createMenuPage()
    }))
    document.querySelectorAll('.contact').forEach(item => item.addEventListener('click', () => {
        createContactPage()
    }))
}

export { createNavigation, addAllEventListeners }