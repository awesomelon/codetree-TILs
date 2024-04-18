const fs = require("fs");
const log = console.log;
const [h, w] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const b = (10000 * w) / (h * h);

const bmi = Math.floor(b);

log(bmi);

if(bmi > 25) {
    log('Obesity');
}