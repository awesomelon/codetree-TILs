const fs = require("fs");
const [n, list] = fs.readFileSync(0).toString().trim().split('\n');

const origin = list.split(' ').map(Number);
const numbers = [...origin].sort((a,b) => a - b);

let result = '';

origin.forEach(v => {
    const findIndex = numbers.findIndex(number => number === v);
    result += findIndex + 1 + ' ';
    numbers[findIndex] = 0;
});

console.log(result)