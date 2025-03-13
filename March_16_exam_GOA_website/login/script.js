document.getElementById('login-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_website/main/index.html', '_self')
});
document.getElementById('register-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_Website/register/index.html', '_self')
});
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(document.getElementById('err')){document.getElementById('err').remove()};
    const err = document.createElement('p');
    err.id = 'err';
    if(!localStorage.getItem('user-name')){
        err.textContent = 'Wrong Username OR Password';
        document.getElementById('form-div').appendChild(err);
    };
});