const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let result = 0;

for(let i = m; i <= m*n; i++) {
    if(i % n === 0 && i % m === 0) {        
        result = i;
        break;
    }
}

console.log(result);