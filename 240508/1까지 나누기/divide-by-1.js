const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);

let count = 0;
let division = 1;

while(n > 1) {
    n =  parseInt(n / division);
    division++;
    count++;
}
log(count);