const cookieBtn = document.getElementById('cookie-btn');
const shopDiv = document.getElementById('shop');
const cartBtn = document.getElementById('cart');
const xBtn = document.getElementById('x');

const cookiesPerSecondP = document.getElementById('per-second-p-1');
const goldPerSecondP = document.getElementById('per-second-p-2');
const cookiesP = document.getElementById('cookies-p');
const goldP = document.getElementById('gold-p');

const biggerFingerBtn = document.getElementById('bigger-finger-btn');
const biggerFingerPriceP = document.getElementById('bigger-finger-price');
const biggerFingerCountP = document.getElementById('bigger-finger-count');

const betterMinesBtn = document.getElementById('better-mines-btn');
const betterMinesPriceP = document.getElementById('better-mines-price');
const betterMinesCountP = document.getElementById('better-mines-count');

const doubleCookiesBtn = document.getElementById('double-cookies-btn');
const doubleCookiesPriceP = document.getElementById('double-cookies-price');
const doubleCookiesCountP = document.getElementById('double-cookies-count');

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

const cookieGeneratorBtn = document.getElementById('cookie-generator-btn');
const cookieGeneratorPriceP = document.getElementById('cookie-generator-price');
const cookieGeneratorCountP = document.getElementById('cookie-generator-count');

const goldGeneratorBtn = document.getElementById('gold-generator-btn');
const goldGeneratorPriceP = document.getElementById('gold-generator-price');
const goldGeneratorCountP = document.getElementById('gold-generator-count');

const buyBtn = document.getElementById('buy');
const sellBtn = document.getElementById('sell');

const form = document.querySelector('form');
const errorP = document.getElementById('error-p');

const restartBtn = document.getElementById('restart-btn');

const widthP = document.getElementById('width-p');
const heightP = document.getElementById('height-p');
widthP.textContent = `Width: ${window.innerWidth}`;
heightP.textContent = `Height: ${window.innerHeight}`;

restartBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

cartBtn.addEventListener('click', () => {
    let count = 0;
    let interval = setInterval(() => {
        count += 5;
        shopDiv.style.transform = `translateX(${count}px)`;
        if((window.innerWidth === 1866 || count >= 525) || ((window.innerWidth >= 320 && window.innerWidth <= 375) && count >= 300) || ((window.innerWidth >= 400 && window.innerWidth <= 500) && count >= 350)){
            clearInterval(interval);
        };
    }, 1);
});
xBtn.addEventListener('click', () => {
    let count;
    if(window.innerWidth >= 320 && window.innerWidth <= 375){
        count = 300;
    }else if(window.innerWidth >= 400 && window.innerWidth <= 500){
        count = 350;
    }else{
        count = 525;
    };
    let interval = setInterval(() => {
        count -= 5;
        shopDiv.style.transform = `translateX(${count}px)`
        if(count <= 0){
            clearInterval(interval);
        };
    }, 1);
});

let cookieCount = 0;
let goldCount = 0;

let cookiesToAdd = 1;
let goldToAdd = 1;

let biggerFingerPrice = 50;
let biggerFingerCount = 0;

let betterMinesPrice = 100;
let betterMinesCount = 0;

let doubleCookiesPrice = 100000;
let doubleCookiesCount = 0;

let bakerPrice = 500;
let bakerCount = 0;

let stevePrice = 500;
let steveCount = 0;

let factoryPrice = 100000;
let factoryCount = 0;

let grandmaPrice = 3000;
let grandmaCount = 0;

let goldenGlovesPrice = 10000;
let goldenGlovesCount = 0;

let cookieGeneratorPrice = 1000;
let cookieGeneratorCount = 0;

let goldGeneratorPrice = 2000;
let goldGeneratorCount = 0;

let cookiesToAddPerSecond = 0;
let goldToAddPerSecond = 0;

let buy = true;
let sell = false;

