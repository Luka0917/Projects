async function func(){
    let fetchedData = await fetch('https://dummyjson.com/recipes');
    if(!fetchedData.ok){
        throw new Error('Error!');
    };
    let data = await fetchedData.json();
    console.log(data.recipes);
    for(let i = 0; i < data.recipes.length; i++){
        // console.log(data.recipes[i].difficulty);
        // console.log(data.recipes[i].rating);
        // console.log(data.recipes[i].caloriesPerServing);
    }
};
func();