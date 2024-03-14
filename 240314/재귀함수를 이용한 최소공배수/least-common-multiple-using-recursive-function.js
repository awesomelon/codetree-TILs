const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number).filter(v => v !== 1);

function recur(gcd) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(gcd % numbers[i] !== 0) {
            count++;
            break;
        }
    }

    if(count === 0) {
        return gcd;
    }

    return recur(gcd + 1);
}


console.log(recur(2));