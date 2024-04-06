const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

loginButton.addEventListener('click', function() {
    container.classList.add('active')
})



signupButton.addEventListener('click', function() {
    container.classList.remove('active')
})