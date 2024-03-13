const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

let result = '';

for(let i = a; i <= b; i+=2) {
    if(i % 2 === 1) {
        result += `${i} `;
    }
}

console.log(result);