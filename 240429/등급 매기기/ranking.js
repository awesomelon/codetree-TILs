const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

if( n >= 90) {
    log('A')
} else if ( n >= 80) {
    log('B')
} else if ( n >= 70) {
    log('C')
} else if ( n >= 60) {
    log('D')
}  else {
    log("F")
}