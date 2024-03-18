const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function recur(n) {
    if(n < 10) {
        return n ** 2;
    }

    return recur(parseInt(n / 10)) + (n % 10) ** 2;
}

console.log(recur(N));