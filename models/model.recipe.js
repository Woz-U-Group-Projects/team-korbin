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
        this.directions = directions;
        this.recipeNew = recipeNew;
    }
}


var RecipeSchema = new Schema({
    rId: { type: Number, auto: true},
    recipeName: { type: String, required: true },
    ingredients: { type: Array, required: true },
    ingredientQty: { type: Number, required: true },
    ingredientMeasure: { type: String, required: true },
    ingredientItem: { type: String, required: true },
    ingredientImage: { type: String, required: false },
    category: { type: String, required: false },
    directions: { type: String, required: false },
    recipeNew: { type: Boolean, required: false, default: true }
});

// Duplicate the ID field.
RecipeSchema.virtual("id").get(function() {
    return this._id.toHexString();
  });

// Ensure virtual fields are serialized
RecipeSchema.set("toJSON", {
    virtuals: true
});

module.exports = mongoose.model("Recipe", RecipeSchema);