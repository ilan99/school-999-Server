const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  birthDate: { type: Date },
  registeredDate: { type: Date },
  email: { type: String },
});

module.exports = mongoose.model("student", studentSchema);
