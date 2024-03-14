const fs = require('fs');
const [Y, M, D] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function getSeason(M) {
    if(M >= 3 && M <= 5) {
        return 'Spring';
    }

    if(M >= 6 && M <= 8) {
        return 'Summer';
    }

    if(M >= 9 && M <= 11) {
        return "Fall";
    }

    return 'Winter';
}

function validLeapYear(Y) {
    if(Y % 4 !== 0) {
        return false
    }

    if(Y % 100 !== 0) {
        return true;
    }

    if(Y % 400 === 0) {
        return true;
    }

    return false;
}



function inValidExsistsDay(Y, M, D) {
    let lastDays = [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    lastDays[2] = validLeapYear(Y) ? 29: 28;
    return D <= lastDays[M];    
}

function main(Y, M, D) {
    const invalid = inValidExsistsDay(Y, M ,D);

    if(!invalid) {
        return -1;
    }

    const season = getSeason(M);
    return season;
    
}

console.log(main(Y, M, D));