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

const bakerBtn = document.getElementById('baker-btn');
const bakerPriceP = document.getElementById('baker-price');
const bakerCountP = document.getElementById('baker-count');

const steveBtn = document.getElementById('steve-btn');
const stevePriceP = document.getElementById('steve-price');
const steveCountP = document.getElementById('steve-count');

const restartBtn = document.getElementById('restart-btn');

restartBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

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

let bakerPrice = 500;
let bakerCount = 0;

let stevePrice = 500;
let steveCount = 0;

biggerFingerBtn.disabled = true;
betterMinesBtn.disabled = true;
doubleCoockiesBtn.disabled = true;
bakerBtn.disabled = true;
steveBtn.disabled = true;

function checkPrices(){
    if(goldCount >= biggerFingerPrice){biggerFingerBtn.disabled = false; biggerFingerBtn.style.border = '5px solid #9BEC00'}else{biggerFingerBtn.disabled = true; biggerFingerBtn.style.border = '5px solid #FF0000'};
    if(coockieCount >= betterMinesPrice){betterMinesBtn.disabled = false; betterMinesBtn.style.border = '5px solid #9BEC00'}else{betterMinesBtn.disabled = true; betterMinesBtn.style.border = '5px solid #FF0000'};
    if(goldCount >= doubleCoockiesPrice){doubleCoockiesBtn.disabled = false; doubleCoockiesBtn.style.border = '5px solid #9BEC00'}else{doubleCoockiesBtn.disabled = true; doubleCoockiesBtn.style.border = '5px solid #FF0000'};
    if(goldCount >= bakerPrice){bakerBtn.disabled = false; bakerBtn.style.border = '5px solid #9BEC00'}else{bakerBtn.disabled = true; bakerBtn.style.border = '5px solid #FF0000'};
    if(coockieCount >= stevePrice){steveBtn.disabled = false; steveBtn.style.border = '5px solid #9BEC00'}else{steveBtn.disabled = true; steveBtn.style.border = '5px solid #FF0000'};
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
        bakerPrice = loadData.baker.price;
        bakerCount = loadData.baker.count;
        stevePrice = loadData.steve.price;
        steveCount = loadData.steve.count;
        loadEverything();
    };
    checkPrices();
});

function loadEverything(){
    coockiesP.textContent = `Coockies: ${coockieCount.toLocaleString('de-DE')} +${coockiesToAdd.toLocaleString('de-DE')}`;
    goldP.textContent = `Gold: ${goldCount.toLocaleString('de-DE')} +${goldToAdd.toLocaleString('de-DE')}`;
    biggerFingerPriceP.textContent = `${biggerFingerPrice.toLocaleString('de-DE')}$`;
    biggerFingerCountP.textContent = biggerFingerCount;
    betterMinesPriceP.textContent = `${betterMinesPrice.toLocaleString('de-DE')} Coockies`;
    betterMinesCountP.textContent = betterMinesCount;
    doubleCoockiesPriceP.textContent = `${doubleCoockiesPrice.toLocaleString('de-DE')}$`;
    doubleCoockiesCountP.textContent = doubleCoockiesCount;
    bakerPriceP.textContent = `${bakerPrice.toLocaleString('de-DE')}$`;
    bakerCountP.textContent = bakerCount;
    stevePriceP.textContent = `${stevePrice.toLocaleString('de-DE')} Coockies`;
    steveCountP.textContent = steveCount;
};
loadEverything();

function saveDataToLocalStorage(){
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
        },
        baker: {
            price: bakerPrice,
            count: bakerCount
        },
        steve: {
            price: stevePrice,
            count: steveCount
        }
    };
    localStorage.setItem('data', JSON.stringify(data));
};

coockieBtn.addEventListener('click', () => {
    coockieCount += coockiesToAdd;
    goldCount += goldToAdd;
    saveDataToLocalStorage();
    loadEverything();
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
        loadEverything();
        checkPrices();
        saveDataToLocalStorage();
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
        loadEverything();
        checkPrices();
        saveDataToLocalStorage();
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
        loadEverything();
        checkPrices();
        saveDataToLocalStorage();
    };
});

bakerBtn.addEventListener('click', () => {
    if(goldCount >= bakerPrice){
        goldCount -= bakerPrice;
        coockiesToAdd += 10;
        bakerCount += 1;
        bakerPrice = Math.floor(bakerPrice + bakerPrice * 0.3);
        bakerPriceP.textContent = `${bakerPrice.toLocaleString('de-DE')}$`;
        bakerCountP.textContent = bakerCount;
        loadEverything();
        checkPrices();
        saveDataToLocalStorage();
    };
});

steveBtn.addEventListener('click', () => {
    if(coockieCount >= stevePrice){
        coockieCount -= stevePrice;
        goldToAdd += 10;
        steveCount += 1;
        stevePrice = Math.floor(stevePrice + stevePrice * 0.3);
        steveCountP.textContent = `${stevePrice.toLocaleString('de-De')} Coockies`;
        steveCountP.textContent = steveCount;
        loadEverything();
        checkPrices();
        saveDataToLocalStorage();
    };
});