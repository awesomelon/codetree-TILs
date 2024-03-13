const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => Number(v));

let result = 0;

for(let i = a; i <= b; i++) {
    if(i % 6 === 0 && i % 8 !== 0) {
        result += i;
    }
}

console.log(result);