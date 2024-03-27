const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let digits = [];

while(true) {
    if(n < 2) {
        digits.push(n);
        break;
    }

    digits.push(n % 2);
    n = Math.floor(n / 2);
}

console.log(digits.reverse().join(''))