const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let a = Number(input);

if(a % 2 === 1) {
    a += 3;
}

if(a % 3 === 0) {
    a /= 3;
}

console.log(a);