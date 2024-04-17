const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const ft = 30.48;
const n = Number(input);

log((n * ft).toFixed(1));