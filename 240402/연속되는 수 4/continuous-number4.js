const fs = require("fs");
const [n, ...numbers] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let tempCnt = 1, maxCnt = 1;

for(let i = 0; i < n; i++) {
    const current = numbers[i];
    const prev = numbers[i - 1];

    if(prev < current) {
        tempCnt++;
    } else {
        tempCnt = 1;
    }

    if(maxCnt < tempCnt) {
        maxCnt = tempCnt;
    }
}

console.log(maxCnt);