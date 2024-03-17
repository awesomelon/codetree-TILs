const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = input[1].split(' ').map(Number).map(Math.abs).join(' ');

console.log(result)