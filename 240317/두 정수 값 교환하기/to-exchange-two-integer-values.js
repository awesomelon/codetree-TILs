const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const swap = (a, b) => {
    [a, b] = [b, a];
    return `${a} ${b}`;
}

console.log(swap(n, m));