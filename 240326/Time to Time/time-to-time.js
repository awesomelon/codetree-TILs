const fs = require("fs");
const [a,b,c,d] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let prev_a = a, prev_b = b, after_c = c, after_d = d;
let minutes = 0;
while(true) {    
    if(prev_a === after_c && prev_b === after_d) {
        console.log(minutes)
        return;
    }

    prev_b++;
    minutes++;

    if(prev_b > 59) {
        prev_b = 0;
        prev_a++;
    }

}