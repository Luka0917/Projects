const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', () => window.open('/My_projects/Sport_clothing_shop/index.html', '_self'));

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