window.addEventListener('load', () => {
    if(localStorage.length > 0){
        document.getElementById('form-div').remove();
        let loginDiv = document.getElementById('login-div');
        loginDiv.id = 'nothing';
        loginDiv.textContent = '';

        const profile = document.createElement('div');
        profile.innerHTML = '<i class="fa-solid fa-user"></i>';
        profile.id = 'profile';
        const name = document.createElement('p');
        name.textContent = localStorage.getItem('user-name');
        name.id = 'name';
        document.getElementById('user').appendChild(profile);
        document.getElementById('user').appendChild(name);
    };
});

const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const pass = document.getElementById('password');

function registerCheck(){
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
            }
        };
        if(haveNumber && haveSymbol){
            localStorage.setItem('user-name', userName.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('pass', pass.value);
            document.getElementById('form-div').remove();

            const profile = document.createElement('div');
            profile.innerHTML = '<i class="fa-solid fa-user"></i>';
            profile.id = 'profile';
            const name = document.createElement('p');
            name.textContent = localStorage.getItem('user-name');
            name.id = 'name';
            document.getElementById('user').appendChild(profile);
            document.getElementById('user').appendChild(name);
        }else{
            alert('Password must contain at least one number and one symbol.');
        }
    }else{
        alert('Invalid Password!');
    };
    location.reload();
}
document.querySelector('form').addEventListener('submit', e => {e.preventDefault(); registerCheck()});

function loginCheck(){
    const loginDiv = document.getElementById('login-div');
    const formDiv = document.getElementById('form-div');
    if(loginDiv.textContent === 'Login'){
        formDiv.innerHTML = `
            <p id="login">Login</p>
            <form>
                <label for="user-name" id="user-label">User name</label>
                <input type="text" id="user-name" required>
    
                <label for="password" id="password-label">Password</label>
                <input type="text" id="password" required>
    
                <button id="register">Register</button>
            </form>
            <p id="register-p">Don't Have An Account? <b id="acc-reg-b">Register</b></p>
        `;
        loginDiv.textContent = 'Register';
        document.getElementById('register').textContent = 'Login';
        document.getElementById('acc-reg-b').addEventListener('click', () => {loginCheck()});
        loginDiv.addEventListener('click', () => {loginCheck()});

        document.getElementById('register').addEventListener('click', e => {
            e.preventDefault();
            let errP = document.createElement('p');
            errP.id = 'err';
            errP.textContent = 'You Dont Have An Account!';
            formDiv.appendChild(errP);
        });
    }else{
        formDiv.innerHTML = `
            <p id="reg">Register</p>
                <form>
                    <label for="user-name" id="user-label">User name</label>
                    <input type="text" id="user-name" required>
    
                    <label for="email" id="email-label">Email</label>
                    <input type="email" id="email" required>
    
                    <label for="password" id="password-label">Password</label>
                    <input type="text" id="password" required>
    
                    <button id="register">Register</button>
                </form>
            <p id="login-p">Already Have An Account? <b id="acc-b">Login</b></p>
        `;
        loginDiv.textContent = 'Login';
        document.getElementById('acc-b').addEventListener('click', () => {loginCheck()});
        loginDiv.addEventListener('click', () => {loginCheck()});
    };
    document.getElementById('login-div').addEventListener('click', () => {loginCheck()});
};
document.getElementById('login-div').addEventListener('click', () => {loginCheck()});
document.getElementById('acc-b').addEventListener('click', () => {loginCheck()});

// localStorage.clear();