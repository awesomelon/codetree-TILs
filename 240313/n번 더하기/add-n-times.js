const fs = require('fs');
const [a, n] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

let result = a;

for(let i = 0; i < n; i++) {
    result += n;
    console.log(result);
}