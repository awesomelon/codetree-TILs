const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);
const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

log(days[n]);