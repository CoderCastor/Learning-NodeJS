// const math = require("./math"); instead of using math we can destructure it
const { add, sub} = require("./math")
// console.log(math);

// console.log("Result is: ",math.add(10, 5));
// console.log("Result is: ",math.sub(7, 5));


const { add, sub} = require("./math")

console.log("Result is: ",add(10, 5));
console.log("Result is: ",sub(7, 5));



const p = require("")