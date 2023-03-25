const fName = "Harsh";
const lName = "Patani";

//CommonJS syntax to require the module

const commonJS = require("./CommonJSModule");
console.log("Using commonJS Syntax");
console.log(commonJS(fName, lName));

//ES6 syntax to import the module

import ES6 from "./ES6Module.js";
console.log("=> ES6 Syntax to require the module");
console.log("Using ES6 Syntax");
console.log(ES6(fName, lName));
