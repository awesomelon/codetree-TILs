const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const [a_age, a_sex] = a.split(' ');
const [b_age, b_sex] = b.split(' ');

if((a_sex === 'M' && Number(a_age) >= 19) || (b_sex === 'M' && Number(b_age) >= 19)) {
    console.log(1);
} else {
    console.log(0);
}