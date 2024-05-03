const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

if(a >= 10 && a <= 20) {
    log('yes')
} else {
    log('no')
}