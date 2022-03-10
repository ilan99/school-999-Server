const Message = require("../models/messageModel");

// Get
const getAllMessages = () => {
  return new Promise((res, rej) => {
    Message.find({}, (err, messages) => {
      if (err) {
        rej(err);
      } else {
        res(messages);
      }
    });
  });
};

const getMessageById = (id) => {
  return new Promise((res, rej) => {
    Message.findById(id, (err, message) => {
      if (err) {
        rej(err);
      } else {
        res(message);
      }
    });
  });
};

// Post
const addMessage = (newMessage) => {
  return new Promise((res, rej) => {
    const message = new Message(newMessage);
    message.save((err) => {
      if (err) {
        rej(err);
      } else {
        res("Thank you for contact us");
      }
    });
  });
};

module.exports = {
  getAllMessages,
  getMessageById,
  addMessage,
};
