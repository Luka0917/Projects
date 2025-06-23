const coockieBtn = document.getElementById('coockie-btn');
const shopDiv = document.getElementById('shop');
const cartBtn = document.getElementById('cart');
const xBtn = document.getElementById('x');

const coockiesPerSecondP = document.getElementById('per-second-p-1');
const goldPerSecondP = document.getElementById('per-second-p-2');
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

const factoryBtn = document.getElementById('factory-btn');
const factoryPriceP = document.getElementById('factory-price');
const factoryCountP = document.getElementById('factory-count');

const grandmaBtn = document.getElementById('grandma-btn');
const grandmaPriceP = document.getElementById('grandma-price');
const grandmaCountP = document.getElementById('grandma-count');

const goldenGlovesBtn = document.getElementById('golden-gloves-btn');
const goldenGlovesPriceP = document.getElementById('golden-gloves-price');
const goldenGlovesCountP = document.getElementById('golden-gloves-count');

const coockieGeneratorBtn = document.getElementById('coockie-generator-btn');
const coockieGeneratorPriceP = document.getElementById('coockie-generator-price');
const coockieGeneratorCountP = document.getElementById('coockie-generator-count');

const goldGeneratorBtn = document.getElementById('gold-generator-btn');
const goldGeneratorPriceP = document.getElementById('gold-generator-price');
const goldGeneratorCountP = document.getElementById('gold-generator-count');

const buyBtn = document.getElementById('buy');
const sellBtn = document.getElementById('sell');

