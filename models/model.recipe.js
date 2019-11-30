var mongoose = require("mongoose");
var Schema = mongoose.Schema;

class RecipeModel {
    constructor(rId, recipeName, ingredients, ingredientQty, ingredientMeasure, ingredientItem, category, ingredientImage) {
        this.mongoose.Types.ObjectId = rId;
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

var ingredientSchema = new Schema({
    ingredientQty: { type: Number, required: false },
    ingredientMeasure: { type: String, required: false },
    ingredientItem: { type: String, required: false }
});

var RecipeSchema = new Schema({
    rId: { type: Number, auto: true },
    recipeName: { type: String, required: false },
    ingredients: [{ingredientSchema, default: [] }],
    // { //Schema({ 
    //     // type: Array, 
    //     // required: false, 
    //     // default: undefined,
    //     ingredientQty: { type: Number, required: false },
    //     ingredientMeasure: { type: String, required: false },
    //     ingredientItem: { type: String, required: false }
    // // })
    // }],
    ingredientImage: { type: String, required: false },
    category: { type: String, required: false },
    directions: { type: String, required: false },
    recipeNew: { type: Boolean, required: false, default: true }
});

// Duplicate the ID field.
RecipeSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialized
RecipeSchema.set("toJSON", {
    virtuals: true
});

module.exports = mongoose.model("Recipe", RecipeSchema);