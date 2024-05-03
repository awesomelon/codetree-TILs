const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

if((n % 2 === 1 && n % 3 === 0) || (n % 2 === 0 && n % 5 === 0)) {
    log('true')
} else {
    log('false')
}