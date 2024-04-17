const fs = require("fs");
const log = console.log;
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const sum = a + b + c;

log(sum);
log(parseInt(sum / 3));