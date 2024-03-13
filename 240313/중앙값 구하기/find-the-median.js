const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

if(a > b && a < c) {
    console.log(a);
}

if(a > c && a < b) {
    console.log(a);
}

if(b > a && b < c) {
    console.log(b);
}

if(b > c && b < a) {
    console.log(b);
}

if(c > a && c < b) {
    console.log(c);
}

if(c > b && c < a) {
    console.log(c)
}