var mongoose = require("mongoose");
var Schema = mongoose.Schema;

class RecipeModel
{
    constructor(rId, recipeName, ingredients, ingredientQty, ingredientMeasure, ingredientItem, category, ingredientImage)
    {
        this.rId = rId;
        this.recipeName = recipeName;
        this.ingredients = ingredients;
        this.ingredientQty = ingredientQty;
        this.ingredientMeasure = ingredientMeasure;
        this.ingredientItem = ingredientItem;
        this.ingredientImage = ingredientImage;
        this.category = category;
    }
}

var RecipeSchema = new Schema({
    recipeName: { type: String, required: true },
    ingredients: { type: Array, required: true },
    ingredientQty: { type: Number, required: true },
    ingredientMeasure: { type: String, required: true },
    ingredientItem: { type: String, required: true },
    ingredientImage: { type: String, required: false },
    category: { type: String, required: false }
})

RecipeSchema.set("toJSON", {
    virtuals: true
});

module.exports = RecipeModel;