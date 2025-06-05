const main = document.getElementById('main');
const form = document.querySelector('form');

async function func(){
    let fetchedData = await fetch('https://dummyjson.com/recipes');
    if(!fetchedData.ok){
        throw new Error('Error!');
    };
    let data = await fetchedData.json();
    console.log(data.recipes);
    for(let i = 0; i < data.recipes.length; i++){
        const productDiv = document.createElement('div');
        productDiv.className = 'product-divs';
        productDiv.innerHTML = `
            <div class="img-name">
                <img src="${data.recipes[i].image}" class="product-img">
                <p class="product-name">${data.recipes[i].name}</p>
            </div>
            <div class="product-info">
                <p class="product-cuisine"><b>Cuisine:</b> ${data.recipes[i].cuisine}</p>
                <p class="product-difficulty"><b>Difficulty:</b> ${data.recipes[i].difficulty}</p>
                <p class="product-meal-type"><b>Meal Type:</b> ${data.recipes[i].mealType}</b></p>
                <p class="product-rating"><b>Rating:</b> ${data.recipes[i].rating}</p>
                <p class="product-calories"><b>Calories:</b> ${data.recipes[i].caloriesPerServing}</p>
                <button class="product-recepie-btn">Recepie</button>
            </div>
        `;
        main.appendChild(productDiv);
    };
};
func();

form.addEventListener('submit', e => {
    e.preventDefault();
    const mealTypeForm = form.mealType.value;
    const difficultyForm = form.difficulty.value;
    const ratingForm = form.rating.value;
    const caloriesForm = form.calories.value;
    const productDiv1 = document.getElementsByClassName('product-divs');
    for(let i = 0; i < productDiv1.length; i++){
        const mealType1 = document.getElementsByClassName('product-meal-type')[i].textContent;
        const difficulty1 = document.getElementsByClassName('product-difficulty')[i].textContent;
        const rating1 = document.getElementsByClassName('product-rating')[i].textContent;
        const calories1 = document.getElementsByClassName('product-calories')[i].textContent;

        if(
            mealType1 === `Meal Type: ${mealTypeForm}` && difficulty1 === `Difficulty: ${difficultyForm}` || rating1 === `Rating: ${ratingForm}` || calories1 === `Calories: ${caloriesForm}`
        ){
            productDiv1[i].style.display = 'flex';
        }else{
            productDiv1[i].style.display = 'none';
        };
    };
});