const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => Number(v));

if(a <= 0) {
    console.log(0);
} else {
    console.log(`${a}`.repeat(b));
}