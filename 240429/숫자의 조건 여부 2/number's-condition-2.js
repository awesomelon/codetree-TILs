const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

if(a === 5) {
    log('A')
}

if( a % 2 === 0) {
    log('B')
}