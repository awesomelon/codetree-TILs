const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = Number(input[0]);
const [b, c, d, e] = input[1].split(' ').map(v => +v);

if(a > b) {
    console.log(1);
} else {
    console.log(0);
}

if(a > c) {
    console.log(1);
} else {
    console.log(0);
}

if(a > d) {
    console.log(1);
} else {
    console.log(0);
}

if(a > e) {
    console.log(1);
} else {
    console.log(0);
}