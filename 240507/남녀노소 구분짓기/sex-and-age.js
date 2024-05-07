const fs = require("fs");
const log = console.log;
const [sex, age] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

if(sex === 0) {
    if(age >= 19) {
        log('MAN')
    } else {
        log('BOY')
    }
} else {
    if(age >= 19) {
        log('WOMAN')
    } else {
        log('GIRL')
    }
}