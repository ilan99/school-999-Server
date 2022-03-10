const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const lecturerController = require("./controllers/lecturerController");
const studentController = require("./controllers/studentController");
const courseController = require("./controllers/courseController");
const settingsController = require("./controllers/settingsController");
const messageController = require("./controllers/messageController");

const app = express();
const port = 8000;
const host = "0.0.0.0";

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use("/lecturers", lecturerController);
app.use("/students", studentController);
app.use("/courses", courseController);
app.use("/settings", settingsController);
app.use("/messages", messageController);

app.listen(process.env.PORT || port, host, () =>
  console.log("Heroku server is on")
);
