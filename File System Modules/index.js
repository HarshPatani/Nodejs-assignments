// Reading File

const fs = require("node:fs");

console.log("start");
const readingFile = fs.readFileSync("./ReadFile.txt");
console.log(readingFile.toString());
console.log("End reading");

// Writing File
fs.writeFileSync(
  "./Overwritten.txt",
  "This is Overwritten text from Overwritten.txt"
);
const overwrittenFile = fs.readFileSync("./Overwritten.txt");
console.log(overwrittenFile.toString());
