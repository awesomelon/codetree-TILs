const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function recur(n) {
    if(n === 0) return;

    process.stdout.write(`${n} `);
    recur(n-1);
    process.stdout.write(`${n} `);
}

recur(N);