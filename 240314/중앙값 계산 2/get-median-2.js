const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let result = [];

let text = '';

for(let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]);
    if(i % 2 === 0) {
        const sorted = result.sort((a, b) => a - b);
        const centerIndex = Math.floor(sorted.length / 2);        
        text += `${sorted[centerIndex]} `;
    }
}

console.log(text);