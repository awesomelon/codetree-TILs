const fs = require("fs");
const log = console.log;
const [yyyy, mm, dd] = fs.readFileSync(0).toString().trim().split('.');

log(`${mm}-${dd}-${yyyy}`)