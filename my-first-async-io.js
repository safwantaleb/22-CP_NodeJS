const fs = require("fs");
fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) return console.error(err);
  var lines = data.toString().split("\n").length - 1;
  console.log(lines);
});
