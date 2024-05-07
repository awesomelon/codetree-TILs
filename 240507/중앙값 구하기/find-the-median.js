const fs = require("fs");
const log = console.log;
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a > b && a < c) {
    log(a)
}

if(b > a && b < c) {
    log(b)
}

if(c > a && c < b) {
    log(c)
}