const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = 13, b = 0.165.toFixed(6);
const multi =(a * b).toFixed(6);
log(`${a} * ${b} = ${multi}`);