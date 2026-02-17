const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.post("/favorite", async (req,res)=>{

const {id} = req.body;

await Recipe.findByIdAndUpdate(id,{favorite:true});

res.send("Added to Favorites");

});

module.exports = router;
