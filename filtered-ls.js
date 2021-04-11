const fs = require("fs");
const path = require("path");

const fileName = process.argv[2];
const ext = "." + process.argv[3];
fs.readdir(fileName, (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
