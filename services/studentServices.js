const Student = require("../models/studentModel");

// Get
const getAllStudents = () => {
  return new Promise((res, rej) => {
    Student.find({}, (err, students) => {
      if (err) {
        rej(err);
      } else {
        res(students);
      }
    });
  });
};

const getStudentById = (id) => {
  return new Promise((res, rej) => {
    Student.findById(id, (err, student) => {
      if (err) {
        rej(err);
      } else {
        res(student);
      }
    });
  });
};

// Post
const addStudent = (newStudent) => {
  return new Promise((res, rej) => {
    const student = new Student(newStudent);
    student.save((err) => {
      if (err) {
        rej(err);
      } else {
        res("student added successfully");
      }
    });
  });
};

// Put
const updateStudent = (id, changeStudent) => {
  return new Promise((res, rej) => {
    Student.findByIdAndUpdate(
      id,
      changeStudent,
      { runValidators: true },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res("student updated successfully");
        }
      }
    );
  });
};

// Delete
const deleteStudent = (id) => {
  return new Promise((res, rej) => {
    Student.findByIdAndDelete(id, (err) => {
      if (err) {
        rej(err);
      } else {
        res("student deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
