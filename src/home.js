function createHomePage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('homeContent');
    
    const homeImg = document.createElement('img');
    homeImg.src = '../dist/img/dinner_table_922_1280.jpg';
    homeImg.classList.add('homeImg');

    const textContent = document.createElement('div');
    textContent.classList.add('textContent');
    
    const h3Home = document.createElement('h3');
    h3Home.textContent = 'Lorem Ipsum';

    const h4Home1 = document.createElement('h4');
    h4Home1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis, praesentium minus enim iure, corporis distinctio impedit, ea delectus animi velit labore excepturi iste neque iusto! Rerum dignissimos ipsa officiis sint, magni voluptate, mollitia amet tempore, ex consequatur vitae at explicabo. Ipsa molestias esse perferendis dolore cumque suscipit ratione laboriosam.'

    const h4Home2 = document.createElement('h4');
    h4Home2.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem aperiam sequi provident non. Tenetur qui voluptatibus mollitia dolor ipsa eum doloremque, soluta, hic officiis pariatur ipsum earum culpa eveniet voluptatem cupiditate nam dolorum nesciunt sapiente!'
    
    textContent.appendChild(h3Home);
    textContent.appendChild(h4Home1);
    textContent.appendChild(h4Home2);

    mainContent.appendChild(textContent);
    mainContent.appendChild(homeImg);

    return mainContent;
}


export default function loadHomePage() {
    const main = document.querySelector('#main');
    main.appendChild(createHomePage());

    return main;
}