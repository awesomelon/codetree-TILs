const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 1000;
const MAX_R = 2000;

const n = Number(input[0]);
const segments = [];

let cursor = 0;

for(let i = 1; i <= n; i++) {
    let [distance, direction] = input[i].split(' ');
    distance = Number(distance);

    let sectionLeft, sectionRight;
    if(direction === 'L') {
        sectionLeft = cursor - distance;
        sectionRight = cursor;
        cursor -= distance;
    } else {
        sectionLeft = cursor;
        sectionRight = cursor + distance;
        cursor += distance;
    }

    segments.push([sectionLeft, sectionRight]);
}

const checked = Array(MAX_R + 1).fill(0);

segments.forEach(segment => {
    let [x1, x2] = segment;

    x1 += OFFSET;
    x2 += OFFSET;

    for(let i = x1; i < x2; i++) {
        checked[i] += 1;
    }
});

console.log(checked
    .filter(v => v >= 2).length
)