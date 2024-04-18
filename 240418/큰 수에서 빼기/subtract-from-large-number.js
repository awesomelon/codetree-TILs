const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

if(a > b) {
    log(a - b);
} else {
    log(b - a);
}