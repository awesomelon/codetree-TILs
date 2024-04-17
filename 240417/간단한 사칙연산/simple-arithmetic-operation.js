const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

log(a + b);
log(a - b);
log(Math.floor(a / b));
log(a % b);