"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// //Define collection and schema
var RecipeSchema = new Schema({
  rId: { type: Number, auto: true},
  recipeName: { type: String, required: true },
  ingredients: { type: Array, required: true },
  ingredientQty: { type: Number, required: true },
  ingredientMeasure: { type: String, required: true },
  ingredientItem: { type: String, required: true },
  ingredientImage: { type: String, required: false },
  category: { type: String, required: false },
  directions: { type: String, required: false }
});

// // Duplicate the ID field.
// TaskSchema.virtual("id").get(function() {
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// TaskSchema.set("toJSON", {
//   virtuals: true
// });

// module.exports = mongoose.model("Task", TaskSchema);
