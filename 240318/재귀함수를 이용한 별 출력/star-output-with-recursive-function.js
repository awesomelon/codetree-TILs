const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);


function recur(n) {
    if(n === 0) return;

    recur(n - 1);
    for(let i = 0; i < n; i++) {
        process.stdout.write('*');
    }
    console.log()
}

recur(N);