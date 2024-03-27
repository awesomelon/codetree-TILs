const fs = require("fs");
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', "Sat"];
const startAt = new Date(`2011-${m1}-${d1}`).getTime();
const targetAt = new Date(`2011-${m2}-${d2}`).getTime();


let diff = (targetAt - startAt) / 1000 / 60 / 60 / 24;
let cursor = 1;

while(diff) {
    if(diff < 0) {
        diff++;
        cursor--;
    }

    if(diff > 0) {
        diff--;
        cursor++;
    }

    if(cursor >= 6) {
        cursor = 0;
    }
}

console.log(dates[cursor]);