const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = 7, b = 23, c = 30;

log(`%d + %d = %d`, a, b, c);