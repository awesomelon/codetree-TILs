const fs = require("fs");
const log = console.log;
const [a, b, c] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

log(a.toFixed(3));
log(b.toFixed(3));
log(c.toFixed(3));