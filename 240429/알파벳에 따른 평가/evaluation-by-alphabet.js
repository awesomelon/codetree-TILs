const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

if(input === 'S') {
    log('Superior')
} else if (input === 'A') {
    log('Excellent')
} else if( input === 'B') {
    log('Good')
} else if( input === 'C') {
    log('Usually')
} else if(input === 'D') {
    log('Effort')
} else {
    log('Failure')
}