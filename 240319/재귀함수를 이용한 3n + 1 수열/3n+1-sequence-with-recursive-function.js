const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function recur(n) {
    if(n === 1) {
        return 0;
    }

    return n % 2 === 0 ? recur(parseInt(n / 2)) + 1: recur(n * 3 + 1)+ 1;
}

console.log(recur(N));