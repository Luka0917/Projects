const colors = [
    '#ffffff',
    '#68ba74'
];

function createSquare(){
    const body = document.querySelector('body');
    const square = document.createElement('span');
    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    body.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000);
};

setInterval(createSquare, 100);

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

// localStorage.clear()