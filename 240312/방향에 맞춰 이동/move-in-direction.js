const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let x = 0, y = 0;

for(let i = 1; i < input.length; i++) {
    const [location, move] = input[i].split(' ');
    const m = Number(move);
    

    if(location === 'N') {
        y += m
    }

    if(location === 'E') {
        x += m
    }

    if(location === 'S') {
        y -= m;
    }

    if(location === 'W') {
        x -= m;
    }
}

console.log(`${x} ${y}`);