const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const a = parseInt(input);

console.log(a === 1 ? 't': 'f');