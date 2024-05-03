const fs = require("fs");
const log = console.log;
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a <= b && a <= c) {
    log(a);
} else if(b <= a && b <= c) {
    log(b)
} else {
    log(c)
}