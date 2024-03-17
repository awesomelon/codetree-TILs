const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const array = input[1].split(' ').map(Number);

const isEven = (n) => {
    return n % 2 === 0;
}

const modify = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if(isEven(current)) {
            arr[i] = parseInt(current/2);
        }
    }
}

modify(array);

console.log(array.join(' '));