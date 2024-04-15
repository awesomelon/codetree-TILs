const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

let a = 97, b = 13;

log(`${a} - ${b} = ${a - b}`);