const jsonfile = require("jsonfile");
const file = "./files/Settings.json";

// Get
const getSettings = () => {
  return new Promise((res, rej) => {
    jsonfile.readFile(file, (err, settings) => {
      if (err) {
        rej(err);
      } else {
        res(settings);
      }
    });
  });
};

// Put
const updateSettings = (settings) => {
  return new Promise((res, rej) => {
    jsonfile.writeFile(file, settings, (err) => {
      if (err) {
        rej(err);
      } else {
        res("settings updated successfully");
      }
    });
  });
};

module.exports = {
  getSettings,
  updateSettings,
};
