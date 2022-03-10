const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lecturerSchema = new Schema({
  id: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  langs: [{ type: String }],
  systems: [{ type: String }],
  frameworks: [{ type: String }],
  database: [{ type: String }],
});

module.exports = mongoose.model("lecturer", lecturerSchema);
