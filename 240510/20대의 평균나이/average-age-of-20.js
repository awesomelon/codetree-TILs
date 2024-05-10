const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;
let count = 0;

for(const person of input) {    
    if((person - 20 < 0) || (person - 20 >= 10)) {
        break;
    }
    sum += person;
    count++;
}

log((sum / count).toFixed(2));