const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let area = [];
const OFFSET = 1000;

input.forEach((v, index) => {
    const [x1, y1, x2 ,y2] = v.split(' ').map(Number).map(v => v + OFFSET);

    for(let i = y1; i < y2; i++) {
        for(let j = x1; j < x2; j++) {
            if(!area[i]) area[i] = [];            
            area[i][j] = index === 2 ? 0: 1;
        }
    }
});

let result = 0;

area.filter(v => !!v)
    .forEach(v => {
        v.forEach(vv => {
            if(vv) {
                result++;
            }
        })
});

console.log(result)