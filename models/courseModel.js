const mongoose = require("mongoose");
const Lecturer = require("./lecturerModel");
const Student = require("./studentModel");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  seqNumber: { type: Number },
  name: { type: String },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  lecturerId: { type: Schema.Types.ObjectId, ref: Lecturer },
  lecturerSalary: { type: Number },
  students: [
    {
      studentId: { type: Schema.Types.ObjectId, ref: Student },
      grade: { type: Number },
    },
  ],
});

module.exports = mongoose.model("course", courseSchema);
