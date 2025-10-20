const slider = document.getElementById('slider');
const buttons = document.querySelectorAll('#buttons button');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        const index = buttons[i].getAttribute('data-index');
        slider.style.transform = `translateX(-${index * 100}%)`;
    });
};

document.getElementById('login-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_website/login/index.html', '_self');
});
document.getElementById('register-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_website/register/index.html', '_self');
});