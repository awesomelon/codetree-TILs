const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

let result = '';

for(let i = 1; i <= a; i++) {
    if(i % 2 === 0 && i % 4 !== 0) {
        continue;
    }

    if(parseInt(i / 8) % 2 === 0 ) {
        continue;
    }

    if(i % 7 < 4) {
        continue;
    }

    result += `${i} `;
}

log(result);