const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);


function recur(n) {
    if(n === 1) {
        return 2;
    }

    if(n === 2) {
        return 4;
    }

    return recur(n - 1) * recur(n - 2) % 100;
}

console.log(recur(N));