const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const boolByInt = (bool) => bool ? 1 : 0;

log(boolByInt( a >= b));
log(boolByInt( a > b));
log(boolByInt(a <= b));
log(boolByInt(a < b));