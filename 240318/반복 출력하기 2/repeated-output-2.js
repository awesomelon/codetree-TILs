const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

function recur(n) {
    if(n === 0) {
        return;
    }
    recur(n - 1);
    console.log('HelloWorld');
}

recur(N);