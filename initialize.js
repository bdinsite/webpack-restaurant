import loadHomePage from "./src/home";
import loadMenuPage from "./src/menu";
import loadContactPage from "./src/contact";

function createHeader() {
    const header = document.createElement('div');
    const headerContent = document.createElement('div');
    const logoContainer = document.createElement('div');
    const logo = document.createElement('img');
    logo.src = 'img/Logo_850_125.png';

    header.classList.add('header');
    headerContent.classList.add('headerContent');
    logoContainer.classList.add('logoContainer');
    logo.classList.add('logo');

    logoContainer.appendChild(logo);
    headerContent.appendChild(logoContainer);
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
    home.classList.add('home');
    menu.classList.add('menu');
    contact.classList.add('contact');

    home.textContent = 'Home';
    menu.textContent = 'Our Menu';
    contact.textContent = 'Contact Us';

    home.addEventListener('click', (evt) => {
        const menuDiv = document.querySelector('.menuContent');
        const contactDiv = document.querySelector('.contactContent');        
        if(evt.target.classList.contains('active')) {
            return;
        }
        navButtons.childNodes.forEach(node => {
            if(node.classList.contains('active')){
                node.classList.remove('active');
            }
        })
        evt.target.classList.add('active');
        if(menuDiv){menuDiv.remove()};
        if(contactDiv){contactDiv.remove()};
        loadHomePage();
    })
    menu.addEventListener('click', (evt) => {
        const homeDiv = document.querySelector('.homeContent');
        const contactDiv = document.querySelector('.contactContent');
        if(evt.target.classList.contains('active')) {
            return;
        }
        navButtons.childNodes.forEach(node => {
            if(node.classList.contains('active')){
                node.classList.remove('active');
            }
        })
        evt.target.classList.add('active');
        if(homeDiv){homeDiv.remove()};
        if(contactDiv){contactDiv.remove()};
        loadMenuPage();
    })
    contact.addEventListener('click', (evt) => {
        const homeDiv = document.querySelector('.homeContent');
        const menuDiv = document.querySelector('.menuContent');
        if(evt.target.classList.contains('active')) {
            return;
        }
        navButtons.childNodes.forEach(node => {
            if(node.classList.contains('active')){
                node.classList.remove('active');
            }
        })
        evt.target.classList.add('active');
        if(homeDiv){homeDiv.remove()};
        if(menuDiv){menuDiv.remove()};
        loadContactPage();
    })

    navButtons.appendChild(home);
    navButtons.appendChild(menu);
    navButtons.appendChild(contact);

    return navButtons;
}


function createMain() {
    const main = document.createElement('div');
    main.id = 'main';
    return main;
}


function createFooter() {
    const footer = document.createElement('div');
    const footerContent = document.createElement('div');
    const address = document.createElement('div');
    const h3Address = document.createElement('h3');
    const h4Address = document.createElement('h4');
    const p = document.createElement('p');
    const copyright = document.createElement('div');
    const h4Copyright = document.createElement('h4');
    const social = document.createElement('div');
    const h3Social = document.createElement('h3');
    const imgSocial = document.createElement('img');

    h3Address.textContent = 'Address:';
    h4Address.textContent = 'Just around the 2nd corner, to the left';
    p.textContent = 'Pass the bald guy and clap four times, then turn right.';

    h4Copyright.textContent = 'Copyright ©';
    h3Social.textContent = 'Follow Us:';

    footer.classList.add('footer');
    footerContent.classList.add('footerContent');
    address.classList.add('address');
    copyright.classList.add('copyright');
    social.classList.add('social');

    imgSocial.src = 'img/social-media-2083456_640.jpg';

    address.appendChild(h3Address);
    address.appendChild(h4Address);
    address.appendChild(p);
    copyright.appendChild(h4Copyright);
    social.appendChild(h3Social);
    social.appendChild(imgSocial);
    footerContent.appendChild(address);
    footerContent.appendChild(copyright);
    footerContent.appendChild(social);
    footer.appendChild(footerContent);
    return footer;
}


export default function buildWebPage() {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    return content;
} 