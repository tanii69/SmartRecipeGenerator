async function getRecipe(){

    document.getElementById("result").innerHTML = "Loading Recipes...";

    let input = document.getElementById("ingredients").value;
    let time = document.getElementById("time").value;
    let diet = document.getElementById("diet").value;
    let difficulty = document.getElementById("difficulty").value;
    let servings = document.getElementById("servings").value;
    let health = document.getElementById("health").value;

    // ✅ CLEAN INGREDIENTS (VERY IMPORTANT)
    let ingredientsArray = input
        .split(",")
        .map(i => i.trim().toLowerCase());

    try{

        let response = await fetch("http://localhost:5000/recipe/match", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                ingredients: ingredientsArray,
                time: time,
                diet: diet,
                health: health,
                difficulty: difficulty,
                servings: servings
            })
        });

        let data = await response.json();

        // ✅ IMPORTANT FIX (backend sends {recipes:[]})
        let recipes = data.recipes;

        if(!recipes || recipes.length === 0){
            document.getElementById("result").innerHTML = "No matching recipes found";
            return;
        }

        let output = "";

        recipes.forEach(recipe => {

            let stepsList = "";
            if(recipe.steps && recipe.steps.length > 0){
                recipe.steps.forEach(step => {
                    stepsList += `<li>${step}</li>`;
                });
            }

            let ingredientsList = "";
            if(recipe.ingredients && recipe.ingredients.length > 0){
                recipe.ingredients.forEach(ing => {
                    ingredientsList += `<li>${ing}</li>`;
                });
            }

            output += `
            <div class="card">
                <h3>${recipe.name}</h3>
                <p><b>Diet:</b> ${recipe.diet}</p>
                <p><b>Difficulty:</b> ${recipe.difficulty}</p>
                <p><b>Time:</b> ${recipe.time} mins</p>
                <p><b>Calories:</b> ${recipe.calories} kcal</p>
                <p><b>Protein:</b> ${recipe.protein} g</p>
                <p><b>Cuisine:</b> ${recipe.cuisine || "General"}</p>
                <p><b>Match Score:</b> ${(recipe.score*100).toFixed(0)}%</p>

                <p><b>Ingredients:</b></p>
                <ul>
                    ${ingredientsList}
                </ul>

                <p><b>Steps:</b></p>
                <ol>
                    ${stepsList}
                </ol>

                <button onclick="rateRecipe('${recipe._id}')">Rate 5⭐</button>
                <button onclick="favoriteRecipe('${recipe._id}')">❤️ Favorite</button>
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

// ⭐ RATE RECIPE
async function rateRecipe(id){
    try{
        await fetch("http://localhost:5000/recipe/rate",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                id:id,
                rating:5
            })
        });
        alert("Rated Successfully!");
    }
    catch(err){
        alert("Rating Failed!");
    }
}

// ❤️ FAVORITE RECIPE
async function favoriteRecipe(id){
    try{
        await fetch("/api/recipe/favorite",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                id:id
            })
        });
        alert("Added to Favorites!");
    }
    catch(err){
        alert("Favorite Failed!");
    }
}

// 📸 IMAGE INGREDIENT DETECTION
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

        const res = await fetch("http://localhost:5000/image-detect",{
            method:"POST",
            body:formData
        });

        const data = await res.json();
        console.log("Detected:",data);

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