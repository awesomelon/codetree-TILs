const fs = require('fs');
const [M, D] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isMonthInDate = (m, d) => {
    return dates[m] >= d;
}

console.log(isMonthInDate(M, D) ? 'Yes': 'No');