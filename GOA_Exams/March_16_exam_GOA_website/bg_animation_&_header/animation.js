const colors = [
    '#68ba74',
    '#ffffff'
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

window.addEventListener('load', () => {
    if(localStorage.getItem('user-name')){
        const profile = document.createElement('div');
        profile.innerHTML = '<i class="fa-solid fa-user"></i>';
        profile.id = 'profile';
        const name = document.createElement('p');
        name.textContent = localStorage.getItem('user-name');
        name.id = 'name';
        document.getElementById('user').appendChild(profile);
        document.getElementById('user').appendChild(name);
        document.getElementById('login-div').remove();
        document.getElementById('register-div').remove();
    };
});
// localStorage.clear();