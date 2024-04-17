const fs = require("fs");
const log = console.log;
const [mm, dd, yyyy] = fs.readFileSync(0).toString().trim().split('-')

log(`${yyyy}.${mm}.${dd}`);