const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const a = parseFloat(input) + 1.5;
console.log(a.toFixed(2));