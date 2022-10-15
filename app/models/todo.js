const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const todoModel = model("Todo", todoSchema);

module.exports = todoModel;