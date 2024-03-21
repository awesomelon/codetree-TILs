const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const asc = (a, b) => a - b;

const A = input[1].split(' ').map(Number).sort(asc).join(' ');
const B = input[2].split(' ').map(Number).sort(asc).join(' ');


console.log(A === B ? 'Yes': "No");