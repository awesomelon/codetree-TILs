const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

log(n.toFixed(2))