document.getElementById('login-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_Website/login/index.html', '_self');
});
document.getElementById('register-div').addEventListener('click', () => {
    window.open('/March_16_exam_GOA_Website/main/index.html', '_self');
});

const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const pass = document.getElementById('password');
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(document.getElementById('err')){document.getElementById('err').remove()};
    const err = document.createElement('p');
    err.id = 'err';
    if(localStorage.getItem('user-name') === userName.value){
        err.textContent = 'Username Is Already Taken!';
        document.getElementById('form-div').appendChild(err);
    }else if(localStorage.getItem('email') === email.value){
        err.textContent = 'Email Is Already Taken!';
        document.getElementById('form-div').appendChild(err);
    }else{
        let haveNumber = false;
        let haveSymbol = false;
        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '\\', '|', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?', '~', '`'];
        if(pass.value.length >= 8){
            for(let i = 0; i < pass.value.length; i++){
                if(pass.value[i] >= '0' && pass.value[i] <= '9'){
                    haveNumber = true;
                };
                if(symbols.includes(pass.value[i])){
                    haveSymbol = true;
                };
            };
            if(haveNumber && haveSymbol){
                localStorage.setItem('user-name', userName.value);
                localStorage.setItem('email', email.value);
                localStorage.setItem('pass', pass.value);

                const profile = document.createElement('div');
                profile.innerHTML = '<i class="fa-solid fa-user"></i>';
                profile.id = 'profile';
                const name = document.createElement('p');
                name.textContent = localStorage.getItem('user-name');
                name.id = 'name';
                document.getElementById('user').appendChild(profile);
                document.getElementById('user').appendChild(name);
                window.open('/March_16_exam_GOA_Website/main/index.html', '_self');
            }else{
                alert('Password must contain at least one number and one symbol.');
            };
        }else{
            alert('Invalid Password!');
        };
    };
});
// localStorage.clear();