const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);


const OFFSET = 1000;
const MAX_K = 100000;
let cursor = MAX_K;

let a = Array(2 * MAX_K + 1).fill(0);
let cntB = Array(2 * MAX_K + 1).fill(0);
let cntW = Array(2 * MAX_K + 1).fill(0);
let b = 0, w = 0, g = 0;


for(let i = 1; i <= n; i++) {
    let [distance, direction] = input[i].split(' ');
    distance = Number(distance);

   if(direction === 'L') {
        while(distance > 0) {
            a[cursor] = 1;
            cntW[cursor] += 1;
            distance -= 1;

            if(distance) {
                cursor -= 1;
            }
        }
   } else {
        while(distance > 0) {
            a[cursor] = 2;
            cntB[cursor] += 1;
            distance -= 1;

            if(distance) {
                cursor += 1;
            }
        }
   }
}

for(let i = 0; i < 2 * MAX_K + 1; i++) {
    if(cntB[i] >= 2 && cntW[i] >= 2) {
        g += 1;
    } else if(a[i] === 1) {
        w += 1;
    } else if(a[i] === 2) {
        b += 1;
    }
}

console.log(`${w} ${b} ${g}`)