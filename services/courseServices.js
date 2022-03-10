const Course = require("../models/courseModel");

// Get
const getAllCourses = () => {
  return new Promise((res, rej) => {
    Course.find({}, (err, courses) => {
      if (err) {
        rej(err);
      } else {
        res(courses);
      }
    });
  });
};

const getAllCoursesByLecturerId = (id) => {
  return new Promise((res, rej) => {
    Course.find({ lecturerId: id })
      .populate("lecturerId")
      .populate("students.studentId")
      .exec((err, courses) => {
        if (err) {
          rej(err);
        } else {
          res(courses);
        }
      });
  });
};

const getAllCoursesByStudentId = (id) => {
  return new Promise((res, rej) => {
    Course.find({ "students.studentId": id })
      .populate("lecturerId")
      .populate("students.studentId")
      .exec((err, courses) => {
        if (err) {
          rej(err);
        } else {
          res(courses);
        }
      });
  });
};

const getCourseById = (id) => {
  return new Promise((res, rej) => {
    Course.findById(id)
      .populate("lecturerId")
      .populate("students.studentId")
      .exec((err, courses) => {
        if (err) {
          rej(err);
        } else {
          res(courses);
        }
      });
  });
};

// Post
const addCourse = (newCourse) => {
  return new Promise((res, rej) => {
    const course = new Course(newCourse);
    course.save((err, doc) => {
      if (err) {
        rej(err);
      } else {
        res("course added successfully");
      }
    });
  });
};

// Put
const updateCourse = (id, changeCourse) => {
  return new Promise((res, rej) => {
    Course.findByIdAndUpdate(id, changeCourse, (err) => {
      if (err) {
        rej(err);
      } else {
        res("course updated successfully");
      }
    });
  });
};

const updateStudentGrade = (studentGrade) => {
  return new Promise((res, rej) => {
    Course.findOneAndUpdate(
      { "students._id": studentGrade._id },
      { $set: { "students.$.grade": studentGrade.grade } },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res("grade updated successfully");
        }
      }
    );
  });
};

const updateLecturerSalary = (lecturerSalary) => {
  return new Promise((res, rej) => {
    Course.findOneAndUpdate(
      { _id: lecturerSalary.courseId },
      { $set: { lecturerSalary: lecturerSalary.salary } },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res("salary updated successfully");
        }
      }
    );
  });
};

const removeStudent = (studentId) => {
  return new Promise((res, rej) => {
    Course.updateMany({}, { $pull: { students: studentId } }, (err) => {
      if (err) {
        rej(err);
      } else {
        res("student removed successfully");
      }
    });
  });
};

const removeLecturer = (lecturerId) => {
  return new Promise((res, rej) => {
    Course.updateMany(
      lecturerId,
      { $set: { lecturerId: null, lecturerSalary: null } },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res("lecturer removed successfully");
        }
      }
    );
  });
};

// Delete
const deleteCourse = (id) => {
  return new Promise((res, rej) => {
    Course.findByIdAndDelete(id, (err) => {
      if (err) {
        rej(err);
      } else {
        res("course deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllCourses,
  getAllCoursesByLecturerId,
  getAllCoursesByStudentId,
  getCourseById,
  addCourse,
  updateCourse,
  updateStudentGrade,
  updateLecturerSalary,
  removeStudent,
  removeLecturer,
  deleteCourse,
};
