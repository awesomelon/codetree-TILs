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

    if(N % 2 === 0) {
        if(n % 2 === 0) {
            return recur(n - 1) + n;
        }
        return recur(n - 1);
    } else {
        if(n % 2 === 1) {
            return recur(n - 1) + n;
        }
        return recur(n - 1);
    }
}

console.log(recur(N));