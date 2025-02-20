const input = document.querySelector('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const ul = document.querySelector('ul');

add.addEventListener('click', () => {
    if(ul.children.length > 6 && window.innerHeight === 696){
        alert("Sorry You Can't Add More than 7 Tasks");
        ul.lastElementChild.remove();
    };
    if(ul.children.length > 9 && window.innerHeight === 912){
        alert("Sorry You Can't Add More than 10 Tasks");
        ul.lastElementChild.remove();
    };
    const li = document.createElement('li');
    li.className = 'li';
    li.textContent = `${input.value}`;
    li.innerHTML += `
        <div class="check-remove-div">
            <button class="check"><i class="fa-solid fa-check"></i></button>
            <button class="remove"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;
    ul.appendChild(li);

    const checkButton = li.querySelector('.check');
    checkButton.addEventListener('click', () => {
        li.style.textDecoration = 'line-through red';
    });
    const removeButton = li.querySelector('.remove');
    removeButton.addEventListener('click', () => {
        ul.removeChild(li);
    });
});
clear.addEventListener('click', () => {
    ul.innerHTML = '';
});

const colors = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
];

function createSquare(){
    const section = document.querySelector('section');
    const square = document.createElement('span');
    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000);
};

setInterval(createSquare, 100);