const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

if(a > b) {
    console.log(a * b);
} else {
    console.log(b / a);
}