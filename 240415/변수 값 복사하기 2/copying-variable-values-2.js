const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();


let a = 5, b = 6, c = 7;

a = b = c;

log(a,b,c)