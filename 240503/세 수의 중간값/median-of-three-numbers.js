const fs = require("fs");
const log = console.log;
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(b > a && b < c) {
    log(1)
} else {
    log(0);
}