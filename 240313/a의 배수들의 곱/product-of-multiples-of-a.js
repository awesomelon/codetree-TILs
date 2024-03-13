const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => Number(v));

let result = 1;

for(let i = a; i <=b; i+=a) {
    result *=i;
}

console.log(result);