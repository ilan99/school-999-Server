const mongoose = require("mongoose");

const connectDB = () => {
  const URI =
    "mongodb+srv://ilan99:work1000@cluster0.jgxgj.mongodb.net/schoolDB?retryWrites=true&w=majority";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(URI, options);
};

module.exports = connectDB;
