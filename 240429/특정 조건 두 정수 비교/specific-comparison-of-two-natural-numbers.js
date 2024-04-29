const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let result = "";

if(a < b) {    
    result += "1 "
} else {
    result += "0 "
}

if( a === b) {
    result += 1
} else {
    result += 0
}

log(result)