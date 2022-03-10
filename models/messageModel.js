const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sentDate: { type: Date },
  fullName: { type: String },
  email: { type: String },
  subject: { type: String },
  body: { type: String },
});

module.exports = mongoose.model("message", messageSchema);
