const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const vaildDateTimes = (a, b, c) => {
    if(11 > a) {
        return true;
    }

    if(11 === a && 11 > b) {
        return true;
    }

    if(11 === a && 11 === b && 11 > c) {
        return true;
    }

    return false;
}


const howManyMinutes = () => {
    let minutes = 0;
    let _a = a, _b = b, _c = c;
    let startDate = 11, startHour = 11, startMinutes = 11;
    while(true) {
        if(vaildDateTimes(_a, _b, _c)) {
            return -1;
        }

        if(startDate === a && startHour === b && startMinutes === c) {
            return minutes;
        }

        startMinutes++;
        minutes++;

        if(startMinutes > 59) {
            startMinutes = 0;
            startHour++;
        }

        if(startHour > 23) {
            startHour = 0;
            startDate++;
        }
    }
}


console.log(howManyMinutes(a, b, c));