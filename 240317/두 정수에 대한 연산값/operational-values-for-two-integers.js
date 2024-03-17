const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const calc = (a, b) => {
    if(a > b) {
        a += 25;
        b *= 2;
    } else {
        a *= 2;
        b += 25;
    }

    return `${a} ${b}`;
}

console.log(calc(a, b));