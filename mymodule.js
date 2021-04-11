const fs = require("fs");
const path = require("path");

const mymodule = (fileName, ext, callback) => {
  fs.readdir(fileName, (err, files) => {
    if (err) return callback(err);
    files = files.filter((file) => {
      return path.extname(file) === "." + ext;
    });
    callback(null, files);
  });
};
module.exports = mymodule;
