const fs = require('fs');
const [ab, c] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a,b] = ab.split(' ');
console.log(`${a} ${b} ${c}`);