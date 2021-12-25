const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  fullName: { type: String, required: "Full name is required" },
  email: {
    type: String,
    required: "Email address is invalid",
    match: /.+\@.+\..+/,
    unique: true,
  },
  faculty: { type: String, required: "Faculty name is required" },
  birthDate: { type: Date, required: "Birth date is required " },
  exams: [
    {
      name: { type: String, required: true },
      date: { type: Date, required: true },
      grade: { type: Number, required: true, min: "0", max: "100" },
    },
  ],
});

module.exports = mongoose.model("student", studentSchema);
