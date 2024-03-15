const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function sum(n) {
    return parseInt(((1 + n) * n / 2) / 10);
}

console.log(sum(N));