const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

console.log(n*n);

if(n < 5) {
    console.log('tiny');
}