const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

let x = 0;
let white_tile = 0;
let black_tile = 0;

for(let i = 1; i < input.length; i++) {
    const [m, location] = input[i].split(' ');
    const move = Number(m);
    if(location === 'R') {
        x += move;
        black_tile += move;

        white_tile = white_tile - move > 0 ? white_tile - move: 0;
    }

    if(location === 'L') {
        x -= move;
        white_tile = move;

        black_tile = black_tile - move > 0 ? black_tile - move: 0;
    }
}


console.log(`${white_tile} ${black_tile}`);