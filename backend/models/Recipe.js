const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
name:String,
ingredients:[String],
diet:String,
difficulty:String,
time:Number,
calories:Number,
protein:Number,
steps:[String],
cuisine:String,
rating:{
type:Number,
default:0
},

favorite:{
type:Boolean,
default:false
}

});

module.exports = mongoose.model("Recipe",RecipeSchema);
