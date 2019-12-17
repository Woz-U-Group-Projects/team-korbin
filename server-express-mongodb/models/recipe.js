// "use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  id: {
    type: Number,
    required: false
  },
  ingredient: {
    type: String,
    trim: true,
    required: false
  },
  measurement: {
    type: String,
    required: false
  },
  qty: {
    type: Number,
    required: false
  }
});

var RecipeSchema = new Schema({
  id: {
    type: Number,
    required: false
  },
  recipeName: {
    type: String,
    trim: true,
    required: true
  },
  ingredients: [IngredientSchema],
directions: {
  type: Array,
    required: false,
    default: []
},
recipeImage: {
  type: String,
    required: false,
    default: 'https://delishusapp.s3.amazonaws.com/images/RecipeIconPlaceholder.png'
},
active: {
  type: Boolean,
    required: false
},
created_at: {
  type: Date,
    default: Date.now
}
});

// Duplicate the ID field.
RecipeSchema.virtual("vId").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
RecipeSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Recipe", RecipeSchema, 'recipeapp');
