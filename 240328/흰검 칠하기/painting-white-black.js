const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const segments = [];
let cursor = 0;

const OFFSET = 1000;
const MAX_R = 2000;

for(let i = 1; i <= n; i++) {
    let [distance, direction] = input[i].split(' ');
    distance = Number(distance);

    let sectionLeft, sectionRight;
    if(direction === 'L') {
        sectionLeft = cursor - distance
        sectionRight = cursor;
        cursor -= distance;

        segments.push([sectionLeft, sectionRight, 'W'])
    } else {
        sectionLeft = cursor;
        sectionRight = cursor + distance;
        cursor += distance;
        segments.push([sectionLeft, sectionRight, 'B']);
    }
}

let result = [];

segments.forEach(segment => {
    let [x1, x2, color] = segment;
    x1 += OFFSET;
    x2 += OFFSET;
    
    for(let i = x1; i < x2; i++) {
        if(!result[i]) result[i] = [];
        if(result[i] === 'G') continue;
        result[i].push(color);

        const black = result[i].filter(v => v === 'B').length;
        const white = result[i].filter(v => v === 'W').length;

        if(black >= 2 && white >= 2) {
            result[i] = 'G';
        }
    }
})

let white = 0;
let black = 0;
let gray = 0;

result.filter(v => !!v).forEach(v => {
    if(v === 'G') {
        gray++;
    }

    const last = v[v.length - 1];
    if(last === 'B') {
        black++;
    }
    if(last === 'W') {
        white++;
    }
});

console.log(`${white} ${black} ${gray}`)