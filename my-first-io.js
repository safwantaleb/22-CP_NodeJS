const fs = require("fs");
var file = fs.readFileSync(process.argv[2], "utf8");
var data = file.toString().split("\n").length - 1;
console.log(data);