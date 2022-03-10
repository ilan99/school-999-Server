const express = require("express");
const lecturerServices = require("../services/lecturerServices");

const router = express.Router();

// Get all lecturers
router.route("/").get(async (req, res) => {
  const lecturers = await lecturerServices.getAllLecturers();
  return res.json(lecturers);
});

// Get lecturer by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const lecturer = await lecturerServices.getLecturerById(id);
  return res.json(lecturer);
});

// Post
router.route("/").post(async (req, res) => {
  const newLecturer = req.body;
  try {
    const data = await lecturerServices.addLecturer(newLecturer);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeLecturer = req.body;
  try {
    const data = await lecturerServices.updateLecturer(id, changeLecturer);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await lecturerServices.deleteLecturer(id);
  return res.json(data);
});

module.exports = router;
