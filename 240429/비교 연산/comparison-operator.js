const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const isInt = (bool) => bool ? 1 : 0;

log(isInt(a >= b));
log(isInt(a > b));
log(isInt(a <= b));
log(isInt(a < b));
log(isInt(a === b));
log(isInt(a !== b));