const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const y = Number(input);

if(y % 4 === 0) {
    if(y % 100 === 0 && y % 400 !== 0) {
        log('false');
        return;
    }

    log('true')
}