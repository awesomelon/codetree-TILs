const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const a = Number(input);

if(a % 3 === 0 || a % 5 === 0) {
    console.log(1)
} else {
    console.log(0)
}