const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();


let a = 2, b = 5;

let temp = a;

a = b;
b = temp;

log(a);
log(b);