const fs = require("fs");
const log = console.log;
const [h, m] = fs.readFileSync(0).toString().trim().split(':').map(Number);

log(`${h + 1}:${m}`)