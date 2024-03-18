const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function factorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    }

    return factorial(n - 1) * n;
}

console.log(factorial(N));