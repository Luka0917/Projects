const coockieBtn = document.getElementById('coockie-btn');
const shopDiv = document.getElementById('shop');
const cartBtn = document.getElementById('cart');
const xBtn = document.getElementById('x');
const coockiesP = document.getElementById('coockies-p');
const goldP = document.getElementById('gold-p');

const biggerFingerBtn = document.getElementById('bigger-finger-btn');
const biggerFingerPriceP = document.getElementById('bigger-finger-price');
const biggerFingerCountP = document.getElementById('bigger-finger-count');

const betterMinesBtn = document.getElementById('better-mines-btn');
const betterMinesPriceP = document.getElementById('better-mines-price');
const betterMinesCountP = document.getElementById('better-mines-count');

const doubleCoockiesBtn = document.getElementById('double-coockies-btn');
const doubleCoockiesPriceP = document.getElementById('double-coockies-price');
const doubleCoockiesCountP = document.getElementById('double-coockies-count');

cartBtn.addEventListener('click', () => {
    let count = 0;
    let interval = setInterval(() => {
        count += 5;
        shopDiv.style.transform = `translateX(${count}px)`
        if(count >= 500){
            clearInterval(interval);
        };
    }, 1);
});
xBtn.addEventListener('click', () => {
    let count = 500;
    let interval = setInterval(() => {
        count -= 5;
        shopDiv.style.transform = `translateX(${count}px)`
        if(count <= 0){
            clearInterval(interval);
        };
    }, 1);
});

let coockieCount = 0;
let goldCount = 0;

let coockiesToAdd = 1;
let goldToAdd = 1;

let biggerFingerPrice = 50;
let biggerFingerCount = 0;

let betterMinesPrice = 100;
let betterMinesCount = 0;

let doubleCoockiesPrice = 100000;
let doubleCoockiesCount = 0;

biggerFingerBtn.disabled = true;
betterMinesBtn.disabled = true;
doubleCoockiesBtn.disabled = true;

function checkPrices(){
    if(goldCount >= biggerFingerPrice){biggerFingerBtn.disabled = false; biggerFingerBtn.style.border = '5px solid #9BEC00'}else{biggerFingerBtn.disabled = true; biggerFingerBtn.style.border = '5px solid #FF0000'};
    if(coockieCount >= betterMinesPrice){betterMinesBtn.disabled = false; betterMinesBtn.style.border = '5px solid #9BEC00'}else{betterMinesBtn.disabled = true; betterMinesBtn.style.border = '5px solid #FF0000'};
    if(goldCount >= doubleCoockiesPrice){doubleCoockiesBtn.disabled = false; doubleCoockiesBtn.style.border = '5px solid #9BEC00'}else{doubleCoockiesBtn.disabled = true; doubleCoockiesBtn.style.border = '5px solid #FF0000'};
};

window.addEventListener('load', () => {
    if(localStorage.getItem('data')){
        const loadData = JSON.parse(localStorage.getItem('data'));
        coockieCount = loadData.coockieCount;
        goldCount = loadData.goldCount;
        coockiesToAdd = loadData.coockiesToAdd;
        goldToAdd = loadData.goldToAdd;
        biggerFingerPrice = loadData.biggerFinger.price;
        biggerFingerCount = loadData.biggerFinger.count;
        betterMinesPrice = loadData.betterMines.price;
        betterMinesCount = loadData.betterMines.count;
        doubleCoockiesPrice = loadData.doubleCoockies.price;
        doubleCoockiesCount = loadData.doubleCoockies.count;
        loadCoockiesAndGold();
    }
    checkPrices();
});

function loadCoockiesAndGold(){
    coockiesP.textContent = `Coockies: ${coockieCount.toLocaleString('de-DE')} +${coockiesToAdd.toLocaleString('de-DE')}`;
    goldP.textContent = `Gold: ${goldCount.toLocaleString('de-DE')} +${goldToAdd.toLocaleString('de-DE')}`;
    biggerFingerPriceP.textContent = `${biggerFingerPrice.toLocaleString('de-DE')}$`;
    biggerFingerCountP.textContent = biggerFingerCount;
    betterMinesPriceP.textContent = `${betterMinesPrice.toLocaleString('de-DE')} Coockies`;
    betterMinesCountP.textContent = betterMinesCount;
    doubleCoockiesPriceP.textContent = `${doubleCoockiesPrice.toLocaleString('de-DE')}$`;
    doubleCoockiesCountP.textContent = doubleCoockiesCount;
};
loadCoockiesAndGold();

coockieBtn.addEventListener('click', () => {
    coockieCount += coockiesToAdd;
    goldCount += goldToAdd;
    const data = {
        coockieCount: coockieCount,
        goldCount: goldCount,
        coockiesToAdd: coockiesToAdd,
        goldToAdd: goldToAdd,
        biggerFinger: {
            price: biggerFingerPrice,
            count: biggerFingerCount
        },
        betterMines: {
            price: betterMinesPrice,
            count: betterMinesCount
        },
        doubleCoockies: {
            price: doubleCoockiesPrice,
            count: doubleCoockiesCount
        }
    };
    localStorage.setItem('data', JSON.stringify(data));
    loadCoockiesAndGold();
    checkPrices();
});

biggerFingerBtn.addEventListener('click', () => {
    if(goldCount >= biggerFingerPrice){
        goldCount -= biggerFingerPrice;
        coockiesToAdd += 1;
        biggerFingerCount += 1;
        biggerFingerPrice = Math.floor(biggerFingerPrice + biggerFingerPrice * 0.2);
        biggerFingerPriceP.textContent = `${biggerFingerPrice.toLocaleString('de-DE')}$`;
        biggerFingerCountP.textContent = biggerFingerCount;
        loadCoockiesAndGold();
        checkPrices();
    };
});

betterMinesBtn.addEventListener('click', () => {
    if(coockieCount >= betterMinesPrice){
        coockieCount -= betterMinesPrice;
        goldToAdd += 1;
        betterMinesCount += 1;
        betterMinesPrice = Math.floor(betterMinesPrice + betterMinesPrice * 0.3);
        betterMinesPriceP.textContent = `${betterMinesPrice.toLocaleString('de-DE')} Coockies`;
        betterMinesCountP.textContent = betterMinesCount;
        loadCoockiesAndGold();
        checkPrices();
    };
});

doubleCoockiesBtn.addEventListener('click', () => {
    if(goldCount >= doubleCoockiesPrice){
        goldCount -= doubleCoockiesPrice;
        coockiesToAdd *= 2;
        doubleCoockiesCount += 1;
        doubleCoockiesPrice = Math.floor(doubleCoockiesPrice + doubleCoockiesPrice * 0.5);
        doubleCoockiesPriceP.textContent = `${doubleCoockiesPrice.toLocaleString('de-DE')}$`;
        doubleCoockiesCountP.textContent = doubleCoockiesCount;
        loadCoockiesAndGold();
        checkPrices();
    };
});

// localStorage.clear();