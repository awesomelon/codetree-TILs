const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a >= 90) {
    if(b >= 95) {
        log(10);
        return;
    } 

    if(b >= 90) {
        log(5);
        return;
    }
}

log(0)