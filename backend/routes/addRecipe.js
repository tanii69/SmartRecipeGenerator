const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.post("/add", async(req,res)=>{

try{
const newRecipe = new Recipe(req.body);
await newRecipe.save();
res.send("Recipe Added");
}
catch(err){
res.send(err);
}

});

module.exports = router;
