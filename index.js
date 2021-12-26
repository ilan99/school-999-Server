const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const studentController = require("./controllers/studentController");

const app = express();
const port = 8000;

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use("/students", studentController);

//app.listen(process.env.PORT || port, "localhost", () =>
app.listen(() => console.log(`server is listening on port ${port}`));
