const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
];

function createSquare(){
    const body = document.querySelector('body');
    const square = document.createElement('span');
    let size = Math.random() * 50;
    let randomBorder = Math.floor(Math.random() * 10) + 1;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.border = `${randomBorder}px solid ${bg}`;
    square.style.borderRadius = '10px';
    square.style.backgroundColor = 'transparent';

    body.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000);
};

setInterval(createSquare, 100);

setInterval(() => {
    let date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    document.querySelector('b').textContent = `${hours} : ${minutes} : ${seconds}`;
}, 1000);