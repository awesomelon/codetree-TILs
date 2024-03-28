const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const OFFSET = 100;
const rect = [];

for(let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number).map(v => v + OFFSET);

    for(let j = y1; j < y2; j++) {
        for(let k = x1; k < x2; k++) {
            if(!rect[j]) rect[j] = [];
            if(!rect[j][k]) rect[j][k] = 0;
            rect[j][k] = 1;            
        }
    }
}

const area = rect.filter(v => !!v).reduce((prev, acc) => {
    const sum = acc.filter(v => !!v).length;
    prev += sum;
    return prev;
}, 0)



console.log(area);