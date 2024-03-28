const fs = require("fs");
const [n, ...rest] = fs.readFileSync(0).toString().trim().split('\n');

const area = [];

rest.forEach(v => {
    const [x1, x2] = v.split(' ').map(Number);

    for(let i = x1; i < x2; i++) {
        if(!area[i]) area[i] = 0;
        area[i] += 1;
    }
});

console.log(area.filter(v => v > 1).length)