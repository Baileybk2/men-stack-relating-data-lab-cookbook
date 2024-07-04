const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "meat",
      "vegetable",
      "grain",
      "dairy",
      "condiment",
      "fruit",
      "spice",
    ],
  },
  notes: {
    type: String,
  },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