function checkPrices(){
    if(buy){
        if(goldCount >= biggerFingerPrice){biggerFingerBtn.disabled = false; biggerFingerBtn.style.border = '5px solid #9BEC00'}else{biggerFingerBtn.disabled = true; biggerFingerBtn.style.border = '5px solid #FF0000'};
        if(cookieCount >= betterMinesPrice){betterMinesBtn.disabled = false; betterMinesBtn.style.border = '5px solid #9BEC00'}else{betterMinesBtn.disabled = true; betterMinesBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= doubleCookiesPrice){doubleCookiesBtn.disabled = false; doubleCookiesBtn.style.border = '5px solid #9BEC00'}else{doubleCookiesBtn.disabled = true; doubleCookiesBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= bakerPrice){bakerBtn.disabled = false; bakerBtn.style.border = '5px solid #9BEC00'}else{bakerBtn.disabled = true; bakerBtn.style.border = '5px solid #FF0000'};
        if(cookieCount >= stevePrice){steveBtn.disabled = false; steveBtn.style.border = '5px solid #9BEC00'}else{steveBtn.disabled = true; steveBtn.style.border = '5px solid #FF0000'};
        if(cookieCount >= factoryPrice){factoryBtn.disabled = false; factoryBtn.style.border = '5px solid #9BEC00'}else{factoryBtn.disabled = true; factoryBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= grandmaPrice){grandmaBtn.disabled = false; grandmaBtn.style.border = '5px solid #9BEC00'}else{grandmaBtn.disabled = true; grandmaBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= goldenGlovesPrice){goldenGlovesBtn.disabled = false; goldenGlovesBtn.style.border = '5px solid #9BCE00'}else{goldenGlovesBtn.disabled = true; goldenGlovesBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= cookieGeneratorPrice){cookieGeneratorBtn.disabled = false; cookieGeneratorBtn.style.border = '5px solid #9BCE00'}else{cookieGeneratorBtn.disabled = true; cookieGeneratorBtn.style.border = '5px solid #FF0000'};
        if(goldCount >= goldGeneratorPrice){goldGeneratorBtn.disabled = false; goldGeneratorBtn.style.border = '5px solid #9BCE00'}else{goldGeneratorBtn.disabled = true; goldGeneratorBtn.style.border = '5px solid #FF0000'};
    };
    if(sell){
        if(biggerFingerCount > 0){biggerFingerBtn.disabled = false; biggerFingerBtn.style.border = '5px solid #9BEC00'}else{biggerFingerBtn.style.border = '5px solid #FF0000'; biggerFingerBtn.disabled = true};
        if(betterMinesCount > 0){betterMinesBtn.disabled = false; betterMinesBtn.style.border = '5px solid #9BCE00'}else{betterMinesBtn.disabled = true;betterMinesBtn.style.border = '5px solid #FF0000'};
        if(doubleCookiesCount > 0){doubleCookiesBtn.disabled = false; doubleCookiesBtn.style.border = '5px solid #9BEC00'}else{doubleCookiesBtn.disabled = true; doubleCookiesBtn.style.border = '5px solid #FF0000'};
        if(bakerCount > 0){bakerBtn.disabled = false; bakerBtn.style.border = '5px solid #9BEC00'}else{bakerBtn.disabled = true; bakerBtn.style.border = '5px solid #FF0000'};
        if(steveCount > 0){steveBtn.disabled = false; steveBtn.style.border = '5px solid #9BCE00'}else{steveBtn.disabled = true; steveBtn.style.border = '5px solid #FF0000'};
        if(factoryCount > 0){factoryBtn.disabled = false; factoryBtn.style.border = '5px solid #9BCE00'}else{factoryBtn.disabled = true; factoryBtn.style.border = '5px solid #FF0000'};
        if(grandmaCount > 0){grandmaBtn.disabled = false; grandmaBtn.style.border = '5px solid #9BCE00'}else{grandmaBtn.disabled = true; grandmaBtn.style.border = '5px solid #FF0000'};
        if(goldenGlovesCount > 0){goldenGlovesBtn.disabled = false; goldenGlovesBtn.style.border = '5px solid #9BCE00'}else{goldenGlovesBtn.disabled = true; goldenGlovesBtn.style.border = '5px solid #FF0000'};
        if(cookieGeneratorCount > 0){cookieGeneratorBtn.disabled = false; cookieGeneratorBtn.style.border = '5px solid #9BCE00'}else{cookieGeneratorBtn.disabled = true; cookieGeneratorBtn.style.border = '5px solid #FF0000'};
        if(goldGeneratorCount > 0){goldGeneratorBtn.disabled = false; goldGeneratorBtn.style.border = '5px solid #9BCE00'}else{goldGeneratorBtn.disabled = true; goldGeneratorBtn.style.border = '5px solid #FF0000'};
    };
};

