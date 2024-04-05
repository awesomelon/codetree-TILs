const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let line = 1;

const A = [0];
const B = [0];
let cursor = 0;
for(let i = 0; i < n; i++) {    
    const [v, t] = input[line++].split(' ').map(Number);    
    for(let j = 1; j <= t; j++) {
        cursor+=v;
        A.push(cursor);
    }
}

cursor = 0;
for(let i = 0; i < m; i++) {
    const [v, t] = input[line++].split(' ').map(Number);        
    for(let j = 1; j <= t; j++) {
        cursor+=v;
        B.push(cursor);
    }
}

let first = null;
let result = 0;

for(let i = 0; i < A.length; i++) {
    const a = A[i];
    const b = B[i];

    if(!first) {
        first = a > b ? 'A' : 'B';
    } else {
        if(a > b && first === 'B') {
            first = 'A';
            result++;
        } 
        
        if(a < b && first === 'A') {
            first = 'B';
            result++;
        }
    }
}

log(result)