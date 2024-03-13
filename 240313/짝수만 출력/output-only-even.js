const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

let count = a;
let result = '';

while (count <= b) {
    result += `${count} `;
    count+=2;
}

console.log(result);