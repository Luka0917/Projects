const main = document.getElementById('main');
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
const extreme = document.getElementById('extreme');

function createDificulty(pText){
    document.getElementById('main').remove();
    const main_2 = document.createElement('div');
    main_2.id = 'main-2';
    main_2.innerHTML = `
        <p id="text">${pText}</p>
        <p id="points">Points: 0</p>
        <form>
            <input type="number" placeholder="Enter Number" required>
            <button id="guess">Guess</button>
        </form>
        <p id="result">Your Guess Is: </p>
    `;
    document.querySelector('body').appendChild(main_2);
};

let correct = document.createElement('b');
let wrong = document.createElement('b');
correct.textContent = 'Correct';
wrong.textContent = 'Wrong';
correct.id = 'correct';
wrong.id = 'wrong';
let points = 0;

function checkNum(numDificulty){
    let randomNum = Math.floor(Math.random() * numDificulty);
    console.log(randomNum); // For Debugging 
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        document.getElementById('result').innerHTML = 'Your Guess Is: '; 
        if(parseInt(document.querySelector('input').value) === randomNum){
            document.getElementById('result').appendChild(correct);
            points++;
        }else{
            document.getElementById('result').appendChild(wrong);
            points--;
        };
        document.getElementById('points').textContent = `Points: ${points}`;
        randomNum = Math.floor(Math.random() * numDificulty);
        console.log(randomNum); // For Debugging 
    });
}

easy.addEventListener('click', () => {
    createDificulty('Guess Number Between 0-10');
    checkNum(10);
});
medium.addEventListener('click', () => {
    createDificulty('Guess Number Between 0-50');
    checkNum(50);
});
hard.addEventListener('click', () => {
    createDificulty('Guess Number Between 0-100');
    checkNum(100);
});
extreme.addEventListener('click', () => {
    createDificulty('Guess Number Between 0-500');
    checkNum(500);
});