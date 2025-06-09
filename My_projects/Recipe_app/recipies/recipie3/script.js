import apiData from "../../data.js";
const data = await apiData();

console.log(data[2]);
document.querySelector('title').textContent = `${data[2].name}`;
document.body.innerHTML = `
    <div class="main">
        <img src=${data[2].image} alt=${data[2].name}>
        <div class="info">
            <p class="name">${data[2].name}</p>
            <p class="cuisine"><b>Cuisine:</b> ${data[2].cuisine}</p>
            <p class="difficulty"><b>Difficulty:</b> ${data[2].difficulty}</p>
            <p class="meal-type"><b>Meal Type:</b> ${data[2].mealType}</p>
            <p class="calories"><b>Calories Per Serving:</b> ${data[2].caloriesPerServing}</p>
            <p class="cook-time"><b>Coock Time:</b> ${data[2].cookTimeMinutes}min</p>
            <div class="ingredients-instructions">
                <div class="ingredients">
                    <p class="ingredients-p">Ingredients</p>
                    <ul>
                        ${data[2].ingredients.map(el => `<li>${el}</li>`)}
                    </ul>
                </div>
                <div class="instructions">
                    <p class="instructions-p">Instructions</p>
                    <ol>
                        ${data[2].instructions.map(el => `<li>${el}</li>`)}
                    </ol>
                </div>
            </div>
        </div>
    </div>
`;