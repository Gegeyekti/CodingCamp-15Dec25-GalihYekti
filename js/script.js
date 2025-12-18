
WelcomeMessage();

function WelcomeMessage() {
    const userInput = prompt('Please enter your name:');
    const welcomeDOM = document.getElementById('Welcome-text');
    const textDeskDOM = document.getElementById('text-desk');

    if (userInput === null || userInput.trim() === '') {
        welcomeDOM.innerHTML = 'Welcome, guest!';
    } else {
        const hours = new Date().getHours();
        let message = 'Welcome to My Portofolio Website';
        if (hours < 12) {
            message = `Good Morning, ${userInput}!`;
        } else if (hours < 18) {
            message = `Good Afternoon, ${userInput}!`;
        } else {
            message = `Good Evening, ${userInput}!`;
        }
        welcomeDOM.innerHTML = message;
        textDeskDOM.innerHTML = "It's My Portofolio Website";
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const output = document.getElementById('output');
    output.value = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('output').value = '';
});