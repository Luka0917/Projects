const divs = document.getElementsByClassName('divs');
const ps = document.getElementsByClassName('ps');

let emojis = ['🍉', '🍇', '🍋', '🍒', '🍎', '🍓', '🍌', '🍊'];

let emojiPairs = [];
for (let i = 0; i < emojis.length; i++) {
    emojiPairs.push(emojis[i], emojis[i]);
}
emojiPairs = emojiPairs.sort(() => Math.random() - 0.5);
for (let i = 0; i < ps.length; i++) {
    ps[i].textContent = emojiPairs[i];
}

for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', () => {
        let deg = 180;
        let animation = setInterval(() => {
            divs[i].style.transform = `rotateY(${deg}deg)`;
            deg--;
            if(deg === 100){
                ps[i].style.visibility = 'visible';
            };
            if(deg === 0){
                clearInterval(animation);
                divs[i].style.pointerEvents = 'none';
            };
        }, 1);
    });
};