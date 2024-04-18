const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

if(n >= 80) {
    log('pass')
} else {
    log(`${80 - n} more score`);
}