const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const binary = input;
const number17 = parseInt(binary, 2) * 17;
console.log(number17.toString(2))