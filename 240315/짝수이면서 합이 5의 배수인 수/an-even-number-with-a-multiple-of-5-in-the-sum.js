const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

function validEven(n) {
    return n % 2 === 0;
}

function evenAndFive(n) {
    const check = validEven(n);
    if(!check) {
        return 'No';
    }

    const [a, b] = `${n}`;
    if((Number(a) + Number(b)) % 5 === 0) {
        return 'Yes';
    }
}

console.log(evenAndFive(n));