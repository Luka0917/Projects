const usernameP = document.getElementById('username-p');
const option = document.getElementsByClassName('option');
const operations = document.getElementById('operations');

const data = JSON.parse(localStorage.getItem('data'));
usernameP.textContent = data.username;
for(let i = 0; i < option.length; i++){
    option[i].addEventListener('click', () => {
        if(option[i].textContent === 'Change Username'){
            operations.innerHTML = `
                <b>Change Username</b>
                <form>
                    <label for="new-username-email">Email</label>
                    <input type="email" name="email" id="new-username-email">

                    <label for="username" id="username-lab">New Username</label>
                    <input type="text" name="username" id="username">

                    <button>Submit</button>
                </form>
                <p id="error"></p>
            `;
            const changeUsernameForm = operations.querySelector('form');
            const changeUsernameEmail = operations.querySelector('#new-username-email');
            const changeUsernameNewUsername = operations.querySelector('#username');
            const errorP = operations.querySelector('#error');

            changeUsernameForm.addEventListener('submit', e => {
                e.preventDefault();
                let correctEmail = false;
                let newUsername = false;
                if(data.email === changeUsernameEmail.value){
                    correctEmail = true;
                };
                if(data.username !== changeUsernameNewUsername.value){
                    newUsername = true;
                };
                if(!correctEmail){
                    errorP.textContent = 'Invalid email!';
                };
                if(!newUsername){
                    errorP.textContent = 'Username is already used!';
                };
                if(correctEmail && newUsername){
                    data.username = changeUsernameNewUsername.value;
                    localStorage.setItem('data', JSON.stringify(data));
                    location.reload();
                };
            });
        };
        if(option[i].textContent === 'Change Password'){
            operations.innerHTML = `
                <b>Change Password</b>
                <form>
                    <label for="new-pass-email">Email</label>
                    <input type="email" name="email" id="new-pass-email">

                    <label for="pass" id="pass-lab">New Password</label>
                    <input type="password" name="pass" id="pass">

                    <button>Submit</button>
                </form>
                <p id="error"></p>
            `;
            const changePassForm = operations.querySelector('form');
            const changePassEmail = operations.querySelector('#new-pass-email');
            const changePassNewPass = operations.querySelector('#pass');
            const errorP = operations.querySelector('#error');

            changePassForm.addEventListener('submit', e => {
                e.preventDefault();
                let correctEmail = false;
                let correctPass = false;
                if(data.email === changePassEmail.value){
                    correctEmail = true;
                };
                if(data.password !== changePassNewPass.value){
                    correctPass = true;
                };
                if(!correctEmail){
                    errorP.textContent = 'Invalid email!';
                };
                if(!correctPass){
                    errorP.textContent = 'Password is already used!';
                };
                if(correctEmail && correctPass){
                    data.password = changePassNewPass.value;
                    localStorage.setItem('data', JSON.stringify(data));
                    location.reload();
                };
            });
        };
        if(option[i].textContent === 'Log Out'){
            window.open('/My_projects/Register_login/login/index.html', '_self');
        };
        if(option[i].textContent === 'Delete Account'){
            localStorage.clear();
            window.open('/My_projects/Register_login/register/index.html', '_self');
        };
    });
};