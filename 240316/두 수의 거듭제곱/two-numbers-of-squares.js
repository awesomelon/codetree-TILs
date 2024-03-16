const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const power = (a, b) => {
    return a ** b;
}  

console.log(power(a, b));