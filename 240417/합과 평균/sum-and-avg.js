const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

log(a + b, ((a + b) / 2).toFixed(1))