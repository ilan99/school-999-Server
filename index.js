const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const studentController = require("./controllers/studentController");

const app = express();
const port = 8000;
const host = "0.0.0.0";

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use("/students", studentController);

app.listen(process.env.PORT || port, host, () =>
  console.log("Heroku server is on")
);
