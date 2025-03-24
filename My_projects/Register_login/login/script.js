const form = document.querySelector('form');
const errorP = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const pass = form.pass.value;
    if(!JSON.parse(localStorage.getItem('data'))){
        errorP.textContent = 'You dont have an account!';
    }else{
        const data = JSON.parse(localStorage.getItem('data')); // Getting data from localStorage
        let correctUsername = false;
        let correctPass = false;
        if(username === data.username){
            correctUsername = true;
        };
        if(pass === data.password){
            correctPass = true;
        };
    
        if(!correctUsername){
            errorP.textContent = 'Invalid username!';
        }else if(!correctPass){
            errorP.textContent = 'Invalid password!';
        };
    
        if(correctUsername && correctPass){
            window.open('/My_projects/Register_login/admin_panel/index.html', '_self');
        };
    };
});
// localStorage.clear();