const API_URL = "http://localhost:5000"; 
// ⚠️ AFTER DEPLOYMENT CHANGE THIS TO YOUR BACKEND URL

// ================= GET RECIPES =================
async function getRecipe(){

    document.getElementById("result").innerHTML = "Loading Recipes...";

    let input = document.getElementById("ingredients").value;
    let time = document.getElementById("time").value;
    let diet = document.getElementById("diet").value;
    let difficulty = document.getElementById("difficulty").value;

    let ingredientsArray = input
        .split(",")
        .map(i => i.trim().toLowerCase());

    try{

        let response = await fetch(`${API_URL}/recipe/match`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                ingredients: ingredientsArray,
                time: time,
                diet: diet,
                difficulty: difficulty
            })
        });

        let data = await response.json();
        let recipes = data.recipes;

        if(!recipes || recipes.length === 0){
            document.getElementById("result").innerHTML = "No matching recipes found";
            return;
        }

        let output = "";

        recipes.forEach(recipe => {

            let stepsList = "";
            recipe.steps.forEach(step => {
                stepsList += `<li>${step}</li>`;
            });

            let ingredientsList = "";
            recipe.ingredients.forEach(ing => {
                ingredientsList += `<li>${ing}</li>`;
            });

            output += `
            <div class="card">
                <h3>${recipe.name}</h3>
                <p><b>Diet:</b> ${recipe.diet}</p>
                <p><b>Difficulty:</b> ${recipe.difficulty}</p>
                <p><b>Time:</b> ${recipe.time} mins</p>
                <p><b>Calories:</b> ${recipe.calories} kcal</p>
                <p><b>Protein:</b> ${recipe.protein} g</p>
                <p><b>Match Score:</b> ${(recipe.score*100).toFixed(0)}%</p>

                <p><b>Ingredients:</b></p>
                <ul>${ingredientsList}</ul>

                <p><b>Steps:</b></p>
                <ol>${stepsList}</ol>

                <button onclick="rateRecipe('${recipe.name}')">⭐ Rate</button>
                <button onclick="favoriteRecipe('${recipe.name}')">❤️ Favorite</button>
            </div>
            `;
        });

        document.getElementById("result").innerHTML = output;

    }
    catch(err){
        console.log(err);
        document.getElementById("result").innerHTML = "Server Error!";
    }
}


// ================= RATE RECIPE =================
async function rateRecipe(name){
    try{
        await fetch(`${API_URL}/recipe/rate`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:name,
                rating:5
            })
        });
        alert("Rated Successfully!");
    }
    catch(err){
        alert("Rating Failed!");
    }
}


// ================= FAVORITE =================
async function favoriteRecipe(name){
    try{
        await fetch(`${API_URL}/recipe/favorite`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:name
            })
        });
        alert("Added to Favorites!");
    }
    catch(err){
        alert("Favorite Failed!");
    }
}


// ================= IMAGE DETECT =================
async function uploadImage(){

    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];

    if(!file){
        alert("Please upload an image first!");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try{

        document.getElementById("result").innerHTML = "Scanning Ingredients...";

        const res = await fetch(`${API_URL}/image-detect`,{
            method:"POST",
            body:formData
        });

        const data = await res.json();

        if(data.ingredients && data.ingredients.length > 0){
            document.getElementById("ingredients").value =
                data.ingredients.join(", ");
            document.getElementById("result").innerHTML =
                "Ingredients Detected Successfully ✅";
        }
        else{
            document.getElementById("result").innerHTML =
                "No ingredients detected!";
        }

    }
    catch(error){
        console.log(error);
        document.getElementById("result").innerHTML =
            "Error connecting to backend!";
    }
}

window.uploadImage = uploadImage;
