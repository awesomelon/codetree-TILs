const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

if(n < 0) {
    log('ice');
} else if(n >= 100) {
    log('vapor')
} else {
    log('water')
}