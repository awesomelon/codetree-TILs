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
    let pass = true;
    for(let i = 0; i < v.length; i++) {
        const yaxis = v[i];
        if(yaxis === 1) {
            if(pass) {
                y++;
                pass = false;
            }
            temp = i + 1;    
        }

    }

    if(temp > x) {
        x = temp;
    }
});

console.log(x * y)