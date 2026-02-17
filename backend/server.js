const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: "./backend/.env" });


const app = express();


app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));


const matchRoute = require("./routes/matchRecipe");
const addRecipeRoute = require("./routes/addRecipe");
const imageDetectRoute = require("./routes/imageDetect");
const rateRoute = require("./routes/rateRecipe");
const favRoute = require("./routes/favoriteRecipe");

app.use("/recipe", matchRoute);
app.use("/recipe", addRecipeRoute);
app.use("/recipe", rateRoute);
app.use("/recipe", favRoute);
app.use("/image-detect", imageDetectRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
