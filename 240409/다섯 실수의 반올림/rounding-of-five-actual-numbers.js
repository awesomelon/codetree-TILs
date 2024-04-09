const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim().split('\n');

input.forEach(n => log(Number(n).toFixed(3)));