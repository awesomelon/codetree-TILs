const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let area = [];
const OFFSET = 1000;

input.forEach((v, index) => {
    const [x1, y1, x2 ,y2] = v.split(' ').map(Number).map(v => v + OFFSET);

    for(let i = y1; i < y2; i++) {
        for(let j = x1; j < x2; j++) {
            if(!area[i]) area[i] = [];            
            area[i][j] = index + 1;
        }
    }
});

area = area.filter(v => !!v).map(v => v.filter(v => !!v))

let x = 0, y = 0;

area.forEach(v => {
    let temp = 0;
    v.forEach((yaxis, i) => {
        if(i === 0 && yaxis === 1) {
            y++;
        }

        if(yaxis === 1) {
            temp++;
        }
    })

    if(temp > x) {
        x = temp;
    }
});

console.log(x, y)