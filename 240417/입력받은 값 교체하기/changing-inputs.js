const fs = require("fs");
const log = console.log;
let [b, a] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

log(a, b)