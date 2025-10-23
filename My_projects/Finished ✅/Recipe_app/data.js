export default async function apiData(){
    try{
        let fetchedData = await fetch('https://dummyjson.com/recipes');
        if(!fetchedData.ok){
            throw new Error('Error!');
        };
        let data = await fetchedData.json();
        return data.recipes
    }catch(err){
        console.error(err);
    };
};