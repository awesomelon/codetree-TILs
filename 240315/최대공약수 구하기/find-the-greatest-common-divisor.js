const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function gcd() {
    let result = 1;
    for(let i = 2; i < Math.min(n,m); i++) {
        if(n % i === 0 && m % i === 0) {
            result = i;            
        }
    }

    return result;
}

console.log(gcd());