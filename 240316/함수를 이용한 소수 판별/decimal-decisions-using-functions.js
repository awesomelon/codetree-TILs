const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let memo = {};

function isPrime(n) {
    if(!memo[n]) {
        memo[n] = {
            isPrime: false,
            check: false
        };
    }

    if(memo[n].check) {
        return memo[n].isPrime;
    }

    let result = true;
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            result = false;
        }
    }

    memo[n] = {
        isPrime: result,
        check: true
    }

    return result;
}

function isEven(n) {
    return n % 2 === 0;
}

let sum = 0;

for(let i = a; i <=b; i++) {
    if(isEven(i)) {
        continue;
    }

    if(isPrime(i)) {
        sum+=i;
    }
}

console.log(sum);