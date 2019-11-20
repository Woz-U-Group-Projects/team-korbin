"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
<<<<<<< HEAD
// ({recipeName: {
//     type: String
//   },
//   category: {
//     type: String
//   },
//   ingrediants: {
//     type: String
//   },
//   image: {
//     type: String
//   },
//   directions: {
//     type: String
//   }
// });

// mongoose.model('Task', Schema);
=======
>>>>>>> 03005c84151dfb355b0f142868f39b7ca1927386

var TaskSchema = new Schema({
  name: { type: String, required: true },
  complete: { type: Boolean, required: true }
});

// Duplicate the ID field.
TaskSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TaskSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Task", TaskSchema);
  // (
  //   {
  //   recipeName: {
  //     type: String
  //   },
  //   category: {
  //     type: String
  //   },
  //   ingredients: {
  //     type: String
  //   },
  //   image: {
  //     type: String
  //   },
  //   directions: {
  //     type: String
  //   }
  // }
  // )
  // mongoose.model('Recipe', Schema);
