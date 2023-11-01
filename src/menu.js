function createMenuPage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('menuContent');

    return mainContent;
}


export default function loadMenuPage() {
    const main = document.querySelector('#main');
    main.appendChild(createMenuPage());

    return main;
}