window.addEventListener('load', () => {
    if(localStorage.getItem('data')){
        const loadData = JSON.parse(localStorage.getItem('data'));
        cookiesToAddPerSecond = loadData.cookiesToAddPerSecond;
        goldToAddPerSecond = loadData.goldToAddPerSecond;
        cookieCount = loadData.cookieCount;
        goldCount = loadData.goldCount;
        cookiesToAdd = loadData.cookiesToAdd;
        goldToAdd = loadData.goldToAdd;
        biggerFingerPrice = loadData.biggerFinger.price;
        biggerFingerCount = loadData.biggerFinger.count;
        betterMinesPrice = loadData.betterMines.price;
        betterMinesCount = loadData.betterMines.count;
        doubleCookiesPrice = loadData.doubleCookies.price;
        doubleCookiesCount = loadData.doubleCookies.count;
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
        cookieGeneratorPrice = loadData.cookieGenerator.price;
        cookieGeneratorCount = loadData.cookieGenerator.count;
        goldGeneratorPrice = loadData.goldGenerator.price;
        goldGeneratorCount = loadData.goldGenerator.count;
        loadEverything();
    };
    checkPrices();
});

function loadEverything(){
    cookiesPerSecondP.textContent = `🍪Per Second: ${cookiesToAddPerSecond.toLocaleString('de-DE')}`;
    goldPerSecondP.textContent = `🪙Per Second: ${goldToAddPerSecond.toLocaleString('de-DE')}`;
    cookiesP.textContent = `Cookies: ${cookieCount.toLocaleString('de-DE')} +${cookiesToAdd.toLocaleString('de-DE')}`;
    goldP.textContent = `Gold: ${goldCount.toLocaleString('de-DE')} +${goldToAdd.toLocaleString('de-DE')}`;
    biggerFingerPriceP.textContent = `${biggerFingerPrice.toLocaleString('de-DE')}$`;
    biggerFingerCountP.textContent = biggerFingerCount;
    betterMinesPriceP.textContent = `${betterMinesPrice.toLocaleString('de-DE')} Cookies`;
    betterMinesCountP.textContent = betterMinesCount;
    doubleCookiesPriceP.textContent = `${doubleCookiesPrice.toLocaleString('de-DE')}$`;
    doubleCookiesCountP.textContent = doubleCookiesCount;
    bakerPriceP.textContent = `${bakerPrice.toLocaleString('de-DE')}$`;
    bakerCountP.textContent = bakerCount;
    stevePriceP.textContent = `${stevePrice.toLocaleString('de-DE')} Cookies`;
    steveCountP.textContent = steveCount;
    factoryPriceP.textContent = `${factoryPrice.toLocaleString('de-DE')} Cookies`;
    factoryCountP.textContent = factoryCount;
    grandmaPriceP.textContent = `${grandmaPrice.toLocaleString('de-DE')}$`;
    grandmaCountP.textContent = grandmaCount;
    goldenGlovesPriceP.textContent = `${goldenGlovesPrice.toLocaleString('de-DE')}$`;
    goldenGlovesCountP.textContent = goldenGlovesCount;
    cookieGeneratorPriceP.textContent = `${cookieGeneratorPrice.toLocaleString('de-DE')}$`;
    cookieGeneratorCountP.textContent = cookieGeneratorCount;
    goldGeneratorPriceP.textContent = `${goldGeneratorPrice.toLocaleString('de-DE')}$`;
    goldGeneratorCountP.textContent = goldGeneratorCount;
};
loadEverything();

