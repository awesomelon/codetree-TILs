const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function getMinNumber(a, b, c) {
    return Math.min(a, b, c);
}

console.log(getMinNumber(a,b,c));