const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function printNumbers1(n) {
    if(n === 0) return;
    process.stdout.write(`${n} `);
    printNumbers1(n - 1);
}

function printNumbers2(n) {
    if(n === 0) return;
    printNumbers2(n - 1);
    process.stdout.write(`${n} `)
}

printNumbers2(N);
console.log();
printNumbers1(N);