const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.post("/rate", async (req,res)=>{

const {id, rating} = req.body;

await Recipe.findByIdAndUpdate(id,{rating:rating});

res.send("Rating Updated");

});

module.exports = router;
