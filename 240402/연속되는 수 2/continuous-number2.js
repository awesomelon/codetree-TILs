const fs = require("fs");
const [n, ...numbers] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let maxCnt = 1;
let tempCnt = 1;
for(let i = 0; i < n; i++) {
    const current = numbers[i];
    const prev = numbers[i - 1];
    if(prev === current) {
        tempCnt++;        
    }

    if(prev !== current) {
        tempCnt = 1;
    }

    if(maxCnt < tempCnt) {
        maxCnt = tempCnt;
    }
}

console.log(maxCnt);