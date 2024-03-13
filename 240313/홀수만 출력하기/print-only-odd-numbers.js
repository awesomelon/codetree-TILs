const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

for(let i = 1; i <= n; i++) {
    const current = Number(input[i]);

    if(current % 2 === 1 && current % 3 === 0) {
        console.log(current);
    }
}