const body = document.querySelector('body');
const btns = document.getElementsByClassName('btns');

const coockie = document.getElementById('coockie-img');
const coockieP = document.getElementById('coockie');
const goldP = document.getElementById('gold');

// Gadgets
const biggerFinger = document.getElementById('bigger-finger');
const betterMines = document.getElementById('better-mines');
const doubleCoockies = document.getElementById('double-coockies');

// Auto Clickers
const minutes3 = document.getElementById('minutes-3');
const minutes5 = document.getElementById('minutes-5');
const minutes10 = document.getElementById('minutes-10');

// Price Tags
const biggerFingerB = document.getElementById('bigger-finger-b');
const betterMinesB = document.getElementById('better-mines-b');
const doubleCoockiesB = document.getElementById('double-coockies-b');
const minutes3B = document.getElementById('minutes-3-b');
const minutes5B = document.getElementById('minutes-5-b');
const minutes10B = document.getElementById('minutes-10-b');

// Coockies And Gold
let coockies = 0;
let gold = 0;
// Coockies And Coockies To Add
let coockieToAdd = 1;
let goldToAdd = 1;
// Gadgets Prices
let biggerFingerPrice = 50;
let betterMinesPrice = 100;
let doubleCoockiesPrice = 200;
// Auto Clickers Prices
let minutes3Price = 1000;
let minutes5Price = 1500;
let minutes10Price = 2000;

biggerFinger.disabled = true;
betterMines.disabled = true;
doubleCoockies.disabled = true;
minutes3.disabled = true;
minutes5.disabled = true;
minutes10.disabled = true;

function checkPrices(){
    if(gold >= biggerFingerPrice){biggerFinger.disabled = false;}else{biggerFinger.disabled = true;};
    if(coockies >= betterMinesPrice){betterMines.disabled = false;}else{betterMines.disabled = true;};
    if(gold >= doubleCoockiesPrice){doubleCoockies.disabled = false;}else{doubleCoockies.disabled = true;};
    if(gold >= minutes3Price){minutes3.disabled = false;}else{minutes3.disabled = true;};
    if(gold >= minutes5Price){minutes5.disabled = false;}else{minutes5.disabled = true;};
    if(gold >= minutes10Price){minutes10.disabled = false;}else{minutes10.disabled = true;};
};

function loadCheck(){
    if(localStorage.length === 0){
        coockieP.textContent = `Coockies: ${coockies} +${coockieToAdd}`;
        goldP.textContent = `Gold: ${gold} +${goldToAdd}`;
        biggerFingerB.textContent = `${biggerFingerPrice}$`;
        betterMinesB.textContent = `${betterMinesPrice}$`;
        doubleCoockiesB.textContent = `${doubleCoockiesPrice}$`;
        minutes3B.textContent = `${minutes3Price}$`;
        minutes5B.textContent = `${minutes5Price}$`;
        minutes10B.textContent = `${minutes10Price}$`;
    }else{
        coockies = Number(localStorage.getItem('coockies'));
        gold = Number(localStorage.getItem('gold'));
        coockieToAdd = Number(localStorage.getItem('coockiesToAdd'));
        goldToAdd = Number(localStorage.getItem('goldToAdd'));
        biggerFingerPrice = Number(localStorage.getItem('biggerFinger'));
        betterMinesPrice = Number(localStorage.getItem('betterMines'));
        doubleCoockiesPrice = Number(localStorage.getItem('doubleCoockies'));
        minutes3Price = Number(localStorage.getItem('minutes-3'));
        minutes5Price = Number(localStorage.getItem('minutes-5'));
        minutes10Price = Number(localStorage.getItem('minutes-10'));

        coockieP.textContent = `Coockies: ${localStorage.getItem('coockies')} +${localStorage.getItem('coockiesToAdd')}`;
        goldP.textContent = `Gold: ${localStorage.getItem('gold')} +${localStorage.getItem('goldToAdd')}`;
        biggerFingerB.textContent = `${localStorage.getItem('biggerFinger')}$`;
        betterMinesB.textContent = `${localStorage.getItem('betterMines')}$`;
        doubleCoockiesB.textContent = `${localStorage.getItem('doubleCoockies')}$`;
        minutes3B.textContent = `${localStorage.getItem('minutes-3')}$`;
        minutes5B.textContent = `${localStorage.getItem('minutes-5')}$`;
        minutes10B.textContent = `${localStorage.getItem('minutes-10')}$`;
    };
};

// Load Everything Back Up
window.addEventListener('load', () => checkPrices());
window.addEventListener('load', () => loadCheck());

