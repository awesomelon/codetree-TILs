const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[1];
const B = input[2];

const compare = (a, b) => {
    return a.includes(b) ? 'Yes': "No";
};


console.log(compare(A, B));