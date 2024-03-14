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
    if(Y % 4 === 0) {
        if(Y % 100 === 0) {
            if(Y % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

function lastDay(Y, M) {
    if(M >= 1 && M <= 7) {
        if(M % 2 === 0) {
            const checkLeap = validLeapYear(Y);
            if(M === 2) {
                if(checkLeap) {
                    return 29;
                }
                return 28;
            }

            return 30;
        } else {
            return 31;
        }
    } else {
        if(M % 2 === 0) {
            return 31;
        }

        return 30;
    }
}

function validExsistsDay(Y, M, D) {
    const getLastDay = lastDay(Y, M);
    if(D > getLastDay) {
        return false;
    }

    return true;
}

function main(Y, M, D) {
    const validDay = validExsistsDay(Y, M ,D);

    if(validDay) {
        const season = getSeason(M);
        return season;
    }

    return -1;
}

console.log(main(Y, M, D));