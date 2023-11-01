function createContactForm() {
    const contactForm = document.createElement('div');
    contactForm.classList.add('contactForm');

    const message = document.createElement('h3');
    message.textContent = 'Give us feedback!'

    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');

    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');

    const textLabel = document.createElement('label');
    const textBox = document.createElement('textarea');

    const contactButton = document.createElement('button');


    nameLabel.textContent = 'First and last name: ';
    nameLabel.setAttribute('for', 'fullName');

    nameInput.setAttribute('type', 'text');
    nameInput.id = 'fullName';

    emailLabel.textContent = 'Email: ';
    emailLabel.setAttribute('for', 'email');

    emailInput.setAttribute('type', 'email');
    emailInput.id = 'email';

    textLabel.textContent = 'Feedback: ';
    textLabel.setAttribute('for', 'textField');

    textBox.setAttribute('rows', '5');
    textBox.id = 'textField';

    contactButton.classList.add('submitContactForm');
    contactButton.textContent = 'Send';

    contactForm.appendChild(message);
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(textLabel);
    contactForm.appendChild(textBox);
    contactForm.appendChild(contactButton);
    
    return contactForm;
}

function createContactPage() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('contactContent');

    mainContent.appendChild(createContactForm());
    return mainContent;
}


export default function loadContactPage() {
    const main = document.querySelector('#main');
    main.appendChild(createContactPage());

    return main;
}