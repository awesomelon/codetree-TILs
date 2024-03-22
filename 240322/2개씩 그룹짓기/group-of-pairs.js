const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number).sort((a,b) => a - b);

const sum = [];

for(let i = 0; i < Math.floor(numbers.length / 2); i++) {
    const first = numbers[i];
    const last = numbers[numbers.length - 1 - i];
    sum.push(first + last);
}

console.log(Math.max(...sum));