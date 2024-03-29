const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_R = 2000
const OFFSET = 1000;

let area = Array.from(Array(MAX_R + 1), () => Array(MAX_R + 1).fill(0));

input.forEach((v, index) => {
    const [x1, y1, x2 ,y2] = v.split(' ').map(Number).map(v => v + OFFSET);

    for(let i = y1; i < y2; i++) {
        for(let j = x1; j < x2; j++) {
            if(!area[i]) area[i] = [];            
            area[i][j] = index + 1;
        }
    }
});

let min_x = MAX_R, max_x = 0, min_y = MAX_R, max_y = 0;
let firstRectExists = false;

for(let x = 0; x <= MAX_R; x++) {
    for(let y = 0; y <= MAX_R; y++) {
        if(area[x][y] === 1) {
            firstRectExists = true
            min_x = Math.min(min_x, x);
            max_x = Math.max(max_x, x);
            min_y = Math.min(min_y, y);
            max_y = Math.max(max_y, y);
        }
    }
}

let result;

if(!firstRectExists) {
    result = 0;
} else {
    result = (max_x - min_x + 1) * (max_y - min_y + 1)
}

console.log(result)