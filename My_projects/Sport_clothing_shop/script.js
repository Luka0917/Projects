const optionsDivs = document.getElementsByClassName('options-divs');
const bgColor = document.getElementsByClassName('bg-color');
const optionsP = document.getElementsByClassName('options-p');
const discover = document.getElementsByClassName('discover')

for(let i = 0; i < optionsDivs.length; i++){
    optionsDivs[i].addEventListener('mouseover', () => {
        bgColor[i].style.background = 'rgba(0, 0, 0, 0.1)';
        optionsP[i].style.marginBottom = '120px';
        discover[i].style.opacity = '1';
    });
    optionsDivs[i].addEventListener('mouseleave', () => {
        bgColor[i].style.background = 'rgba(0, 0, 0, 0.3)';
        optionsP[i].style.marginBottom = '0';
        discover[i].style.opacity = '0';
    });
};

let solid = '<i class="fa-solid fa-heart"></i>';
let regular = '<i class="fa-regular fa-heart"></i>';
const heart = document.getElementsByClassName('heart');
for(let x = 0; x < heart.length; x++){
    heart[x].addEventListener('click', () => {
        if(heart[x].innerHTML === regular){
            heart[x].innerHTML = solid;
            heart[x].style.color = '#fe0102';
        }else{
            heart[x].innerHTML = regular;
            heart[x].style.color = '#000';
        };
    });
    heart[x].addEventListener('mouseenter', () => {
        if(heart[x].innerHTML !== solid) {
            heart[x].style.color = '#fe0102';
        };
    });
    heart[x].addEventListener('mouseleave', () => {
        if(heart[x].innerHTML !== solid) {
            heart[x].style.color = '#000';
        };
    });
};

const cartP = document.getElementById('cart-p');
const productCart = document.getElementsByClassName('product-cart');
let products = 0;

for(let j = 0; j < productCart.length; j++){
    productCart[j].addEventListener('click', () => {
        products++;
        cartP.textContent = `Cart(${products})`;
    });
};