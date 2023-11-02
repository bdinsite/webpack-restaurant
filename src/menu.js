function createMenuPage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('menuContent');

    const menuImg = document.createElement('img');
    menuImg.src = 'img/menu-3168414_1280.jpg';
    menuImg.classList.add('menuImg');

    mainContent.appendChild(menuImg);
    
    return mainContent;
}


export default function loadMenuPage() {
    const main = document.querySelector('#main');
    main.appendChild(createMenuPage());

    return main;
}