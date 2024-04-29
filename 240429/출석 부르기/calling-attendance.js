const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const number = Number(input);

if(number === 1) {
    console.log('John');
} else if(number === 2) {
    console.log('Tom')
} else if(number === 3) {
    console.log('Paul')
} else {
    console.log('Vacancy')
}