const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function recur(n, s) {
    if(n === 1) {
        return s;
    }

    return recur(n % 2 === 0 ? parseInt(n / 2) : parseInt(n / 3), s + 1);
}

console.log(recur(N, 0));