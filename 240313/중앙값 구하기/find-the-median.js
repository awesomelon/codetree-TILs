const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);


if(a > b) {
    if(c > a) {
        console.log(a);
    } else if(b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
} else {
    if(c > b) {
        console.log(b);
    } else if(a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
}