// "use strict";

// var mongoose = require("mongoose");
// var taskSchema = mongoose.Schema({
//   recipeName: {
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

// mongoose.model('Recipe', taskSchema);

// var TaskSchema = new Schema({
//   name: { type: String, required: true },
//   complete: { type: Boolean, required: true }
// });

// // Duplicate the ID field.
// TaskSchema.virtual("id").get(function() {
//   return this._id.toHexString();
// });

// // Ensure virtual fields are serialised.
// TaskSchema.set("toJSON", {
//   virtuals: true
// });

// module.exports = mongoose.model("Task", TaskSchema);
