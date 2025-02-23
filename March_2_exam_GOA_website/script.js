console.log(window.innerWidth);
console.log(window.innerHeight);

window.addEventListener('load', () => {
    if(localStorage.length > 0){
        document.getElementById('form-div').remove();
    };
});

const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const pass = document.getElementById('password');

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
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
        }else{
            alert('Password must contain at least one number and one symbol.');
        }
    }else{
        alert('Invalid Password!');
    };
});

function loginClicked(){
    document.getElementById('form-div').innerHTML = `
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
    document.getElementById('acc-reg-b').addEventListener('click', () => {
        document.getElementById('form-div').innerHTML = `
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
        document.getElementById('acc-b').addEventListener('click', () => {loginClicked()});
    });
};
document.getElementById('acc-b').addEventListener('click', () => {loginClicked()});
document.getElementById('login-div').addEventListener('click', () => {loginClicked()});

// localStorage.clear()