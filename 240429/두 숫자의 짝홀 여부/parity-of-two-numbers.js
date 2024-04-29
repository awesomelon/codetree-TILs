const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const isEven = n => n % 2 === 0;

if(isEven(a)) {
    log('even')
} else {
    log('odd')
}

if(isEven(b)) {
    log('even')
} else {
    log('odd')
}