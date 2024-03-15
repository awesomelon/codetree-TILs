const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const n = Number(input[1]);

const int = parseInt(n, a);
console.log(int.toString(b));