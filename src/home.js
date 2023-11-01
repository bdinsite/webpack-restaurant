function createHomePage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('homeContent');

    return mainContent;
}


export default function loadHomePage() {
    const main = document.querySelector('#main');
    
    main.appendChild(createHomePage());

    return main;

}