// Coockies Added
function coockiesAdd(coockieAdded, goldAdded){
    coockies += coockieAdded;
    gold += goldAdded;
    coockieP.textContent = `Coockies: ${coockies} +${coockieAdded}`;
    goldP.textContent = `Gold: ${gold} +${goldAdded}`;
    checkPrices();
}

coockie.addEventListener('click', () => coockiesAdd(coockieToAdd, goldToAdd))

// Gadgets Functions
biggerFinger.addEventListener('click', () => {
    if(gold >= biggerFingerPrice){
        coockieToAdd++;
        coockieP.textContent = `Coockie: ${coockies} +${coockieToAdd}`;
        goldP.textContent = `Gold: ${gold -= biggerFingerPrice} +${goldToAdd}`;
        biggerFingerB.textContent = `${biggerFingerPrice *= 2}$`;
    };
    checkPrices();
});
betterMines.addEventListener('click', () => {
    if(coockies >= betterMinesPrice){
        goldToAdd++;
        coockieP.textContent = `Coockies: ${coockies -= betterMinesPrice} +${coockieToAdd}`;
        goldP.textContent = `Gold: ${gold} +${goldToAdd}`;
        betterMinesB.textContent = `${betterMinesPrice *= 2} Coockies`;
    };
    checkPrices();
});
doubleCoockies.addEventListener('click', () => {
    if(gold >= doubleCoockiesPrice){
        coockieToAdd += 2;
        coockieP.textContent = `Coockies: ${coockies} +${coockieToAdd}`;
        goldP.textContent = `Gold: ${gold -= doubleCoockiesPrice} +${goldToAdd}`;
        doubleCoockiesB.textContent = `${doubleCoockiesPrice *= 2}$`;
    };
    checkPrices();
});

// Auto Clickers Functions
function threeMinutes(coockieAdded, goldAdded){
    goldP.textContent = `Gold: ${gold -= minutes3Price}`;
    minutes3B.textContent = `${minutes3Price *= 2}$`;
    const coockieAndGold = setInterval(() => {
        coockies += coockieAdded;
        gold += goldAdded;
        coockieP.textContent = `Coockies: ${coockies}`;
        goldP.textContent = `Gold: ${gold}`;
        checkPrices();
    }, 1000);
    setTimeout(() => {
        clearInterval(coockieAndGold);
    }, 180000); // 3 minutes = 180,000 milliseconds
};

function fiveMinutes(coockieAdded, goldAdded){
    goldP.textContent = `Gold: ${gold -= minutes5Price}`;
    minutes5B.textContent = `${minutes5Price *= 2}$`;
    const coockieAndGold = setInterval(() => {
        coockies += coockieAdded;
        gold += goldAdded;
        coockieP.textContent = `Coockies: ${coockies}`;
        goldP.textContent = `Gold: ${gold}`;
        checkPrices();
    }, 1000);
    setTimeout(() => {
        clearInterval(coockieAndGold);
    }, 300000); // 5 minutes = 300,000 milliseconds
};

function tenMinutes(coockieAdded, goldAdded){
    goldP.textContent = `Gold: ${gold -= minutes10Price}`;
    minutes10B.textContent = `${minutes10Price *= 2}$`;
    const coockieAndGold = setInterval(() => {
        coockies += coockieAdded;
        gold += goldAdded;
        coockieP.textContent = `Coockies: ${coockies}`;
        goldP.textContent = `Gold: ${gold}`;
        checkPrices();
    }, 1000);
    setTimeout(() => {
        clearInterval(coockieAndGold);
    }, 600000); // 10 minutes = 600,000 milliseconds
};

minutes3.addEventListener('click', () => threeMinutes(coockieToAdd, goldToAdd));
minutes5.addEventListener('click', () => fiveMinutes(coockieToAdd, goldToAdd));
minutes10.addEventListener('click', () => tenMinutes(coockieToAdd, goldToAdd));

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        localStorage.setItem('coockies', coockies);
        localStorage.setItem('gold', gold);
        localStorage.setItem('coockiesToAdd', coockieToAdd);
        localStorage.setItem('goldToAdd', goldToAdd);
        localStorage.setItem('biggerFinger', biggerFingerPrice);
        localStorage.setItem('betterMines', betterMinesPrice);
        localStorage.setItem('doubleCoockies', doubleCoockiesPrice);
        localStorage.setItem('minutes-3', minutes3Price);
        localStorage.setItem('minutes-5', minutes5Price);
        localStorage.setItem('minutes-10', minutes10Price);
    });
};

document.getElementById('restart').addEventListener('click', function(){
    localStorage.clear();
    loadCheck();
    location.reload();
});