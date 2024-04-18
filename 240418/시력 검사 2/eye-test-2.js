const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

if(a >= 1.0) {
    log('High');
} else if(a >= 0.5) {
    log('Middle');
} else {
    log('Low');
}