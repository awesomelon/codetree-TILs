const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim();

let x = 0, y = 0;
let heads = ['N', 'E', 'S', 'W'];
let cursor = 0;

for(const a of input) {
    if(a === 'L') {
        cursor = cursor === 0 ? 3: cursor - 1;
    }

    if(a === 'R') {
        cursor = cursor === 3 ? 0: cursor + 1;
    }

    if(a === 'F') {
        const head = heads[cursor];
        if(head === 'N') {
            y++;
        }

        if(head === 'E') {
            x++;
        }

        if(head === 'S') {
            y--;
        }

        if(head === 'W') {
            x--;
        }
    }
}

log(`${x} ${y}`);