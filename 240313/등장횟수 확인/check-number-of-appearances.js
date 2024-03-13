const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);

const even = input.filter(v => v % 2 === 0);

console.log(even.length);