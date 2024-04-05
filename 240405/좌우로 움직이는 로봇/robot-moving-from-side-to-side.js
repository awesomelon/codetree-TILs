const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const A = [0];
const B = [0];

let line = 1;
let cursor = 0;

for(let i = 0; i < n; i++) {
    let [t, d] = input[line++].split(' ');
    t = Number(t);
    while(t-- > 0) {
        d === 'L' ? cursor--: cursor++;  
        A.push(cursor);            
    }    
}

cursor = 0;

for(let i = 0; i < m; i++) {
    let [t, d] = input[line++].split(' ');
    t = Number(t);
    while(t-- > 0) {
        d === 'L' ? cursor--: cursor++;
        B.push(cursor);              
    }    
}

let bigSizeArray = A.length > B.length ? A.length: B.length;

let tempA = 0;
let tempB = 0;
let cnt = 0;
for(let i = 2; i <= bigSizeArray; i++) {
    let a = A[i];
    let b = B[i];
    let prev_a = A[i-1];
    let prev_b = B[i-1];

    if(a === undefined) {
        a = tempA;
    }

    if(b === undefined) {
        b = tempB;
    }

    tempA = a;
    tempB = b;

    if(prev_a !== prev_b && a === b) {
        cnt++;
    }

}


log(cnt);