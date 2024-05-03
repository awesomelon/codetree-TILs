const fs = require("fs");
const log = console.log;
const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

const [math_a, eng_a] = A.split(' ').map(Number);
const [math_b, eng_b] = B.split(' ').map(Number);

if(math_a > math_b && eng_a > eng_b) {
    log(1)
} else {
    log(0)
}