const fs = require('fs');
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(v => +v);

const sum = a + b;
const minus = a - b;

console.log((sum / minus).toFixed(2))