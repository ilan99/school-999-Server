const express = require("express");
const settingsServices = require("../services/settingsServices");

const router = express.Router();

// Get
router.route("/").get(async (req, res) => {
  const settings = await settingsServices.getSettings();
  return res.json(settings);
});

// Put
router.route("/").put(async (req, res) => {
  try {
    const settings = req.body;
    const data = await settingsServices.updateSettings(settings);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
