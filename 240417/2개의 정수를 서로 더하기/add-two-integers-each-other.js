const fs = require("fs");
const log = console.log;
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

a += b;
b += a;

log(a, b);