const fs = require("fs");
const [n, ...list] = fs.readFileSync(0).toString().trim().split('\n');

let blocks = [];

list.forEach(v => {
    const [A, B] = v.split(' ').map(Number);
    for(let i = A; i <= B; i++) {
        if(!blocks[i-1]) {
            blocks[i-1] = 0;
        }
        blocks[i-1]++;
    }
});


console.log(Math.max(...blocks.filter(v => !!v)))