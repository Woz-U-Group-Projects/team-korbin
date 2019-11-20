"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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
