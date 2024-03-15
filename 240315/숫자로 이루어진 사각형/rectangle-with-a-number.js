const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

let number = 1;

for(let i = 1; i <= N * N; i++) {
    if(number > 9) {
        number = 1;
    }
    process.stdout.write(`${number} `);
    if(i % N === 0) {
        console.log();
    }
    number++;
}