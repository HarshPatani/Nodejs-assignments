const math = require("./MathMethods");
console.log(math);

const a = 10,
  b = 5;
console.log(`Numbers are ${a} & ${b}`);
console.log("Addition ", math.add(a, b));
console.log("Subtraction ", math.sub(a, b));
console.log("Multiplication ", math.mul(a, b));
console.log("Division ", math.div(a, b));
