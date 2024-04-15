const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();


let a = 1, b = 2, c = 3;

a = b = c;

log(a, b, c)