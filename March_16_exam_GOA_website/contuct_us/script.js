const emailLabel = document.getElementById('email-label');
const emailInput = document.getElementById('email-input');
if(localStorage.getItem('email')){
    emailLabel.remove();
    emailInput.remove();
};
document.querySelector('form').addEventListener('submit', () => {
    alert('Message Sent!');
});
// localStorage.clear();