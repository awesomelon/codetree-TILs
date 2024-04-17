const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

log((a + b).toFixed(2))