const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

let a = Number(input);

if( a % 2 === 0) {
    a /= 2;
}

if( a % 2 === 1) {
    a += 1;
    a /= 2;
}

log(parseInt(a));