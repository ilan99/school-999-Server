const express = require("express");
const { Error } = require("mongoose");
const studentServices = require("../services/studentServices");

const router = express.Router();

// Initial request
router.route("/start").get(async (req, res) => {
  console.log("Initial request : ", req.headers);
  res.send("ok");
});

// Get all students
router.route("/").get(async (req, res) => {
  console.log("=> Students request");
  const students = await studentServices.getAllStudents();
  return res.json(students);
});

// Get student by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const student = await studentServices.getStudentById(id);
  return res.json(student);
});

// Post
router.route("/").post(async (req, res) => {
  const newStudent = req.body;
  try {
    const data = await studentServices.addStudent(newStudent);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeStudent = req.body;
  try {
    const data = await studentServices.updateStudent(id, changeStudent);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await studentServices.deleteStudent(id);
  return res.json(data);
});

module.exports = router;
