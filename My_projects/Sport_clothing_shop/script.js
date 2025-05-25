const optionsDivs = document.getElementsByClassName('options-divs');
const bgColor = document.getElementsByClassName('bg-color');
const optionsP = document.getElementsByClassName('options-p');
const discover = document.getElementsByClassName('discover');
// Buttons
const shopNowBtn = document.getElementById('shop-now-btn');
const seeAllBtn = document.getElementById('product-btn');
const seeOnMapsBtn = document.getElementById('new-shop-btn');

// Footer form/function
const emailSentP = document.getElementById('email-sent');
const footerForm = document.querySelector('footer form');
footerForm.addEventListener('submit', e => {
    e.preventDefault(); 
    emailSentP.style.opacity = '1';
    footerForm.email.value = '';
    setTimeout(() => {emailSentP.style.opacity = '0'}, 5000);
});

shopNowBtn.addEventListener('click', () => window.open('./products/index.html', '_self'));
seeAllBtn.addEventListener('click', () => window.open('./products/index.html', '_self'));
seeOnMapsBtn.addEventListener('click', () => window.open('https://www.google.com/maps/place/Tokyo,+Japan/data=!4m2!3m1!1s0x605d1b87f02e57e7:0x2e01618b22571b89?sa=X&ved=1t:242&ictx=111&cshid=1747852921263667', '_self'));

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

// Heart bg function
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

// Counter function
let total = 0;
const cartP = document.getElementById('cart-p');
function updateTotal(totalCount){
    total += totalCount;
    cartP.textContent = `Cart(${total})`;
};
function setupButton(button){
    button.addEventListener('click', () => {
        const counter = document.createElement('div');
        counter.className = 'counter';

        const minus = document.createElement('button');
        minus.textContent = '-';
        minus.className = 'minus';

        const number = document.createElement('span');
        let count = 1;
        number.textContent = count;

        const plus = document.createElement('button');
        plus.textContent = '+';
        plus.className = 'plus';

        updateTotal(1);

        const newButton = button.cloneNode(true);
        setupButton(newButton);

        minus.addEventListener('click', () => {
            count--;
            if(count <= 0){
                updateTotal(-1);
                counter.replaceWith(newButton);
            }else{
                number.textContent = count;
                updateTotal(-1);
            };
        });

        plus.addEventListener('click', () => {
            count++;
            number.textContent = count;
            updateTotal(1);
        });

        counter.appendChild(minus);
        counter.appendChild(number);
        counter.appendChild(plus);

        button.replaceWith(counter);
    });
};
document.querySelectorAll('.product-cart').forEach(setupButton);