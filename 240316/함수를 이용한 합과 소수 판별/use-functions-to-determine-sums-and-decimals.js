const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const isPrimse = (n) => {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }

    return true;
}

const isEven = (n) => {
    let sum = 0;
    const asString = `${n}`;
    for(let i = 0; i < asString.length; i++) {
        sum += Number(asString[i]);
    }

    if(sum % 2 === 0) {
        return true;
    }

    return false;
}

let cnt = 0;

for(let i = a; i <= b; i++) {
    if(isPrimse(i) && isEven(i)) {
        cnt++;
    }
}

console.log(cnt);