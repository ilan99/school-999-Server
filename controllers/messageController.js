const express = require("express");
const messageServices = require("../services/messageServices");

const router = express.Router();

// Get all messages
router.route("/").get(async (req, res) => {
  const messages = await messageServices.getAllMessages();
  return res.json(messages);
});

// Get message by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const message = await messageServices.getMessageById(id);
  return res.json(message);
});

// Post
router.route("/").post(async (req, res) => {
  const newMessage = req.body;
  try {
    const data = await messageServices.addMessage(newMessage);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
