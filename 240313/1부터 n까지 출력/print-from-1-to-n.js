const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let text = '';

for(let i = 1; i <= n; i++) {
    text+=`${i} `
}

console.log(text.trim());