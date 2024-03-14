const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function recur(n, line) {
    if(n !== 0) {
        console.log('* '.repeat(n));
    }
    if(n >= 1 && line <= N) {
        return recur(n - 1, line + 1);
    }
    if(n < N) {
        return recur(n + 1);
    }
}

recur(N, 1)