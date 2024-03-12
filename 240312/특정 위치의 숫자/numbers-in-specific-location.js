const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
console.log(input[2] + input[4] + input[9]);