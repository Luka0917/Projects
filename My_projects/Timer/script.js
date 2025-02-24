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

const time = document.querySelector('b');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let hour = 0;
let min = 0;
let sec = 0;
let timeStart;

start.addEventListener('click', () => {
    if(timeStart){
        clearInterval(timeStart);
    };
    timeStart = setInterval(() => {
        let formattedHour = hour < 10 ? `0${hour}` : hour;
        let formattedMin = min < 10 ? `0${min}` : min;
        let formattedSec = sec < 10 ? `0${sec}` : sec;
    
        time.textContent = `${formattedHour} : ${formattedMin} : ${formattedSec}`;
        sec++;
        if(sec == 60){
            min++;
            sec = 0;
        };
        if(min == 60){
            hour++;
            min = 0;
        };
    }, 1000);
});
stop.addEventListener('click', () => {
    clearInterval(timeStart)
});
reset.addEventListener('click', () => {
    clearInterval(timeStart);
    time.textContent = '00 : 00 : 00';
});