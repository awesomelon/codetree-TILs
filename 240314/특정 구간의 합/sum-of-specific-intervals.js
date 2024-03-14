const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for(let i = 2; i < input.length; i++) {
    const [a1, a2] = input[i].split(' ').map(Number);

    const sum = A.reduce((prev, acc, index) => {
        if(index >= a1 - 1 && index <= a2 - 1) {
            prev += acc;
        }

        return prev;
    }, 0);

    console.log(sum);
}