const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

let tiles = [];
let cursor = 50;
for(let i = 1; i < input.length; i++) {
    const [m, location] = input[i].split(' ');
    const move = Number(m);
    if(location === 'R') {        
       for(let i = cursor; i < cursor + move; i++) {
            tiles[i] = 'B';
        }
       cursor += move - 1;
    }

    if(location === 'L') {
        for(let i = cursor; i > cursor - move; i--) {
            tiles[i] = 'W';
        }
       cursor -= move + 1;
    }
}

const W = tiles.filter(v => v === 'W').length;
const B = tiles.filter(v => v === 'B').length;


console.log(`${W} ${B}`);