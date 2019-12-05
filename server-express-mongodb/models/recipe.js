"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  recipeId: { type: Number, required: false },
  recipeName: { type: String, required: true },
  complete: { type: Boolean, required: false }
});

// Duplicate the ID field.
RecipeSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
RecipeSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Recipe", RecipeSchema);
