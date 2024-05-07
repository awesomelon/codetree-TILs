const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a >= 90) {
    if(b >= 95) {
        log(100000);
        return;
    } 

    if(b >= 90) {
        log(50000);
        return;
    }
}

log(0)