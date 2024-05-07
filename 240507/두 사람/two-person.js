const fs = require("fs");
const log = console.log;
const [a, b] = fs.readFileSync(0).toString().trim().split('\n');

const [age_a, sex_a] = a.split(' ');
const [age_b, sex_b] = b.split(' ');

if((Number(age_a) >=19 && sex_a === 'M') || (Number(age_b) >= 19 && sex_b === 'M')) {
    log(1);
} else {
    log(0);
}