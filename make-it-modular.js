const fileName = process.argv[2];
const ext = process.argv[3];
const mymodule = require("./mymodule.js");
mymodule(fileName, ext, (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    console.log(file);
  });
});
