const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);


function fibo(n) {
    if(n === 1) {
        return 1;
    }

    if(n === 2) {
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(N));