function saveDataToLocalStorage(){
    const data = {
        cookiesToAddPerSecond: cookiesToAddPerSecond,
        goldToAddPerSecond: goldToAddPerSecond,
        cookieCount: cookieCount,
        goldCount: goldCount,
        cookiesToAdd: cookiesToAdd,
        goldToAdd: goldToAdd,
        biggerFinger: {
            price: biggerFingerPrice,
            count: biggerFingerCount
        },
        betterMines: {
            price: betterMinesPrice,
            count: betterMinesCount
        },
        doubleCookies: {
            price: doubleCookiesPrice,
            count: doubleCookiesCount
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
        cookieGenerator: {
            price: cookieGeneratorPrice,
            count: cookieGeneratorCount
        },
        goldGenerator: {
            price: goldGeneratorPrice,
            count: goldGeneratorCount
        }
    };
    localStorage.setItem('data', JSON.stringify(data));
};

cookieBtn.addEventListener('click', () => {
    cookieCount += cookiesToAdd;
    goldCount += goldToAdd;
    saveDataToLocalStorage();
    loadEverything();
    checkPrices();
});

setInterval(() => {
    cookieCount += cookiesToAddPerSecond;
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
        cookiesToAdd += 1;
        biggerFingerCount += 1;
        biggerFingerPrice = Math.floor(biggerFingerPrice * 1.3);
    };
    if(sell && biggerFingerCount > 0){
        goldCount += Math.floor(biggerFingerPrice / 1.3 * 0.7);
        cookiesToAdd -= 1;
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
    if(buy && cookieCount >= betterMinesPrice){
        cookieCount -= betterMinesPrice;
        goldToAdd += 1;
        betterMinesCount += 1;
        betterMinesPrice = Math.floor(betterMinesPrice * 1.3);
    };
    if(sell && betterMinesCount > 0){
        cookieCount += Math.floor(betterMinesPrice / 1.3 * 0.7);
        goldToAdd -= 1;
        betterMinesCount -= 1;
        betterMinesPrice = Math.round(betterMinesPrice / 1.3);
    };
    betterMinesPriceP.textContent = `${betterMinesPrice.toLocaleString('de-DE')} Cookies`;
    betterMinesCountP.textContent = betterMinesCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

doubleCookiesBtn.addEventListener('click', () => {
    if(buy && goldCount >= doubleCookiesPrice){
        goldCount -= doubleCookiesPrice;
        cookiesToAdd *= 2;
        doubleCookiesCount += 1;
        doubleCookiesPrice = Math.floor(doubleCookiesPrice * 2);
    };
    if(sell && doubleCookiesCount > 0){
        goldCount += Math.floor(doubleCookiesPrice / 1.5 * 0.7);
        cookiesToAdd /= 2;
        doubleCookiesCount -= 1;
        doubleCookiesPrice = Math.round(doubleCookiesPrice / 2);
    };
    doubleCookiesPriceP.textContent = `${doubleCookiesPrice.toLocaleString('de-DE')}$`;
    doubleCookiesCountP.textContent = doubleCookiesCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

bakerBtn.addEventListener('click', () => {
    if(buy && goldCount >= bakerPrice){
        goldCount -= bakerPrice;
        cookiesToAdd += 10;
        bakerCount += 1;
        bakerPrice = Math.floor(bakerPrice * 1.3);
    };
    if(sell && bakerCount > 0){
        goldCount += Math.floor(bakerPrice / 1.3 * 0.7);
        cookiesToAdd -= 10;
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
    if(buy && cookieCount >= stevePrice){
        cookieCount -= stevePrice;
        goldToAdd += 10;
        steveCount += 1;
        stevePrice = Math.floor(stevePrice * 1.3);
    };
    if(sell && steveCount > 0){
        cookieCount += Math.floor(stevePrice / 1.3 * 0.7);
        goldToAdd -= 10;
        steveCount -= 1;
        stevePrice = Math.round(stevePrice / 1.3);
    };
    stevePriceP.textContent = `${stevePrice.toLocaleString('de-DE')} Cookies`;
    steveCountP.textContent = steveCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

factoryBtn.addEventListener('click', () => {
    if(buy && cookieCount >= factoryPrice){
        cookieCount -= factoryPrice;
        cookiesToAddPerSecond += 100;
        factoryCount += 1;
        factoryPrice = Math.floor(factoryPrice * 1.3);
    };
    if(sell && factoryCount > 0){
        cookieCount += Math.floor(factoryPrice / 1.3 * 0.7);
        cookiesToAddPerSecond -= 100
        factoryCount -= 1;
        factoryPrice = Math.round(factoryPrice / 1.3);
    };
    factoryPriceP.textContent = `${factoryPrice.toLocaleString('de-DE')} Cookies`;
    factoryCountP.textContent = factoryCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

grandmaBtn.addEventListener('click', () => {
    if(buy && goldCount >= grandmaPrice){
        goldCount -= grandmaPrice;
        cookiesToAdd += 2;
        goldToAdd += 1;
        grandmaCount += 1;
        grandmaPrice = Math.floor(grandmaPrice * 1.3);
    };
    if(sell && grandmaCount > 0){
        goldCount += Math.floor(grandmaPrice / 1.3 * 0.7);
        cookiesToAdd -= 2;
        goldToAdd -= 1;
        grandmaCount -= 1;
        grandmaPrice = Math.round(grandmaPrice / 1.3)
    };
    grandmaPriceP.textContent = `${grandmaPrice.toLocaleString('de-DE')} Cookies`;
    grandmaCountP.textContent = grandmaCount;
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

goldenGlovesBtn.addEventListener('click', () => {
    if(buy && goldCount >= goldenGlovesPrice){
        goldCount -= goldenGlovesPrice;
        cookiesToAdd += 5;
        goldToAdd += 5;
        goldenGlovesCount += 1;
        goldenGlovesPrice = Math.floor(goldenGlovesPrice * 1.3);
    };
    if(sell && goldenGlovesCount > 0){
        goldCount += Math.floor(goldenGlovesPrice / 1.3 * 0.7);
        cookiesToAdd -= 5;
        goldToAdd -= 5;
        goldenGlovesCount -= 1;
        goldenGlovesPrice = Math.round(goldenGlovesPrice / 1.3);
    };
    loadEverything();
    checkPrices();
    saveDataToLocalStorage();
});

cookieGeneratorBtn.addEventListener('click', () => {
    if(buy && goldCount >= cookieGeneratorPrice){
        goldCount -= cookieGeneratorPrice;
        cookiesToAddPerSecond += 1;
        cookieGeneratorCount += 1;
        cookieGeneratorPrice = Math.floor(cookieGeneratorPrice * 1.3);
    };
    if(sell && cookieGeneratorCount > 0){
        goldCount += Math.floor(cookieGeneratorPrice / 1.3 * 0.7);
        cookiesToAddPerSecond -= 1;
        cookieGeneratorCount -= 1;
        cookieGeneratorPrice = Math.round(cookieGeneratorPrice / 1.3);
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
    const inputField = form.cookiesIntoGold;
    const input = parseInt(inputField.value);
    if(input <= cookieCount){
        const lastChar = input.toString().slice(-1);
        let leftover = 0;
        if(lastChar === '0' || lastChar === '5'){
            cookieCount -= input;
            goldCount += input / 10;
        }else{
            leftover = input % 10;
            cookieCount -= input - leftover;
            goldCount += (input - leftover) / 10;
        };
        inputField.value = leftover > 0 ? leftover : '';
        errorP.textContent = '';
    }else{
        errorP.textContent = 'Please enter correct amount of Cookies';
    }
    loadEverything();
    saveDataToLocalStorage();
});