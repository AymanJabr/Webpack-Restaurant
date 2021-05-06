function createNavigation() {
    let content = document.getElementById('content')

    let linkMain = '<a href="#" onclick="createMainPage();">Go to Main Page</a>'
    let linkMenu = '<a href="#" onclick="createMenuPage();">Go to Menu Page</a>'
    let linkContact = '<a href="#" onclick="createContactsPage();">Go to Contacts Page</a>'
    


    content.innerHTML += linkMain
    content.innerHTML += linkMenu
    content.innerHTML += linkContact
}

export { createNavigation }