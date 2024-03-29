const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 100;
const DISTANCE = 8;

const n = Number(input[0]);
let rects = [];

for(let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number).map(v => v + OFFSET);

    for(let j = y; j < y + DISTANCE; j++) {
        for(let k = x; k < x + DISTANCE; k++) {
            if(!rects[j]) rects[j] = [];
            rects[j][k] = 1;
        }
    }
}

console.log(rects.flat().length);