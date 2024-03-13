const fs = require('fs');
const [a, b ,c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

if(b > a && b < c) {
    console.log(1)
} else {
    console.log(0);
}