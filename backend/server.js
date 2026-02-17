const cors = require("cors");
require("dotenv").config();

require('dotenv').config({ path: './backend/.env' });

//require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.json());


// ROUTES
const matchRoute = require("./routes/matchRecipe");
const addRecipeRoute = require("./routes/addRecipe");
const imageDetectRoute = require("./routes/imageDetect");
const rateRoute = require("./routes/rateRecipe");
const favRoute = require("./routes/favoriteRecipe");
//const analyzeIngredientRoute = require("./routes/analyzeIngredient");

const app = express();

// ✅ MIDDLEWARE (Order matters)
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));



// ✅ OTHER ROUTES
app.use("/recipe", rateRoute);
app.use("/recipe", favRoute);
app.use("/recipe", addRecipeRoute);
app.use("/recipe", matchRoute);

app.use("/image-detect", imageDetectRoute);
//app.use("/analyze-ingredient", analyzeIngredientRoute);

// ✅ DATABASE CONNECTION (MOVE PASSWORD TO .env LATER)
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
