const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const origamiSchema = new Schema({
  id: {
    type: Number
  },

  description: {
    type: String,
    required: true
  },

  author: {
    // type: ObjectId,
    // ref: "User"
    type: String
  }
});

module.exports = new Model("Origami", origamiSchema);
