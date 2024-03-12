const fs = require('fs');
const [s, t] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(t);
console.log(s);