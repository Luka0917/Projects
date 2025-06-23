import apiData from "./data.js";

const data = await apiData();
const main = document.getElementById('main');
const form = document.querySelector('form');

for(let i = 0; i < data.length; i++){
    const productDiv = document.createElement('div');
    productDiv.className = 'product-divs';
    productDiv.innerHTML = `
        <div class="img-name">
            <img src="${data[i].image}" class="product-img">
            <p class="product-name">${data[i].name}</p>
        </div>
        <div class="product-info">
            <p class="product-cuisine"><b>Cuisine:</b> ${data[i].cuisine}</p>
            <p class="product-difficulty"><b>Difficulty:</b> ${data[i].difficulty}</p>
            <p class="product-meal-type"><b>Meal Type:</b> ${data[i].mealType}</b></p>
            <p class="product-rating"><b>Rating:</b> ${data[i].rating}</p>
            <p class="product-calories"><b>Calories:</b> ${data[i].caloriesPerServing}</p>
            <button class="product-recepie-btn">Recepie</button>
        </div>
    `;
    main.appendChild(productDiv);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mealTypeForm = form.mealType.value.toLowerCase();
    const difficultyForm = form.difficulty.value.toLowerCase();
    const ratingForm = form.rating.value;
    const caloriesForm = form.calories.value;
    const productDivs = document.querySelectorAll('.product-divs');
    productDivs.forEach(div => {
        const mealTypeText = div.querySelector('.product-meal-type').textContent.split(':')[1].toLowerCase();
        const difficultyText = div.querySelector('.product-difficulty').textContent.split(':')[1].toLowerCase();
        const ratingText = div.querySelector('.product-rating').textContent.split(':')[1];
        const caloriesText = div.querySelector('.product-calories').textContent.split(':')[1];

        let hasMealType = false;
        let hasDifficulty = false;
        let hasRating = false;
        let hasCalories = false;

        if(mealTypeForm === 'any' || mealTypeText.includes(mealTypeForm)){
            hasMealType = true;
        };
        if(difficultyForm === 'any' || difficultyText.includes(difficultyForm)){
            hasDifficulty = true;
        };
        if(ratingForm === 'any' || ratingText.includes(ratingForm)){
            hasRating = true;
        };
        if(caloriesForm === 'any' || caloriesText.includes(caloriesForm)){
            hasCalories = true;
        };

        if(hasMealType && hasDifficulty && hasRating && hasCalories){
            div.style.display = 'flex';
        }else{
            div.style.display = 'none';
        };
    });
});

const recepieBtn = document.getElementsByClassName('product-recepie-btn');
for(let i = 0; i < recepieBtn.length; i++){
    recepieBtn[i].addEventListener('click', () => window.open(`/My_projects/Recipe_app/recipies/recipie${i+1}/index.html`, '_self'))
}