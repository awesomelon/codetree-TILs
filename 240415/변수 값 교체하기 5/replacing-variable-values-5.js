const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

let a = 2, b = 6;
a = b;

log(a);
log(b)