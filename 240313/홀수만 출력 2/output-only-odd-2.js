const fs = require('fs');
const [b, a] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

let result = '';

for(let i = b; i >= a; i-=2) {
    if(i % 2 === 1) {
        result += `${i} `;
    }
}

console.log(result)