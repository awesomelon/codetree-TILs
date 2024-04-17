const fs = require("fs");
const log = console.log;
let [a, b] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

a += 87;
b %= 10;

log(a);
log(b);