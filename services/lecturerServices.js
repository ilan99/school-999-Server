const Lecturer = require("../models/lecturerModel");

// Get
const getAllLecturers = () => {
  return new Promise((res, rej) => {
    Lecturer.find({}, (err, lecturers) => {
      if (err) {
        rej(err);
      } else {
        res(lecturers);
      }
    });
  });
};

const getLecturerById = (id) => {
  return new Promise((res, rej) => {
    Lecturer.findById(id, (err, lecturer) => {
      if (err) {
        rej(err);
      } else {
        res(lecturer);
      }
    });
  });
};

// Post
const addLecturer = (newLecturer) => {
  return new Promise((res, rej) => {
    const lecturer = new Lecturer(newLecturer);
    lecturer.save((err) => {
      if (err) {
        rej(err);
      } else {
        res("lecturer added successfully");
      }
    });
  });
};

// Put
const updateLecturer = (id, changeLecturer) => {
  return new Promise((res, rej) => {
    Lecturer.findByIdAndUpdate(id, changeLecturer, (err) => {
      if (err) {
        rej(err);
      } else {
        res("lecturer updated successfully");
      }
    });
  });
};

// Delete
const deleteLecturer = (id) => {
  return new Promise((res, rej) => {
    Lecturer.findByIdAndDelete(id, (err) => {
      if (err) {
        rej(err);
      } else {
        res("lecturer deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllLecturers,
  getLecturerById,
  addLecturer,
  updateLecturer,
  deleteLecturer,
};
