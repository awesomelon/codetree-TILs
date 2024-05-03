const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

if(a % 13 === 0 || a % 19 === 0) {
    log('True')
} else {
    log('False')
}