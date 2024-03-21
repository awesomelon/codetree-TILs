const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);


function recur(n) {
    if(n === 1) {
        return 1;
    }

    if(n === 2) {
        return 2;
    }

    return recur(parseInt(n / 3)) + recur(n - 1);
}

console.log(recur(N));