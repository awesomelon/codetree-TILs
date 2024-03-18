const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);


function recur(n) {
    if(n === 1) {
        return 1;
    }

    return recur(n - 1) + n;
}

console.log(recur(N))