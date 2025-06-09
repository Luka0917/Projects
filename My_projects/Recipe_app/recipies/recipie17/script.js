import apiData from "../../data.js";
const data = await apiData();

document.querySelector('title').textContent = `${data[16].name}`;
document.body.innerHTML = `
    <div class="main">
        <img src=${data[16].image} alt=${data[16].name}>
        <div class="info">
            <p class="name">${data[16].name}</p>
            <p class="cuisine"><b>Cuisine:</b> ${data[16].cuisine}</p>
            <p class="difficulty"><b>Difficulty:</b> ${data[16].difficulty}</p>
            <p class="meal-type"><b>Meal Type:</b> ${data[16].mealType}</p>
            <p class="calories"><b>Calories Per Serving:</b> ${data[16].caloriesPerServing}</p>
            <p class="cook-time"><b>Coock Time:</b> ${data[16].cookTimeMinutes}min</p>
            <div class="ingredients-instructions">
                <div class="ingredients">
                    <p class="ingredients-p">Ingredients</p>
                    <ul>
                        ${data[16].ingredients.map(el => `<li>${el}</li>`)}
                    </ul>
                </div>
                <div class="instructions">
                    <p class="instructions-p">Instructions</p>
                    <ol>
                        ${data[16].instructions.map(el => `<li>${el}</li>`)}
                    </ol>
                </div>
            </div>
        </div>
    </div>
`;