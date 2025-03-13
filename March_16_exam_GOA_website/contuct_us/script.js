const emailLabel = document.getElementById('email-label');
const emailInput = document.getElementById('email-input');
if(localStorage.getItem('email')){
    emailLabel.remove();
    emailInput.remove();
};
document.querySelector('form').addEventListener('submit', () => {
    alert('Message Sent!');
});
document.getElementById('login-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_website/login/index.html', '_self');
});
document.getElementById('register-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_website/register/index.html', '_self');
});