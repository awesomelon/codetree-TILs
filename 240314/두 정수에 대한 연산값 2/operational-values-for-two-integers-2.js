const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function calcNumbers(a, b) {
    if(a > b) {
        return `${a * 2} ${b + 10}`;
    }

    return `${a + 10} ${b * 2}`;
}

console.log(calcNumbers(a,b));