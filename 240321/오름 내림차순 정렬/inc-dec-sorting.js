const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[1].split(' ').map(Number);

console.log(n.sort((a,b) => a - b).join(' '));
console.log(n.sort((a,b) => b - a).join(' '));