const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const binary = [...input].map(Number);

let number = 0;

for(let i = 0; i < binary.length; i++) {
    number = number * 2 + binary[i];
}

console.log(number);