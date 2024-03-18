const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input[0]);

function recur(n) {
    if(n === 0) {
        return;
    }
    console.log('HelloWorld');
    recur(n - 1);
}

recur(N);