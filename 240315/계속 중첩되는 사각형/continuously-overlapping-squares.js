const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let xy = [];

for(let i = 1; i < input.length; i++) {
    const [a, b, c, d] = input[i].split(' ').map(Number);
    const x1 = a + 100, y1 = b + 100, x2 = c + 100, y2 = d + 100;
    for(let j = y1; j < y2; j++) {
        if(!xy[j]) {
            xy[j] = [];
        }

        for(let k = x1; k < x2; k++) {
            xy[j][k] = i % 2 === 1 ? 'R': 'B';
        }
    }
}

let area = 0;

for(let i = 0; i < xy.length; i++) {
    if(xy[i]) {
        for(let j = 0; j < xy[i].length; j++) {
            const color = xy[i][j];
            if(color === 'B') {
                area++;
            }
        }
    }
}

console.log(area);