const form = document.querySelector('form');

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
        if(count >= 525){
            clearInterval(interval);
        };
    }, 1);
});
xBtn.addEventListener('click', () => {
    let count = 525;
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

let factoryPrice = 15000;
let factoryCount = 0;

let grandmaPrice = 3000;
let grandmaCount = 0;

let goldenGlovesPrice = 10000;
let goldenGlovesCount = 0;

let coockieGeneratorPrice = 1000;
let coockieGeneratorCount = 0;

let goldGeneratorPrice = 2000;
let goldGeneratorCount = 0;

let coockiesToAddPerSecond = 0;
let goldToAddPerSecond = 0;

let buy = true;
let sell = false;

function checkPrices(){
    if(buy){
        if(goldCount >= biggerFingerPrice){biggerFingerBtn.disabled = false; biggerFingerBtn.style.border = '5px solid #9BEC00'}else{biggerFingerBtn.disabled = true; biggerFingerBtn.style.border = '5px solid #FF0000'};
        if(coockieCount >= betterMinesPrice){betterMinesBtn.disabled = false; betterMinesBtn.style.border = '5px solid #9BEC00'}else{betterMinesBtn.disabled = true; betterMinesBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= doubleCoockiesPrice){doubleCoockiesBtn.disabled = false; doubleCoockiesBtn.style.border = '5px solid #9BEC00'}else{doubleCoockiesBtn.disabled = true; doubleCoockiesBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= bakerPrice){bakerBtn.disabled = false; bakerBtn.style.border = '5px solid #9BEC00'}else{bakerBtn.disabled = true; bakerBtn.style.border = '5px solid #FF0000'};
        if(coockieCount >= stevePrice){steveBtn.disabled = false; steveBtn.style.border = '5px solid #9BEC00'}else{steveBtn.disabled = true; steveBtn.style.border = '5px solid #FF0000'};
        if(coockieCount >= factoryPrice){factoryBtn.disabled = false; factoryBtn.style.border = '5px solid #9BEC00'}else{factoryBtn.disabled = true; factoryBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= grandmaPrice){grandmaBtn.disabled = false; grandmaBtn.style.border = '5px solid #9BEC00'}else{grandmaBtn.disabled = true; grandmaBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= goldenGlovesPrice){goldenGlovesBtn.disabled = false; goldenGlovesBtn.style.border = '5px solid #9BCE00'}else{goldenGlovesBtn.disabled = true; goldenGlovesBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= coockieGeneratorPrice){coockieGeneratorBtn.disabled = false; coockieGeneratorBtn.style.border = '5px solid #9BCE00'}else{coockieGeneratorBtn.disabled = true; coockieGeneratorBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= goldGeneratorPrice){goldGeneratorBtn.disabled = false; goldGeneratorBtn.style.border = '5px solid #9BCE00'}else{goldGeneratorBtn.disabled = true; goldGeneratorBtn.style.border = '5px solid #FF0000'};
    };
    if(sell){
        if(biggerFingerCount > 0){biggerFingerBtn.disabled = false; biggerFingerBtn.style.border = '5px solid #9BEC00'}else{biggerFingerBtn.style.border = '5px solid #FF0000'; biggerFingerBtn.disabled = true};
        if(betterMinesCount > 0){betterMinesBtn.disabled = false; betterMinesBtn.style.border = '5px solid #9BCE00'}else{betterMinesBtn.disabled = true;betterMinesBtn.style.border = '5px solid #FF0000'};
        if(doubleCoockiesCount > 0){doubleCoockiesBtn.disabled = false; doubleCoockiesBtn.style.border = '5px solid #9BEC00'}else{doubleCoockiesBtn.disabled = true; doubleCoockiesBtn.style.border = '5px solid #FF0000'};
        if(bakerCount > 0){bakerBtn.disabled = false; bakerBtn.style.border = '5px solid #9BEC00'}else{bakerBtn.disabled = true; bakerBtn.style.border = '5px solid #FF0000'};
        if(steveCount > 0){steveBtn.disabled = false; steveBtn.style.border = '5px solid #9BCE00'}else{steveBtn.disabled = true; steveBtn.style.border = '5px solid #FF0000'};
        if(factoryCount > 0){factoryBtn.disabled = false; factoryBtn.style.border = '5px solid #9BCE00'}else{factoryBtn.disabled = true; factoryBtn.style.border = '5px solid #FF0000'};
        if(grandmaCount > 0){grandmaBtn.disabled = false; grandmaBtn.style.border = '5px solid #9BCE00'}else{grandmaBtn.disabled = true; grandmaBtn.style.border = '5px solid #FF0000'};
        if(goldenGlovesCount > 0){goldenGlovesBtn.disabled = false; goldenGlovesBtn.style.border = '5px solid #9BCE00'}else{goldenGlovesBtn.disabled = true; goldenGlovesBtn.style.border = '5px solid #FF0000'};
        if(coockieGeneratorCount > 0){coockieGeneratorBtn.disabled = false; coockieGeneratorBtn.style.border = '5px solid #9BCE00'}else{coockieGeneratorBtn.disabled = true; coockieGeneratorBtn.style.border = '5px solid #FF0000'};
        if(goldGeneratorCount > 0){goldGeneratorBtn.disabled = false; goldGeneratorBtn.style.border = '5px solid #9BCE00'}else{goldGeneratorBtn.disabled = true; goldGeneratorBtn.style.border = '5px solid #FF0000'};
    };
};

window.addEventListener('load', () => {
    if(localStorage.getItem('data')){
        const loadData = JSON.parse(localStorage.getItem('data'));
        coockiesToAddPerSecond = loadData.coockiesToAddPerSecond;
        goldToAddPerSecond = loadData.goldToAddPerSecond;
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
        factoryPrice = loadData.factory.price;
        factoryCount = loadData.factory.count;
        grandmaPrice = loadData.grandma.price;
        grandmaCount = loadData.grandma.count;
        goldenGlovesPrice = loadData.goldenGloves.price;
        goldenGlovesCount = loadData.goldenGloves.count;
        coockieGeneratorPrice = loadData.coockieGenerator.price;
        coockieGeneratorCount = loadData.coockieGenerator.count;
        goldGeneratorPrice = loadData.goldGenerator.price;
        goldGeneratorCount = loadData.goldGenerator.count;
        loadEverything();
    };
    checkPrices();
});

function loadEverything(){
    coockiesPerSecondP.textContent = `🍪Per Second: ${coockiesToAddPerSecond.toLocaleString('de-DE')}`;
    goldPerSecondP.textContent = `🪙Per Second: ${goldToAddPerSecond.toLocaleString('de-DE')}`;
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
    factoryPriceP.textContent = `${factoryPrice.toLocaleString('de-DE')} Coockies`;
    factoryCountP.textContent = factoryCount;
    grandmaPriceP.textContent = `${grandmaPrice.toLocaleString('de-DE')}$`;
    grandmaCountP.textContent = grandmaCount;
    goldenGlovesPriceP.textContent = `${goldenGlovesPrice.toLocaleString('de-DE')}$`;
    goldenGlovesCountP.textContent = goldenGlovesCount;
    coockieGeneratorPriceP.textContent = `${coockieGeneratorPrice.toLocaleString('de-DE')}$`;
    coockieGeneratorCountP.textContent = coockieGeneratorCount;
    goldGeneratorPriceP.textContent = `${goldGeneratorPrice.toLocaleString('de-DE')}$`;
    goldGeneratorCountP.textContent = goldGeneratorCount;
};
loadEverything();

function saveDataToLocalStorage(){
    const data = {
        coockiesToAddPerSecond: coockiesToAddPerSecond,
        goldToAddPerSecond: goldToAddPerSecond,
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
        },
        factory: {
            price: factoryPrice,
            count: factoryCount
        },
        grandma: {
            price: grandmaPrice,
            count: grandmaCount
        },
        goldenGloves: {
            price: goldenGlovesPrice,
            count: goldenGlovesCount
        },
        coockieGenerator: {
            price: coockieGeneratorPrice,
            count: coockieGeneratorCount
        },
        goldGenerator: {
            price: goldGeneratorPrice,
            count: goldGeneratorCount
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

setInterval(() => {
    coockieCount += coockiesToAddPerSecond;
    loadEverything();
    saveDataToLocalStorage();
    checkPrices();
}, 1000);

setInterval(() => {
    goldCount += goldToAddPerSecond;
    loadEverything();
    saveDataToLocalStorage();
    checkPrices();
}, 1000);

biggerFingerBtn.addEventListener('click', () => {
    if(buy && goldCount >= biggerFingerPrice){
        goldCount -= biggerFingerPrice;
        coockiesToAdd += 1;
        biggerFingerCount += 1;
        biggerFingerPrice = Math.floor(biggerFingerPrice * 1.3);
    };
    if(sell && biggerFingerCount > 0){
        goldCount += Math.floor(biggerFingerPrice / 1.3 * 0.7);
        coockiesToAdd -= 1;
        biggerFingerCount -= 1;
        biggerFingerPrice = Math.round(biggerFingerPrice / 1.3);
    };
    biggerFingerPriceP.textContent = `${biggerFingerPrice.toLocaleString('de-DE')}$`;
    biggerFingerCountP.textContent = biggerFingerCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

betterMinesBtn.addEventListener('click', () => {
    if(buy && coockieCount >= betterMinesPrice){
        coockieCount -= betterMinesPrice;
        goldToAdd += 1;
        betterMinesCount += 1;
        betterMinesPrice = Math.floor(betterMinesPrice * 1.3);
    };
    if(sell && betterMinesCount > 0){
        coockieCount += Math.floor(betterMinesPrice / 1.3 * 0.7);
        goldToAdd -= 1;
        betterMinesCount -= 1;
        betterMinesPrice = Math.round(betterMinesPrice / 1.3);
    };
    betterMinesPriceP.textContent = `${betterMinesPrice.toLocaleString('de-DE')} Coockies`;
    betterMinesCountP.textContent = betterMinesCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

doubleCoockiesBtn.addEventListener('click', () => {
    if(buy && goldCount >= doubleCoockiesPrice){
        goldCount -= doubleCoockiesPrice;
        coockiesToAdd *= 2;
        doubleCoockiesCount += 1;
        doubleCoockiesPrice = Math.floor(doubleCoockiesPrice * 1.5);
    };
    if(sell && doubleCoockiesCount > 0){
        goldCount += Math.floor(doubleCoockiesPrice / 1.5 * 0.7);
        coockiesToAdd /= 2;
        doubleCoockiesCount -= 1;
        doubleCoockiesPrice = Math.round(doubleCoockiesPrice / 1.5);
    };
    doubleCoockiesPriceP.textContent = `${doubleCoockiesPrice.toLocaleString('de-DE')}$`;
    doubleCoockiesCountP.textContent = doubleCoockiesCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

bakerBtn.addEventListener('click', () => {
    if(buy && goldCount >= bakerPrice){
        goldCount -= bakerPrice;
        coockiesToAdd += 10;
        bakerCount += 1;
        bakerPrice = Math.floor(bakerPrice * 1.3);
    };
    if(sell && bakerCount > 0){
        goldCount += Math.floor(bakerPrice / 1.3 * 0.7);
        coockiesToAdd -= 10;
        bakerCount -= 1;
        bakerPrice = Math.round(bakerPrice / 1.3);
    };
    bakerPriceP.textContent = `${bakerPrice.toLocaleString('de-DE')}$`;
    bakerCountP.textContent = bakerCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

steveBtn.addEventListener('click', () => {
    if(buy && coockieCount >= stevePrice){
        coockieCount -= stevePrice;
        goldToAdd += 10;
        steveCount += 1;
        stevePrice = Math.floor(stevePrice * 1.3);
    };
    if(sell && steveCount > 0){
        coockieCount += Math.floor(stevePrice / 1.3 * 0.7);
        goldToAdd -= 10;
        steveCount -= 1;
        stevePrice = Math.round(stevePrice / 1.3);
    };
    stevePriceP.textContent = `${stevePrice.toLocaleString('de-DE')} Coockies`;
    steveCountP.textContent = steveCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

factoryBtn.addEventListener('click', () => {
    if(buy && coockieCount >= factoryPrice){
        coockieCount -= factoryPrice;
        coockiesToAddPerSecond += 100;
        factoryCount += 1;
        factoryPrice = Math.floor(factoryPrice * 1.3);
    };
    if(sell && factoryCount > 0){
        coockieCount += Math.floor(factoryPrice / 1.3 * 0.7);
        coockiesToAddPerSecond -= 100
        factoryCount -= 1;
        factoryPrice = Math.round(factoryPrice / 1.3);
    };
    factoryPriceP.textContent = `${factoryPrice.toLocaleString('de-DE')} Coockies`;
    factoryCountP.textContent = factoryCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

grandmaBtn.addEventListener('click', () => {
    if(buy && goldCount >= grandmaPrice){
        goldCount -= grandmaPrice;
        coockiesToAdd += 2;
        goldToAdd += 1;
        grandmaCount += 1;
        grandmaPrice = Math.floor(grandmaPrice * 1.3);
    };
    if(sell && grandmaCount > 0){
        goldCount += Math.floor(grandmaPrice / 1.3 * 0.7);
        coockiesToAdd -= 2;
        goldToAdd -= 1;
        grandmaCount -= 1;
        grandmaPrice = Math.round(grandmaPrice / 1.3)
    };
    grandmaPriceP.textContent = `${grandmaPrice.toLocaleString('de-DE')} Coockies`;
    grandmaCountP.textContent = grandmaCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

goldenGlovesBtn.addEventListener('click', () => {
    if(buy && goldCount >= goldenGlovesPrice){
        goldCount -= goldenGlovesPrice;
        coockiesToAdd += 5;
        goldToAdd += 5;
        goldenGlovesCount += 1;
        goldenGlovesPrice = Math.floor(goldenGlovesPrice * 1.3);
    };
    if(sell && goldenGlovesCount > 0){
        goldCount += Math.floor(goldenGlovesPrice / 1.3 * 0.7);
        coockiesToAdd -= 5;
        goldToAdd -= 5;
        goldenGlovesCount -= 1;
        goldenGlovesPrice = Math.round(goldenGlovesPrice / 1.3);
    };
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

coockieGeneratorBtn.addEventListener('click', () => {
    if(buy && goldCount >= coockieGeneratorPrice){
        goldCount -= coockieGeneratorPrice;
        coockiesToAddPerSecond += 1;
        coockieGeneratorCount += 1;
        coockieGeneratorPrice = Math.floor(coockieGeneratorPrice * 1.3);
    };
    if(sell && coockieGeneratorCount > 0){
        goldCount += Math.floor(coockieGeneratorPrice / 1.3 * 0.7);
        coockiesToAddPerSecond -= 1;
        coockieGeneratorCount -= 1;
        coockieGeneratorPrice = Math.round(coockieGeneratorPrice / 1.3);
    };
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

goldGeneratorBtn.addEventListener('click', () => {
    if(buy && goldCount >= goldGeneratorPrice){
        goldCount -= goldGeneratorPrice;
        goldToAddPerSecond += 1;
        goldGeneratorCount += 1;
        goldGeneratorPrice = Math.floor(goldGeneratorPrice * 1.3);
    };
    if(sell && goldGeneratorCount > 0){
        goldCount += Math.floor(goldGeneratorPrice / 1.3 * 0.7);
        goldToAddPerSecond -= 1;
        goldGeneratorCount -= 1;
        goldGeneratorPrice = Math.round(goldGeneratorPrice / 1.3);
    };
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

buyBtn.addEventListener('click', () => {
    buyBtn.style.backgroundColor = '#2888c4';
    sellBtn.style.backgroundColor = '#37658d';
    buy = true;
    sell = false;
    checkPrices();
});

sellBtn.addEventListener('click', () => {
    sellBtn.style.backgroundColor = '#2888c4';
    buyBtn.style.backgroundColor = '#37658d';
    buy = false;
    sell = true;
    checkPrices();
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputField = form.coockiesIntoGold;
    const input = parseInt(inputField.value);
    const lastChar = input.toString().slice(-1);
    let leftover = 0;
    if(lastChar === '0' || lastChar === '5'){
        coockieCount -= input;
        goldCount += input / 5;
    }else{
        leftover = input % 5;
        coockieCount -= input - leftover;
        goldCount += (input - leftover) / 5;
    };
    inputField.value = leftover > 0 ? leftover : '';
    loadEverything();
    saveDataToLocalStorage();
});