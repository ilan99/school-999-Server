const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  id: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
  },
  birthDate: { type: Date },
  registeredDate: { type: Date },
  email: { type: String, unique: true },
  phone: {
    pre: { type: String },
    number: { type: Number },
  },
});

module.exports = mongoose.model("student", studentSchema);
