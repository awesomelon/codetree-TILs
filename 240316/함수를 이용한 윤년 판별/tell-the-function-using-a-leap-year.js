const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const y = Number(input);

function isLeapYear(n) {
    if(n % 4 === 0) {
        if(n % 100 === 0 && n % 400 !== 0) {
            return false;
        }
        return true;
    }
    return false;
}

console.log(isLeapYear(y));