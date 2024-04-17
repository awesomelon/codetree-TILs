const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

log(`${parseInt(a/b)}...${a % b}`);