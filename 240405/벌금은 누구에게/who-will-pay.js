const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);

const students = Array(n).fill(0);

let result = -1;

for(let i = 1; i < input.length; i++) {
    const student = Number(input[i]);
    students[student]++;

    if(students[student] >= k) {
        result = student;
        break;
    }    
}

log(result);