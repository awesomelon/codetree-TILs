const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const m = Number(input);

if(m >= 3 && m <= 5) {
    log('Spring')
} 

if(m >= 6 && m <= 8) {
    log('Summer')
}

if(m >= 9 && m <= 11) {
    log('Fall')
}

if(m === 12 || (m >= 1 && m <= 2)) {
    log('Winter')
}