const fs = require("fs");
const log = console.log;
const [c, a, b] = fs.readFileSync(0).toString().trim().split('\n');

log(c);
log(Number(a).toFixed(2));
log(Number(b).toFixed(2));