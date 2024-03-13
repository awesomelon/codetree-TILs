const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


for(let i = 0; i < input.length; i++) {
    const current = input[i].split(' ').map(v => Number(v));
    const sum = current.reduce((prev, acc) => {
        prev += acc;
        return prev;
    }, 0);

    console.log(sum);
}