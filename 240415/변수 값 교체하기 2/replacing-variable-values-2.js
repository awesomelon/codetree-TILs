const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

let a = 5, b = 3;

a = b;

log(a);
log(b);