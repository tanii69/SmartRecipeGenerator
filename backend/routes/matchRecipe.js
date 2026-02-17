const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.post("/match", async (req, res) => {
  try {
    // ✅ GET DATA FROM FRONTEND
    let { ingredients, diet, difficulty, time } = req.body;

    console.log("User Ingredients:", ingredients);

    // ✅ CLEAN USER INGREDIENTS
    ingredients = (ingredients || []).map(i => i.trim().toLowerCase());

    // ✅ BUILD QUERY OBJECT (optional filters only)
    let query = {};

    if (diet && diet !== "any" && diet !== "No Preference") {
      query.diet = diet.toLowerCase();
    }

    if (difficulty && difficulty !== "any" && difficulty !== "Any Difficulty") {
      query.difficulty = difficulty.toLowerCase();
    }

    if (time && Number(time) > 0) {
      query.time = { $lte: Number(time) };
    }

    console.log("Final Query:", query);

    // ✅ FETCH RECIPES (broad search first, then score)
    let recipes = await Recipe.find(query);

    console.log("Recipes after filter:", recipes.length);

    if (!recipes.length) {
      return res.json({ recipes: [] });
    }

    // ✅ MATCH SCORING
    let scoredRecipes = recipes.map(recipe => {
      let recipeIngredients = (recipe.ingredients || []).map(i =>
        i.trim().toLowerCase()
      );

      let matchCount = recipeIngredients.filter(i =>
        ingredients.includes(i)
      ).length;

      let score =
        recipeIngredients.length > 0
          ? matchCount / recipeIngredients.length
          : 0;

      return {
        ...recipe._doc,
        score
      };
    });

    // ✅ KEEP ALL RECIPES, SORT BY BEST MATCH
    scoredRecipes.sort((a, b) => b.score - a.score);

    res.json({ recipes: scoredRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Matching error" });
  }
});

module.exports = router;