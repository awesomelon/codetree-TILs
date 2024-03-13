const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let count = 0;

while(count < n) {
    console.log('*');
    count++;
}