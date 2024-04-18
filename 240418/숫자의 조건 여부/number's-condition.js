const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

if(a >= 113) {
    log(1);
} else {
    log(0);
}