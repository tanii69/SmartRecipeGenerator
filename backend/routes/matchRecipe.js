const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.post("/match", (req, res) => {
try {

let { ingredients = [], diet, difficulty, time } = req.body;

// 🛡️ SAFETY CHECK
if (!Array.isArray(ingredients)) {
    return res.json({ recipes: [] });
}

// CLEAN USER INGREDIENTS
ingredients = ingredients.map(i => i.trim().toLowerCase());

if (diet) diet = diet.toLowerCase();
if (difficulty) difficulty = difficulty.toLowerCase();

// ✅ DEPLOYMENT SAFE JSON PATH
const dataPath = path.resolve(process.cwd(), "backend/data/recipes.json");

let recipes = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

// FILTER
recipes = recipes.filter(recipe => {

    if (diet && recipe.diet.toLowerCase() !== diet) return false;
    if (difficulty && recipe.difficulty.toLowerCase() !== difficulty) return false;
    if (time && recipe.time > Number(time)) return false;

    return true;
});

// SCORING
let scoredRecipes = recipes.map(recipe => {

    let recipeIngredients =
    recipe.ingredients.map(i => i.trim().toLowerCase());

    let matchCount = recipeIngredients.filter(i =>
    ingredients.includes(i)
    ).length;

    let score = matchCount / recipeIngredients.length;

    return {
        ...recipe,
        score
    };
});

scoredRecipes = scoredRecipes.filter(r => r.score > 0);
scoredRecipes.sort((a,b)=>b.score - a.score);

res.json({recipes: scoredRecipes});

}
catch(err){
console.log(err);
res.status(500).json({msg:"Matching error"});
}
});

module.exports = router;
