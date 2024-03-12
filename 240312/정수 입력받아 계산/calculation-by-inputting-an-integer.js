const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const a = Number(input);
console.log(a * 2 + 3);