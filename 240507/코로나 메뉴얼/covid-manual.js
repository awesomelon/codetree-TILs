const fs = require("fs");
const log = console.log;
const input = fs.readFileSync(0).toString().trim().split('\n');

let count = 0;

input.forEach(v => {
    const [x, t] = v.split(' ');

    if(x === 'Y') {
        if(Number(t) >= 37) {
            count++;
        }
    }
});

if(count >= 2) {
    log('E')
} else {
    log('N')
}