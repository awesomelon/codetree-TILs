const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const target = a * b * c;

function recur(n) {
    if(n < 10) {
        return n;
    }

    const last = n % 10;
    return recur(parseInt(n / 10)) + last
}

console.log(recur(target));