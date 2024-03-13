const fs = require('fs');
const [b, a] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

let count = b;
let result = '';

while(a <= count) {
    result += `${count} `;
    count-=2;
}

console.log(result);