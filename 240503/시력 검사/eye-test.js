const fs = require("fs");
const log = console.log;
const [left, right] = fs.readFileSync(0).toString().trim().split('\n').map(parseFloat);

if(left >= 1.0 && right >= 1.0) {
    log('High')
} else if(left >= 0.5 && right >= 0.5) {
    log('Middle')
} else {
    log('Low')
}