const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function operation(a, b, c) {
    const n1 = parseInt(a);
    const n2 = parseInt(c);

    const oper = `${n1} ${b} ${n2} =`;

    if(b === '*') {
        return `${oper} ${n1 * n2}`;
    }

    if(b === '+') {
        return `${oper} ${n1 + n2}`;
    }

    if(b === '-') {
        return `${oper} ${n1 - n2}`;
    }

    if(b === '/') {
        return `${oper} ${pasreInt(n1 / n2)}`;
    }
}

console.log(operation(a,b,c));