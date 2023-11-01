import loadHomePage from "./src/home";

function createHeader() {
    const header = document.createElement('div');
    const headerContent = document.createElement('div');
    const logo = document.createElement('div');

    header.classList.add('header');
    headerContent.classList.add('headerContent');
    logo.classList.add('logo');

    headerContent.appendChild(logo);
    headerContent.appendChild(createNav());
    header.appendChild(headerContent);

    return header;
}

function createNav() {
    const navButtons = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    navButtons.classList.add('navButtons');
    home.classList.add('home', 'active');
    menu.classList.add('menu');
    contact.classList.add('contact');

    home.textContent = 'Home';
    menu.textContent = 'Our Menu';
    contact.textContent = 'Contact Us';

    home.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('active')) {
            return;
        }
        navButtons.childNodes.forEach(node => {
            if(node.classList.contains('active')){
                node.classList.remove('active');
            }
        })
        evt.target.classList.add('active');
        loadHomePage();
    })
    menu.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('active')) {
            return;
        }
        navButtons.childNodes.forEach(node => {
            if(node.classList.contains('active')){
                node.classList.remove('active');
            }
        })
        evt.target.classList.add('active');
    })
    contact.addEventListener('click', (evt) => {
        if(evt.target.classList.contains('active')) {
            return;
        }
        navButtons.childNodes.forEach(node => {
            if(node.classList.contains('active')){
                node.classList.remove('active');
            }
        })
        evt.target.classList.add('active');
    })

    navButtons.appendChild(home);
    navButtons.appendChild(menu);
    navButtons.appendChild(contact);

    return navButtons;
}


function createFooter() {
    const footer = document.createElement('div');
    const footerContent = document.createElement('div');
    
    footer.classList.add('footer');
    footer.appendChild(footerContent);
    return footer;
}


function createMain() {
    const main = document.createElement('div');
    main.id = 'main';
    return main;
}


export default function buildWebPage(main) {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    return content;
} 