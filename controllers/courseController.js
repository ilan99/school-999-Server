const express = require("express");
const courseServices = require("../services/courseServices");

const router = express.Router();

// Get all courses
router.route("/").get(async (req, res) => {
  console.log("=> Courses request");
  const courses = await courseServices.getAllCourses();
  return res.json(courses);
});

router.route("/lid/:id").get(async (req, res) => {
  const id = req.params.id;
  const courses = await courseServices.getAllCoursesByLecturerId(id);
  return res.json(courses);
});

router.route("/sid/:id").get(async (req, res) => {
  const id = req.params.id;
  const courses = await courseServices.getAllCoursesByStudentId(id);
  return res.json(courses);
});

// Get course by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const course = await courseServices.getCourseById(id);
  return res.json(course);
});

// Post
router.route("/").post(async (req, res) => {
  const newCourse = req.body;
  try {
    const data = await courseServices.addCourse(newCourse);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/data/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeCourse = req.body;
  try {
    const data = await courseServices.updateCourse(id, changeCourse);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/grade/").put(async (req, res) => {
  const studentGrade = req.body;
  try {
    const data = await courseServices.updateStudentGrade(studentGrade);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/salary/").put(async (req, res) => {
  const lecturerSalary = req.body;
  try {
    const data = await courseServices.updateLecturerSalary(lecturerSalary);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/rmStudent/").put(async (req, res) => {
  const studentId = req.body;
  try {
    const data = await courseServices.removeStudent(studentId);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

router.route("/rmLecturer/").put(async (req, res) => {
  const lecturerId = req.body;
  try {
    const data = await courseServices.removeLecturer(lecturerId);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await courseServices.deleteCourse(id);
  return res.json(data);
});

module.exports = router;
