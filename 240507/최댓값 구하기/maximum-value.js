const fs = require("fs");
const log = console.log;
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if(a > b) {
    if(a > c) {
        log(a)
    } else {
        log(c)
    }
} else if(a > c) {
    if(a > b) {
        log(a)
    } else {
        log(b);
    }
} else if(b > c){
    if(b > a) {
        log(b)
    } else {
        log(a)
    }
} else {
    if(c > b) {
        log(c)
    } else {
        log(b);
    }
}