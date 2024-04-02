const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let tempCnt = 1, maxCnt = 1;

for(let i = 0; i < n; i++) {
    const current = numbers[i];
    const prev = numbers[i - 1];

    if(prev > t && current > t) {
        tempCnt++;
    } else {
        tempCnt = 1;
    }

    if(tempCnt > maxCnt) {
        maxCnt = tempCnt;
    }
}

console.log(maxCnt);